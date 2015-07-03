'use strict';

describe('The weather view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/about');
    page = require('./weather.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('It works!');
    expect(page.inputCity.getAttribute('value')).toBe('Geneve');
  });

 it('should update page with results after a search', function () {
    page.inputCity.clear();
    page.inputCity.sendKeys('Paris, FR');
    page.searchButton.click();
    expect(page.h3El.getText()).toBe('Météo pour Paris, FR');
  });

});
