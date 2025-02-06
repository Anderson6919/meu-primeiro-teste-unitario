const mult = require ('./mult')

test ('A função mult deve retornar 9 ao multiplicar 3 e 3', () =>{
    expect(mult(3, 3)).toBe (9)
})