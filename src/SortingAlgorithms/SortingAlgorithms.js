export function getBubbleSortAnimations(array) {
	const animations = [];
	if (array.lenth <= 1) return array;
	for (let i = array.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			animations.push({
				colorChange: true,
				indexOne: j,
				indexTwo: j + 1
			});
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
				animations.push({
					colorChange: false,
					indexOne: j,
					indexTwo: j + 1
				});
			}
			animations.push({
				colorChange: true,
				indexOne: j,
				indexTwo: j + 1
			});
		}
	}
	return animations;
}

export function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return animations;
	mergeSort(array, 0, array.length - 1, animations);
	console.log(array);
	return animations;
}

function merge(array, start, mid, end, animations) {
	let start2 = mid + 1;

	// If the direct merge is already sorted 
	if (array[mid] <= array[start2]) {
		return;
	}

	// Two pointers to maintain start 
	// of both arrays to merge 
	while (start <= mid && start2 <= end) {

		// If element 1 is in right place
		addAnimation(animations, true, start, start2);
		addAnimation(animations, true, start, start2);
		if (array[start] <= array[start2]) {
			start++;
		} else {

			let value = array[start2];
			let index = start2;

			// Shift all the elements between element 1 
			// element 2, right by 1. 
			while (index !== start) {
				addAnimation(animations, true, index, index - 1);
				array[index] = array[index - 1];
				addAnimation(animations, false, index, index - 1);
				addAnimation(animations, true, index, index - 1);
				index--;
			}
			array[start] = value;

			// Update all the pointers 
			start++;
			mid++;
			start2++;
		}
	}
}

function mergeSort(array, left, right, animations) {
	if (left < right) {

		// Same as (l + r) / 2, but avoids overflow 
		// for large l and r 
		let mid = Math.floor(left + (right - left) / 2);

		// Sort first and second halves 
		mergeSort(array, left, mid, animations);
		mergeSort(array, mid + 1, right, animations);

		merge(array, left, mid, right, animations);
	}
}

export function getHeapSortAnimations(array) {
	const animations = [];
	for (let i = array.length / 2 - 1; i >= 0; i--) {
		buildMaxHeap(array, array.length, i, animations);
	}
	for (let i = array.length - 1; i >= 0; i--) {
		addAnimation(animations, true, 0, i);
		swap(array, 0, i);
		addAnimation(animations, false, 0, i);
		addAnimation(animations, true, 0, i);
		buildMaxHeap(array, i, 0, animations);
	}
	console.log(animations);
	return animations;
}

function buildMaxHeap(array, heapsize, rootIndex, animations) {
	let largest = rootIndex;
	let left = 2 * rootIndex + 1;
	let right = 2 * (rootIndex + 1);
	if (left < heapsize && array[left] > array[largest]) {
		addAnimation(animations, true, left, largest);
		largest = left;
		addAnimation(animations, true, left, largest);
	}
	if (right < heapsize && array[right] > array[largest]) {
		addAnimation(animations, true, right, largest);
		largest = right;
		addAnimation(animations, true, right, largest);
	}
	if (largest !== rootIndex) {
		addAnimation(animations, true, largest, rootIndex);
		swap(array, largest, rootIndex);
		addAnimation(animations, false, largest, rootIndex);
		addAnimation(animations, true, largest, rootIndex);
		buildMaxHeap(array, heapsize, largest, animations);
	}
}

export function getQuickSortAnimations(array) {
	const animations = [];
	quickSortHelper(array, 0, array.length - 1, animations);
	return animations;
}

function quickSortHelper(array, low, high, animations) {
	if (low < high) {
		let pi = partition(array, low, high, animations);
		quickSortHelper(array, low, pi - 1, animations);
		quickSortHelper(array, pi + 1, high, animations);
	}
}

function partition(array, low, high, animations) {
	let pivot = array[high];
	let i = (low - 1);
	for (let j = low; j < high; j++) {
		addAnimation(animations, true, j, high);
		if (array[j] < pivot) {
			i++;
			addAnimation(animations, false, i, j);
			swap(array, i, j);
		}
		addAnimation(animations, true, j, high);
	}
	addAnimation(animations, true, i + 1, high);
	swap(array, i + 1, high);
	addAnimation(animations, false, i + 1, high);
	addAnimation(animations, true, i + 1, high);
	return i + 1;
}

export function getCocktailSortAnimations(array) {
	const animations = [];
	let swapped = true;
	let start = 0;
	let end = array.length;
	while (swapped) {
		swapped = false;
		for (let i = start; i < end - 1; i++) {
			addAnimation(animations, true, i, i + 1);
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				addAnimation(animations, false, i, i + 1);
				swapped = true;
			}
			addAnimation(animations, true, i, i + 1);
		}
		if (!swapped) break;
		swapped = false;
		end = end - 1;
		for (let i = end - 1; i >= start; i--) {
			addAnimation(animations, true, i, i + 1);
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				addAnimation(animations, false, i, i + 1);
				swapped = true;
			}
			addAnimation(animations, true, i, i + 1);
		}
		start++;
	}
	return animations;
}

function swap(array, indexOne, indexTwo) {
	let temp = array[indexOne];
	array[indexOne] = array[indexTwo];
	array[indexTwo] = temp;
}

function addAnimation(animations, colorChange, indexOne, indexTwo) {
	animations.push({
		colorChange: colorChange,
		indexOne: indexOne,
		indexTwo: indexTwo
	});
}