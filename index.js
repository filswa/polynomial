const Polynomial = require('./src/Polynomial')
const Monomial = require('./src/Monomial')

const a1 = new Monomial(2, 'x', 2);
const a2 = new Monomial(3);

const b1 = new Monomial(3, 'x', 3)
const b2 = new Monomial(1, 'x', 2);

const poly1 = new Polynomial(a1, a2);
const poly2 = new Polynomial(b1, b2);

const result = Polynomial.add(poly1, poly2)

console.log(`${poly1.getString()}(+) ${poly2.getString()}= ${result.getString()}`);