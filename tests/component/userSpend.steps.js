/* eslint-disable prefer-arrow-callback */
const {
  AfterAll, When, Then, Given, Before,
} = require('cucumber');
const { expect } = require('chai');
const rp = require('request-promise');
const waitForEndpoint = require('../utils/waitForEndpoint');
const responses = require('../utils/responses');

const server = require('../../src/app');

const beforeAfterTimeout = { timeout: 60 * 1000 };
const TEST_URL = process.env.TEST_URL || 'http://localhost:3000';

Before(async () => {
  const opts = {
    uri: `${TEST_URL}/emma/healthcheck/ready`, // eslint-disable-line no-process-env
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
  this.response = await rp({
    url: `${process.env.TEST_URL || 'http://localhost:3000'}${path}`, // eslint-disable-line no-process-env
    headers: this.headers,
    body: this.body,
    qs: this.qs,
    form: this.form,
    method,
    resolveWithFullResponse: true,
    json: true,
    simple: false,
  });
});

Then('I should get the expected status code {int}', function (statusCode) {
  expect(this.response.statusCode).to.eql(statusCode);
});

Then('{string} response body should match their expected {string}', function (name, responseType) {
  const expectedResponse = responses[name][responseType];
  expect(this.response.body).to.eql(expectedResponse);
});
