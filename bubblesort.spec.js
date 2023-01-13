describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an unordered array', function(){
        expect( bubbleSort([4, 2, 11, 7, 9, 6]) ).toEqual( [2, 4, 6, 7, 9, 11] );
    });
});