import sameNecklace from "./main";

describe("sameNecklace...", () => {
	it('should consider a and a the same', () => {
		expect(sameNecklace('a','a')).toBe(true);
	})
	it('should consider a and b not the same', () => {
		expect(sameNecklace('a','b')).toBe(false);
	})
})