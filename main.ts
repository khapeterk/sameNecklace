export default function sameNecklace(a: string, b: string): boolean {
	if (a.length < 2 || b.length < 2) {
		return a === b;
	}
	let isSameNecklace: boolean = false;
	let aPushed: string = a;
	for (let index: number = 1; index < a.length; index++) {
		aPushed = slideOneLetter(aPushed);
		if (aPushed === b) {
			isSameNecklace = true;
		}
	}
	return isSameNecklace;
}

function slideOneLetter(a: string): string {
	return a.slice(-1) + a.substring(0,a.length - 1);
}