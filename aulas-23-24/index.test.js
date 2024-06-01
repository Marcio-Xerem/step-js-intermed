const fn = require('./funcoes');

test('Contagem de caracteres',() => {
    const frase = 'Final da Champions League.';
    expect(fn.contarCaracteres(frase)).toBe(26);
});

test('Mostrar o maior número de uma série',() => {
    const vnumeros = [2,3,65,100,4,-89,2570];
    expect(fn.mostrarMaiorNumero(vnumeros)).toBe(2570);
});

test('Mostrar o maior número de uma série',() => {
    const vnumeros = [2,3,65,100,4,-89,2570];
    expect(fn.mostrarMaiorNumero(vnumeros)).toBe(2570);
});
