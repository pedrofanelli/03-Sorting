describe('Split Array function', function() {
    it('es capaz de dividir el arreglo en dos partes', function() {
        // tu código acá 
        expect( split([2, 4, 6, 8]) ).toEqual( [[2, 4], [6, 8]] );
    });
    it('es capaz de dividir el arreglo en dos partes', function() {
        // tu código acá 
        expect( split([2, 4, 6, 8, 10]) ).toEqual( [[2, 4], [6, 8, 10]] );
    });
});

describe("Merge", function () {
    it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
      // testeá el algoritmo
        expect(merge([1, 2, 4, 6, 7], [3, 5, 8, 9])).toEqual(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        );
    });
});