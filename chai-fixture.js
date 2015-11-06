(function() {
  var chaiFixture = function(chai, utils) {
    if(typeof document !== 'undefined') {
      // Insert the fixture if it's not present
      if(!document.getElementById('chai-fixture')) {
        var fixture = document.createElement('div');
        fixture.setAttribute('id', 'chai-fixture');
        document.body.appendChild(fixture);
      }

      var fixtureHTML = document.getElementById('chai-fixture').outerHTML;
      
      // Make sure the fixture isn't shown
      var stylesheet = document.createElement('style');
      stylesheet.innerHTML = '#chai-fixture{position:absolute;top:-10000px;left:-10000px;width:1000px;height:1000px;}';
      document.head.appendChild(stylesheet);

      // Reset the DOM before each test
      beforeEach(function() {
        document.getElementById('chai-fixture').outerHTML = fixtureHTML;
        chai.fixture = document.getElementById('chai-fixture');
      });

    } else {
      console.log('No document found. There is nothing I can do.');
    }
  };

  if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = chaiFixture;
  } else {
    this.chaiFixture = chaiFixture;
  }
})();
