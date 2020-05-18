class Monomial {
  constructor(constant, variable='', exponent=0){
    if(exponent === 0){
      variable = '';        
    }

    this.constant = constant;
    this.variable = variable;
    this.exponent = exponent;
  }

  add({ constant }){
    this.constant += constant;
  }
}

module.exports = Monomial;