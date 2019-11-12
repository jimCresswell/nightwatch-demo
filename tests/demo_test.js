/**
 * A demo test using the Nightwatch JS test framework.
 *
 * Written using the Nightwatch format rather than Mocha.
 */
module.exports = {
  before: function(browser) {
    console.log("Before the suite.");
  },
  after: function(browser) {
    console.log("After the suite.");
  },
  beforeEach: function(browser) {
    console.log("Before a test.");
  },
  afterEach: function(browser) {
    console.log("After a test.");
  },
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
