/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var WeatherPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.inputCity = element(by.model('vm.city'));
  this.searchButton = element(by.css('button'));
  this.h3El = element(by.css('h3'));
};

module.exports = new WeatherPage();
