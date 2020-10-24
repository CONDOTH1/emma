/* eslint-disable prefer-arrow-callback */
const {
  AfterAll, When, Then, Given, Before,
} = require('@cucumber/cucumber');
const { expect } = require('chai');
const fetch = require('node-fetch');
const waitForEndpoint = require('../utils/waitForEndpoint');
const responses = require('../utils/responses');

const server = require('../../src/app');

const beforeAfterTimeout = { timeout: 60 * 1000 };
const TEST_URL = process.env.TEST_URL || 'http://localhost:3000';

Before(async () => {
  const opts = {
    url: `${TEST_URL}/emma/healthcheck/ready`, // eslint-disable-line no-process-env
    method: 'GET',
  };
  await waitForEndpoint(opts, beforeAfterTimeout.timeout);
});

AfterAll(() => {
  server.close();
});

Given('I have the following from date, {string}', function (fromDate) {
  if (!this.qs) this.qs = {};
  this.qs.fromDate = fromDate;
});

Given('I have the following to data, {string}', function (toDate) {
  if (!this.qs) this.qs = {};
  this.qs.toDate = toDate;
});

When('I call {string} {string}', async function (method, path) {
  const url = new URL(`${process.env.TEST_URL || 'http://localhost:3000'}${path}`);
  url.search = new URLSearchParams(this.qs || {}).toString();
  const response = await fetch(url, { method });
  this.statusCode = response.status;
  this.responseBody = await response.json();
});

Then('I should get the expected status code {int}', function (statusCode) {
  expect(this.statusCode).to.eql(statusCode);
});

Then('{string} response body should match their expected {string}', function (name, responseType) {
  const expectedResponse = responses[name][responseType];
  expect(this.responseBody).to.eql(expectedResponse);
});
