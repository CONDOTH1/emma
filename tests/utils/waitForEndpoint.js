const request = require('request-promise');
const logger = require('../../src/utils/logger');

/**
 * Waits for the given amount of time.
 * @param {Number} waitMs - The time to sleep in milliseconds.
 * @returns {Promise<void>} Nothing.
 */
// eslint-disable-next-line no-underscore-dangle
function _sleep(waitMs) {
  return new Promise((resolve) => setTimeout(resolve, waitMs || 0));
}

/**
 * Waits for the given endpoint to return a 2xx status code. Will keep trying until the time is up.
 * @param {String|Object} requestOptions - The options to pass to the request() module.
 * @param {Number|void} timeoutMs - The number of milliseconds to keep retrying the endpoint for.
 * @param {Number|void} waitMs - The number of milliseconds to wait between retries.
 * @returns {Promise<*>|void} The return value of the request() module, if successful.
 */
function waitForEndpoint(requestOptions, timeoutMs = 30000, waitMs = 2000) {
  const uri = requestOptions.uri || requestOptions.url || requestOptions;
  let isPromiseFulfilled = false;

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    // Reject the promise if we timeout.
    setTimeout(() => {
      if (!isPromiseFulfilled) {
        isPromiseFulfilled = true;
        const err = new Error(`Timeout: Waited for URI "${uri}" for ${timeoutMs}ms without luck.`);
        reject(err);
      }
    }, timeoutMs || 0);

    // Repeat the request until it returns a 2xx status code.
    do {
      try {
        logger('%s', `Trying URI "${uri}"...`);
        const result = await request(requestOptions); // eslint-disable-line no-await-in-loop
        isPromiseFulfilled = true;
        resolve(result);
      } catch (err) {
        logger('%s', `Healthcheck error "${err.message}" - retrying in ${waitMs}ms...`);
        await _sleep(waitMs || 0); // eslint-disable-line no-await-in-loop
      }
    } while (!isPromiseFulfilled);
  });
}

module.exports = waitForEndpoint;
