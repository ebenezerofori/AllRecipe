const chai = require('chai');
const jsdom = require('jsdom');
const fs = require('fs');

describe('Test Suite For Existence of Pages', () => {
  //test
  it('Index Page should have h1 (header) that says Delicious Recipes.', (done) => {

    //Arrange - выставление  начальных условий
    const index = fs.readFileSync('./index.html', 'utf-8');
    jsdom.env(index, function (err, window) {

      //Act - отработка тестируемого функционала.
      const heroHeader = window.document.getElementsByTagName('h1')[0];

      //Assert - сверка ожидаемых значений с полученными.
      chai.expect(heroHeader.innerHTML)
      .to.equal('Delicious Recipes.');
      done();
      window.close();
    });
  });


  it('Recipe Page should have h1 (header) that says Recipes.', (done) => {

    //Arrange - выставление  начальных условий
    const index = fs.readFileSync('./recipe.html', 'utf-8');
    jsdom.env(index, function (err, window) {

      //Act - отработка тестируемого функционала.
      const heroHeader = window.document.getElementsByTagName('h1')[0];

      //Assert - сверка ожидаемых значений с полученными.
      chai.expect(heroHeader.innerHTML)
      .to.equal('Recipes');
      done();
      window.close();
    });
  });


  it('About Page should have h1 (header) that says About us.', (done) => {

    //Arrange - выставление  начальных условий
    const index = fs.readFileSync('./about.html', 'utf-8');
    jsdom.env(index, function (err, window) {

      //Act - отработка тестируемого функционала.
      const heroHeader = window.document.getElementsByTagName('h1')[0];

      //Assert - сверка ожидаемых значений с полученными.
      chai.expect(heroHeader.innerHTML)
      .to.equal('About us');
      done();
      window.close();
    });
  });


  it('Contact Page should have h1 (header) that says Contact us.', (done) => {

    //Arrange - выставление  начальных условий
    const index = fs.readFileSync('./contact.html', 'utf-8');
    jsdom.env(index, function (err, window) {

      //Act - отработка тестируемого функционала.
      const heroHeader = window.document.getElementsByTagName('h1')[0];

      //Assert - сверка ожидаемых значений с полученными.
      chai.expect(heroHeader.innerHTML)
      .to.equal('Contact us');
      done();
      window.close();
    });
  });


});



describe('Test Suite For Company Info', () => {  

    it('Company should have  working days', (done) => {
      const index = fs.readFileSync('./index.html', 'utf-8');
      jsdom.env(index, function (err, window) {
        const companyInfo = window.document.getElementsByClassName('footer-caption-text')[0];
  
        chai.expect(companyInfo.innerHTML).to.equal('Mondays - Fridays (10:00 - 18:00)');
        done();
        window.close();
      });
    });

    it('Company should have  telephone', (done) => {
        const index = fs.readFileSync('./index.html', 'utf-8');
        jsdom.env(index, function (err, window) {
          const companyInfo = window.document.getElementsByClassName('footer-caption-text')[1];
    
          chai.expect(companyInfo.innerHTML).to.equal('+7 (977) 500-17-03');
          done();
          window.close();
        });
      });
  
      it('Company should have  address', (done) => {
        const index = fs.readFileSync('./index.html', 'utf-8');
        jsdom.env(index, function (err, window) {
          const companyInfo = window.document.getElementsByClassName('footer-caption-text')[2];
    
          chai.expect(companyInfo.innerHTML).to.equal('Ulitsa Yunosti 11');
          done();
          window.close();
        });
      });
  
    
    
  });