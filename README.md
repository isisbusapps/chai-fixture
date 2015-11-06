# chai-fixture
Adds DOM fixture support for Chai

**Supports:** Mocha, Jasmine, QUnit and possibly others. If your favourite test framework doesn't work please [file an issue](https://github.com/isisbusapps/chai-fixture/issues/new).

## Install

### NPM

```
npm install chai-fixture
```

### Bower

```
bower install chai-fixture
```

## Usage

### NodeJS

```JS
var chai = require('chai');
var chaiFixture = require('chai-fixture');
chai.use(chaiFixture);

// Access fixture element
chai.fixture.setAttribute('background-color', 'red');
```

### Browser

```HTML
<script src="../node_modules/chai/chai.js"></script>
<script src="../node_modules/chai-fixture/chai-fixture.js"></script>
<script>
  chai.use(chaiFixture);

  // Access fixture element
  chai.fixture.setAttribute('background-color', 'red');
</script>
```
