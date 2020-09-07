import sameNecklace from "./main";

describe("sameNecklace...", () => {
	it('should consider a and a the same', () => {
		expect(sameNecklace('a','a')).toBe(true);
	})
	it('should consider a and b not the same', () => {
		expect(sameNecklace('a','b')).toBe(false);
	})
	it('should consider ab and ba the same', () => {
		expect(sameNecklace('ab','ba')).toBe(true);
	})
	
	it('should consider nicole and icolen the same', () => {
		expect(sameNecklace('nicole','icolen')).toBe(true);
	})
	it('should consider nicole and lenico the same', () => {
		expect(sameNecklace('nicole','lenico')).toBe(true);
	})
	it('should consider nicole and coneli not the same', () => {
		expect(sameNecklace('nicole','coneli')).toBe(false);
	})
	it('should consider aabaaaaabaab and aabaabaabaaa the same', () => {
		expect(sameNecklace('aabaaaaabaab','aabaabaabaaa')).toBe(true);
	})
	it('should consider abc and cba not the same', () => {
		expect(sameNecklace('abc','cba')).toBe(false);
	})
	it('should consider xxyyy and xxxyy not the same', () => {
		expect(sameNecklace('xxyyy','xxxyy')).toBe(false);
	})
	it('should consider xyxxz and xxyxz not the same', () => {
		expect(sameNecklace('xyxxz','xxyxz')).toBe(false);
	})
	it('should consider x and x the same', () => {
		expect(sameNecklace('x','x')).toBe(true);
	})
	it('should consider x and xx not the same', () => {
		expect(sameNecklace('x','xx')).toBe(false);
	})
	it('should consider x and blank not the same', () => {
		expect(sameNecklace('x','')).toBe(false);
	})
	it('should consider blank and blank the same', () => {
		expect(sameNecklace('','')).toBe(true);
	})
})