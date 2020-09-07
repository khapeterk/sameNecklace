export default function sameNecklace(a: string, b: string): boolean {
	let isSameNecklace: boolean = false;
	let aPushed: string = a;
	for (let index: number = 0; index < a.length; index++) {
		aPushed = slideOneLetter(aPushed);
		if (aPushed === b) {
			isSameNecklace = true;
		}
	}
	return a === b || isSameNecklace;
}

function slideOneLetter(a: string): string {
	return a.slice(-1) + a.substring(0,a.length - 1);
}