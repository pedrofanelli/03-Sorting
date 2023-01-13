describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an unordered array', function(){
        expect( bubbleSort([4, 2, 11, 7, 9, 6]) ).toEqual( [2, 4, 6, 7, 9, 11] );
    });
    it('handles an ordered array', function(){
        expect( bubbleSort([2, 4, 6, 7, 9, 11]) ).toEqual( [2, 4, 6, 7, 9, 11] );
    });
    it('handles an ordered array', function(){
        expect( bubbleSort([6, 5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6] );
    });
    it('check on swap', function () {
        spyOn(window, 'swap').and.callThrough(); 
        // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
        // mientras que `callFake` haría una copia.
        window.bubbleSort([4, 2, 11, 7, 9, 11]);
        expect(window.swap.calls.count()).toEqual(30);
    });
});