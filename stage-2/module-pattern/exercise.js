/*
 * Exercise: Create some modules!
 *
 * When you think you have finished, run the command:
 *   npm run s2.modules
 * This will run a series of tests which should all pass.
 */
'use strict';

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */
let UrlParser = (function () {
  function extractUrl(url, n) {
    return url.match(/(http?s):\/\/(.*)\/(.*)\?(.*)/)[n]
  }

  return {
    // a function that takes a URL and returns its protocol
    protocol: function(url) {
      return extractUrl(url, 1)
    },
    // a function that takes a URL and returns its domain
    domain: function(url) {
      return extractUrl(url, 2)
    },
    // a function that takes a URL and returns its path
    path: function(url) {
      return extractUrl(url, 3)
    },
    // a function that takes a URL and returns its query string
    querystring: function(url) {
      return extractUrl(url, 4)
    },
  };
})();

/*
 * Create a module that can support multiple instances (like in our example).
 * The module should be a function with several additional methods attached as
 * attributes.
 *
 * Example:
 * var exampleBuilder = createUrlBuilder('https://example.com');
 *
 * var url = exampleBuilder({ query: { foo: 1, bar: 2 }, path: 'hello' });
 *
 * console.log(url); // https://example.com/hello?foo=1&bar=2
 *
 * exampleBuilder.
 */
let createUrlBuilder = function (host) {
  // fill in ...

  let builder = function () {}

  return builder;
};


module.exports = {
  UrlParser,
  createUrlBuilder,
};
