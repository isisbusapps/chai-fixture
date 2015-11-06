# chai-fixture
Adds DOM fixture support for Chai

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
