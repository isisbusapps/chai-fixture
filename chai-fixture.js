(function() {
  var chaiFixture = function(chai, utils) {
    if(typeof document !== 'undefined') {
      var fixtureHTML;

      // Get the appropriate pre-test hook for the test framework.
      var beforeEachTest = beforeEach || setup || pre || function() {}; 

      var insertFixtureContainer = function() {
        var fixture = document.createElement('div');
        fixture.setAttribute('id', 'chai-fixture');
        document.body.appendChild(fixture);
      };

      var initFixture = function() {
        if(!document.getElementById('chai-fixture')) {
          insertFixtureContainer();
        }

        // Make sure the fixture isn't shown
        var stylesheet = document.createElement('style');
        stylesheet.innerHTML = '#chai-fixture{position:absolute;top:-10000px;left:-10000px;width:1000px;height:1000px;}';
        document.head.appendChild(stylesheet);

        fixtureHTML = document.getElementById('chai-fixture').outerHTML;
      };

      initFixture();

      // Reset the DOM before each test
      beforeEachTest(function() {
        // Re-insert container if it doesn't exist
        if(!document.getElementById('chai-fixture')) {
          insertFixtureContainer();
        }

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
