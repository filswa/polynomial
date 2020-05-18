const Polynomial = require('../src/Polynomial')
const Monomial = require('../src/Monomial')

test('tc1 - test Polynomial constructor with default parameters', () => {
	
	const x1 = new Monomial(3, 'x', 2)
	const x2 = new Monomial(2, 'x', 1)
	const x3 = new Monomial(5);

	const result = new Polynomial(x1, x2, x3);
	const expected = new Polynomial(new Monomial(3, 'x', 2),
									new Monomial(2, 'x', 1),
									new Monomial(5, '', 0))

	expect(result).toEqual(expected)
})

test('tc2 - test Polynomial constructor when exponent == 0 and variable != \'\' ', () => {
	const x1 = new Monomial(5, 'x', 0);
	const result = new Polynomial(x1)
	const expected = new Polynomial(new Monomial(5))

	expect(result).toEqual(expected)
})

test('tc3 - test Polynomial.add - both polynomial empty', () => {
	const poly1 = new Polynomial();
	const poly2 = new Polynomial();

	const expected = new Polynomial()
	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc4 - test Polynomial.add - first polynomial empty', () => {
	const poly1 = new Polynomial();
	const poly2 = new Polynomial(new Monomial(3, 'x', 2));

	const expected = new Polynomial(new Monomial(3, 'x', 2))
	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc5 - test Polynomial.add - second polynomial empty', () => {
	const poly1 = new Polynomial(new Monomial(3, 'x', 2));
	const poly2 = new Polynomial();

	const expected = new Polynomial(new Monomial(3, 'x', 2))
	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc6 - test Polynomial.add - all exponents different ', () => {
	const a1 = new Monomial(5, 'x', 5);
	const a2 = new Monomial(-3, 'x', 3);

	const b1 = new Monomial(4, 'x', 4);
	const b2 = new Monomial(2, 'x', 2);

	const poly1 = new Polynomial(a1, a2);
	const poly2 = new Polynomial(b1, b2);

	const expected = new Polynomial(new Monomial(5, 'x', 5),
									new Monomial(4, 'x', 4),
									new Monomial(-3, 'x', 3),
									new Monomial(2, 'x', 2))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc7 - test Polynomial.add - all exponents same ', () => {
	const a1 = new Monomial(1, 'x', 4);
	const a2 = new Monomial(1, 'x', 1);

	const b1 = new Monomial(4, 'x', 4);
	const b2 = new Monomial(2, 'x', 1);

	const poly1 = new Polynomial(a1, a2);
	const poly2 = new Polynomial(b1, b2);

	const expected = new Polynomial(new Monomial(5, 'x', 4),
									new Monomial(3, 'x', 1))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc8 - test Polynomial.add - first poly more items', () => {
	const a1 = new Monomial(3, 'x', 2);
	const a2 = new Monomial(2, 'x', 1);
	const a3 = new Monomial(1);

	const b1 = new Monomial(1, 'x', 4);

	const poly1 = new Polynomial(a1, a2, a3);
	const poly2 = new Polynomial(b1);

	const expected = new Polynomial(new Monomial(1, 'x', 4),
									new Monomial(3, 'x', 2),
									new Monomial(2, 'x', 1),
									new Monomial(1))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc9 - test Polynomial.add - second poly more items', () => {
	const a1 = new Monomial(1, 'x', 4);

	const b1 = new Monomial(3, 'x', 2);
	const b2 = new Monomial(2, 'x', 1);
	const b3 = new Monomial(1);

	const poly1 = new Polynomial(a1);
	const poly2 = new Polynomial(b1, b2, b3);

	const expected = new Polynomial(new Monomial(1, 'x', 4),
									new Monomial(3, 'x', 2),
									new Monomial(2, 'x', 1),
									new Monomial(1))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc10 - test Polynomial.add - expect negative constants', () => {
	const a1 = new Monomial(3, 'x', 3);
	const a2 = new Monomial(2, 'x', 2);
	const a3 = new Monomial(1, 'x', 1);
	const a4 = new Monomial(5);

	const b1 = new Monomial(-6, 'x', 3);
	const b2 = new Monomial(-4, 'x', 2);
	const b3 = new Monomial(-2, 'x', 1);
	const b4 = new Monomial(-10);

	const poly1 = new Polynomial(a1, a2, a3, a4);
	const poly2 = new Polynomial(b1, b2, b3, b4);

	const expected = new Polynomial(new Monomial(-3, 'x', 3),
									new Monomial(-2, 'x', 2),
									new Monomial(-1, 'x', 1),
									new Monomial(-5))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})

test('tc11 - test Polynomial.add - test negative exponents', () => {
	const a1 = new Monomial(3, 'x', -3);
	const a2 = new Monomial(2, 'x', -2);
	const a3 = new Monomial(1, 'x', -1);

	const b1 = new Monomial(3, 'x', -3);
	const b2 = new Monomial(2, 'x', -2);
	const b3 = new Monomial(1, 'x', -1);

	const poly1 = new Polynomial(a1, a2, a3);
	const poly2 = new Polynomial(b1, b2, b3);

	const expected = new Polynomial(new Monomial(2, 'x', -1),
									new Monomial(4, 'x', -2),
									new Monomial(6, 'x', -3))

	const result = Polynomial.add(poly1, poly2);

	expect(result).toEqual(expected)
})


test('tc12 - test Polynomial.add - expect sum of add to be zero', () => {
	const a1 = new Monomial(3, 'x', 3);
	const a2 = new Monomial(2, 'x', 2);
	const a3 = new Monomial(1, 'x', 1);
	const a4 = new Monomial(5);

	const b1 = new Monomial(-3, 'x', 3);
	const b2 = new Monomial(-2, 'x', 2);
	const b3 = new Monomial(-1, 'x', 1);
	const b4 = new Monomial(-5);

	const poly1 = new Polynomial(a1, a2, a3, a4);
	const poly2 = new Polynomial(b1, b2, b3, b4);

	const expected = new Polynomial(new Monomial(0, 'x', 3),
									new Monomial(0, 'x', 2),
									new Monomial(0, 'x', 1),
									new Monomial(0))

	const result = Polynomial.add(poly1, poly2);
	
	expect(result).toEqual(expected)
})

/* TC template
test('tc13 ', () => {
	// Monomial constructor accepts parameters which are objects of three fields:
	// constant (number), variable(string), exponent(number)
	// Multiple variables are not supported

	const a1 = new Monomial(3, 'x', 3);
	const a2 = new Monomial(2, 'x', 2);

	const b1 = new Monomial(-3, 'x', 3);
	const b2 = new Monomial(-2, 'x', 2);
	const b3 = new Monomial(-1, 'x', 1);
	const b4 = new Monomial(-5);


	// Polynomial constructor accepts any number of Monomial objects

	const poly1 = new Polynomial(a1, a2, a3, a4);
	const poly2 = new Polynomial(b1, b2, b3, b4);

	// Create a polynomial with expected values

	const expected = new Polynomial(new Monomial(0, 'x', 3),
									new Monomial(0, 'x', 2),
									new Monomial(0, 'x', 1),
									new Monomial(0))

	// Perform addition on two polynomials

	const result = Polynomial.add(poly1, poly2);
	
	// Solution testing syntax is the following

	expect(result).toEqual(expected)
})
*/