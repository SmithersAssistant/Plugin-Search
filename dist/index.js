'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

exports.default = function (robot) {
  /**
   * Search Engines
   */
  robot.listen(/^google (.*)$/, {
    description: "search something on Google",
    usage: 'google <query>'
  }, function (_ref) {
    var matches = _ref.matches;

    _electron.shell.openExternal('https://www.google.be/search?q=' + matches.query.split(' ').join('+'));
  });

  robot.listen(/^duckduckgo (.*)$/, {
    description: "search something on DuckDuckGo",
    usage: 'duckduckgo <query>'
  }, function (_ref2) {
    var matches = _ref2.matches;

    _electron.shell.openExternal('https://duckduckgo.com/?q=' + matches.query.split(' ').join('+'));
  });

  /**
   * Multi Media
   */
  robot.listen(/^youtube (.*)$/, {
    description: "search something on YouTube",
    usage: 'youtube <query>'
  }, function (_ref3) {
    var matches = _ref3.matches;

    _electron.shell.openExternal('https://www.youtube.com/results?search_query=' + matches.query.split(' ').join('+'));
  });

  robot.listen(/^github (.*)$/, {
    description: "search something on GitHub",
    usage: 'github <query>'
  }, function (_ref4) {
    var matches = _ref4.matches;

    _electron.shell.openExternal('https://github.com/search?q=' + matches.query.split(' ').join('+') + '&ref=opensearch');
  });

  robot.listen(/^facebook (.*)$/, {
    description: "search something on Facebook",
    usage: 'facebook <query>'
  }, function (_ref5) {
    var matches = _ref5.matches;

    _electron.shell.openExternal('https://www.facebook.com/search/top/?q=' + matches.query.split(' ').join('%20'));
  });

  robot.listen(/^wikipedia (.*)$/, {
    description: "search something on Wikipedia",
    usage: 'wikipedia <query>'
  }, function (_ref6) {
    var matches = _ref6.matches;

    _electron.shell.openExternal('https://wikipedia.org/wiki/Special:Search/' + matches.query.split(' ').join('%20'));
  });
};