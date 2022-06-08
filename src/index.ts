let id: number = 5; // number
console.log('ID:', id);
let company: string = 'On Demand Economy Labs'; // string
let isPublished: boolean = true; // boolean
let x: any = 'Hello'; // any type

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any = [1, true, 'hello'];

//tuple
let person: [number, string, boolean] = [1, 'Bwogi', true];

//tuple array
let employee: [number, string][];

employee = [
	[1, 'Andrew'],
	[2, 'Bwogi'],
	[3, 'Ezera'],
];

// Enum
enum Direction1 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}
console.log(Direction1.Up);
