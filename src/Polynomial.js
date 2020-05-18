const _ = require('lodash')

class Polynomial {
  constructor(...monomials){
    this.polynomial = monomials;
  }

  static add(p1, p2){
    let poly1 = _.cloneDeep(p1.polynomial);
    let poly2 = _.cloneDeep(p2.polynomial);

    if(poly1.length === 0) return new Polynomial(...poly2);
    if(poly2.length === 0) return new Polynomial(...poly1);

    poly1.map((mono1) => {
        for (let mono2 of poly2){
          if(mono1.exponent === mono2.exponent){
            mono1.add(mono2);
            poly2.splice(poly2.indexOf(mono2), 1);
          }
        }
      })

    let added = [...poly1, ...poly2]

    let unique = [...new Set(added)];

    unique.sort((first, second) => {
      if (first.exponent > second.exponent) return -1;
      if (first.exponent < second.exponent) return 1;
      return 0;
    });

    return new Polynomial(...unique);
  }

  getString(){
    const poly = [...this.polynomial]
    let polyString = poly.reduce((acc, val) => {
      let isPositive = Math.sign(val.constant) >= 0 ? true : false;
      if(val.exponent <= 1){
        if(val.variable === ""){
          return acc += `${isPositive ? '+' : ''}${val.constant} `
        }
        return acc += `${isPositive ? '+' : ''}${val.constant}${val.variable} `
      }
      return acc += `${isPositive ? '+' : ''}${val.constant}${val.variable}^${val.exponent} `
    }, "")

    return polyString;
  }
}

module.exports = Polynomial;