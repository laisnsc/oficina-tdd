const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('Deverá retornar a soma de dois números', () => {
    expect(calculadora.soma(3, 9)).toBe(12);
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calculadora.subtracao(10, 9)).toBe(1);
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calculadora.multiplica(3, 9)).toBe(27);
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calculadora.divisao(10, 5)).toBe(2);
  })
})