describe('Split Array function', function() {
    it('es capaz de dividir el arreglo PAR en dos partes', function() {
        // tu código acá 
        expect( split([2, 4, 6, 8]) ).toEqual( [[2, 4], [6, 8]] );
    });
    it('es capaz de dividir el arreglo IMPAR en dos partes', function() {
        // tu código acá 
        expect( split([2, 4, 6, 8, 10]) ).toEqual( [[2, 4], [6, 8, 10]] );
    });
    it('Devuelve el array vacío', function() {
        // tu código acá 
        expect( split([]) ).toEqual( [] );
    });
    it('Devuelve el mismo array', function() {
        // tu código acá 
        expect( split([5]) ).toEqual( [5] );
    });
});

describe("Merge", function () {
    it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
      // testeá el algoritmo
        expect(merge([1, 2, 4, 6], [3, 5, 8, 9])).toEqual(
        [1, 2, 3, 4, 5, 6, 8, 9],
        );
    });
    it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
        // testeá el algoritmo
        expect(merge([1, 2, 4, 6, 7], [3, 5, 8, 9])).toEqual(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        );
    });
});

describe("mergeSort", function () {
    it("es capaz de ordenar los valores, siendo un array PAR", function () {
      // testeá el algoritmo
        expect(mergeSort([3, 6, 9, 2, 1, 4])).toEqual(
        [1, 2, 3, 4, 6, 9],
        );
    });
    it("es capaz de ordenar los valores, siendo un array IMPAR", function () {
        // testeá el algoritmo
        expect(mergeSort([3, 6, 9, 2, 1, 4, 7])).toEqual(
        [1, 2, 3, 4, 6, 7, 9],
        );
    });
});