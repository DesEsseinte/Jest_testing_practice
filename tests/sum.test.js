const sum = require('../code/sum');

test('adds 2 plus 2 to equal 4', () => {
	expect(sum(2, 2)).toBe(4);
});
test('adds negative numbers', ()=>{
	expect(sum(5,-3)).toBe(2)
});
test('handles decimals',() =>{
	expect(sum(0.1,0.4)).toBeCloseTo(0.5)
})