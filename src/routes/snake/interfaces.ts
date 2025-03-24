export interface Location {
	x: number;
	y: number;
}
export type Direction =
	| { x: 1; y: 0 }
	| { x: -1; y: 0 }
	| { x: 0; y: 1 }
	| { x: 0; y: -1 };
export interface Game {
	state: 'not-started' | 'running' | 'paused' | 'finished';
	snake: Array<Location>;
	food: Location;
	direction: Direction;
	score: number;
}
