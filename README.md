# Polynomial coding challenge

Below you can find all necessary instructions to run the solution

### Description
The solution is modeled using two objects - Monomial and Polynomial.

Monomial is used to represent fragments of polynomial equation. It has three properties - constant, variable, exponent. It also adds two fragments together. 

Polynomial is used to represent the complete equation. It also exposes static method add to add two polynomials. Additionally it has getString method - returning a string representation of a polynomial.

## Download & setup

- clone the repository
```
git clone git@github.com:filswa/polynomial.git
```

- ensure you have node.js runtime environment installed

- install required dependencies
```
npm install
```

## Running the tests
To run existing test suite

```
**npm test**
```

You can add your own testcases using the template at the end of sum.test.js file

## Running 
You can also run the code outside jest by executing
```
node index.js
```

This allows to create, add and log polynomials - using the methods described in description
You can find an example code in index.js