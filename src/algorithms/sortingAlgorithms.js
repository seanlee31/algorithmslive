// Import Helper Utilites //
import { printArrayWithRange, getMidIdx } from './utils';

function mergeSort(array, start, end) {
    if (start === end) {
        return [array[start]];
    } else {
        // Divide //
        let mid = getMidIdx(start, end);

        // Conquer //
        let firstMerged = mergeSort(array, start, mid);
        let secondMerged = mergeSort(array, mid+1, end);

        // Merge //
        return merge(firstMerged, secondMerged);
    }
}

function merge(array1, array2) {
    let output = [];

    while (array1.length > 0 && array2.length > 0) {
        let val1 = array1[0];
        let val2 = array2[0];
        let minVal;

        if (val1 < val2) {
            minVal = array1.shift();
        } else if (val1 > val2) {
            minVal = array2.shift();
        } else {  // When two values matches, select pop either one of them.
            minVal = array1.shift();
        }
        output.push(minVal);
    }

    while (array1.length > 0) {
        let minVal = array1.shift();
        output.push(minVal)
    }

    while (array2.length > 0) {
        let minVal = array2.shift();
        output.push(minVal)
    }
    
    return output;
}

function mergeSortByParity() {
    // Merge the array in the order of [[EVEN #] ..., [ODD #]].

}

const sortingAlgs = {
    "mergesort": mergeSort,
    "mergesortbyparity": mergeSortByParity
};

export { mergeSort, mergeSortByParity, sortingAlgs };