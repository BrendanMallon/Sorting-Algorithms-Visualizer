import React from 'react';
import * as sortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';
import '../style.css';

// Change this value for the speed of the animations.
var animationSpeed = 8;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'lightgreen';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'aqua';

export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
		};
	}

	componentDidMount() {
		this.resetArray();
	}

	resetArray() {
		let width = window.innerWidth;
		console.log(width);
		let arraySize;
		let barSize;
		if (width >= 1200) {
			arraySize = 64;
			barSize = 600;
			animationSpeed = 2;
		} else if (width >= 1000) {
			arraySize = 52;
			barSize = 500;
			animationSpeed = 2;
		} else if (width >= 800) {
			arraySize = 40;
			barSize = 400;
			animationSpeed = 4;
		} else if (width >= 600) {
			arraySize = 32;
			barSize = 300;
			animationSpeed = 6;
		} else {
			arraySize = 16;
			barSize = 200;
			animationSpeed = 8;
		}
		const array = [];
		for (let i = 0; i < arraySize; i++) {
			array.push(this.randomInt(1, barSize));
		}
		this.setState({ array });
		let buttons = document.getElementsByClassName('button');
		for (let i = 1; i < buttons.length; i++) {
			buttons[i].removeAttribute('disabled');
			buttons[i].style.color = 'white';
		}
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
		let buttons = document.getElementsByClassName("button")
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].setAttribute('disabled', true);
			buttons[i].style.color = 'black';
		}
		let j = 0;
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(`array-bar`);
			if (animations[i].colorChange) {
				const barOneStyle = arrayBars[animations[i].indexOne].style;
				const barTwoStyle = arrayBars[animations[i].indexTwo].style;
				const newColor = (j++ % 2 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = newColor;
					barTwoStyle.backgroundColor = newColor;
				}, i * animationSpeed);
			} else {
				setTimeout(() => {
					const barOneStyle = arrayBars[animations[i].indexOne].style;
					const barTwoStyle = arrayBars[animations[i].indexTwo].style;
					const tempHeight = barOneStyle.height;
					barOneStyle.height = barTwoStyle.height;
					barTwoStyle.height = tempHeight;
				}, i * animationSpeed);
			}
		}
		setTimeout(() => {
			buttons[0].removeAttribute('disabled');
			buttons[0].style.color = 'white';
		}, animations.length * animationSpeed);
	}

	testSortingAlgorithms() {
		const javaScriptSorted = this.state.array.sort((a, b) => a - b);
		const heapSorted = this.heapSort();
		console.log(this.areArraysEqual(heapSorted, javaScriptSorted));
	}

	render() {
		const array = this.state.array;
		return (
			<div>
				<div className="array-buttons">
					<button className="button" onClick={() => this.resetArray()} >
						Generate New Array
					</button>
					<div className="seperator">------</div>
					<button className="button" onClick={() => this.bubbleSort()}>
						Bubble Sort
					</button>
					<button className="button" onClick={() => this.mergeSort()} >
						Merge Sort
					</button>
					<button className="button" onClick={() => this.heapSort()} >
						Heap Sort
					</button>
					<button className="button" onClick={() => this.quickSort()} >
						Quick Sort
					</button>
					<button className="button" onClick={() => this.cocktailSort()} >
						Cocktail Sort
					</button>
				</div>
				<div className="array">
					{
						array.map((value, idx) => (
							<div
								className="array-bar"
								key={idx}
								style={{
									backgroundColor: PRIMARY_COLOR,
									height: `${value}px`,
								}}></div>
						))
					}
				</div>
			</div >
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