import React from 'react';
import * as sortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 128;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'aqua';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'orange';

export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			array: []
		};
	}

	componentDidMount() {
		this.resetArray();
	}

	resetArray() {
		const array = [];
		for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
			array.push(this.randomInt(1, 512));
		}
		this.setState({ array });
	}

	bubbleSort() {
		this.animate(sortingAlgorithms.getBubbleSortAnimations(this.state.array));
	}

	mergeSort() {
		this.animate(sortingAlgorithms.getMergeSortAnimations(this.state.array));
	}

	heapSort() {
		this.animate(sortingAlgorithms.getHeapSortAnimations(this.state.array));
	}

	quickSort() {
		this.animate(sortingAlgorithms.getQuickSortAnimations(this.state.array));
	}

	cocktailSort() {
		this.animate(sortingAlgorithms.getCocktailSortAnimations(this.state.array));
	}

	animate(animations) {
		console.log(animations);
		let j = 0;
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(`array-bar`);
			//console.log(animations[i])
			if (animations[i].colorChange) {
				const barOneStyle = arrayBars[animations[i].indexOne].style;
				const barTwoStyle = arrayBars[animations[i].indexTwo].style;
				const newColor = (j++ % 2 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = newColor;
					barTwoStyle.backgroundColor = newColor;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const barOneStyle = arrayBars[animations[i].indexOne].style;
					const barTwoStyle = arrayBars[animations[i].indexTwo].style;
					const tempHeight = barOneStyle.height;
					barOneStyle.height = barTwoStyle.height;
					barTwoStyle.height = tempHeight;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	}

	testSortingAlgorithms() {
		const javaScriptSorted = this.state.array.sort((a, b) => a - b);
		const heapSorted = this.heapSort();
		console.log(this.areArraysEqual(heapSorted, javaScriptSorted));
	}

	render() {
		const { array } = this.state;

		return (
			<div>
				<div className="array-buttons">
					<button onClick={() => this.resetArray()}>Generate New Array</button>
					<button onClick={() => this.bubbleSort()}>Bubble Sort</button>
					<button onClick={() => this.mergeSort()}>Merge Sort</button>
					<button onClick={() => this.heapSort()}>Heap Sort</button>
					<button onClick={() => this.quickSort()}>Quick Sort</button>
					<button onClick={() => this.cocktailSort()}>Cocktail Sort</button>
					<button onClick={() => this.testSortingAlgorithms()}>Test Algorithms</button>
				</div>
				<div className="array">
					{array.map((value, idx) => (
						<div
							className="array-bar"
							key={idx}
							style={{
								backgroundColor: PRIMARY_COLOR,
								height: `${value}px`,
							}}></div>
					))}
				</div>
			</div>
		);
	};


	areArraysEqual(arrayOne, arrayTwo) {
		if (arrayOne.length !== arrayTwo.length) return false;
		for (let i = 0; i < arrayOne.length && i < arrayTwo.length; i++) {
			if (arrayOne[i] !== arrayTwo[i]) return false;
		}
		return true;
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

}