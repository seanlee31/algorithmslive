// Import Helper Utilites //
import { getArrayWithRange, getMidIdx } from './utils';

function findMaxMinElements(array, start, end) {
    if (start === end) {
        return {
            max: array[start],
            min: array[start]
        }
    } else {
        // Divide //
        let mid = getMidIdx(start, end);

        // Conquer //
        let firstMaxMin = findMaxMinElements(array, start, mid);
        let secondMaxMin = findMaxMinElements(array, mid+1, end);

        // Combine //
        return {
            max: Math.max(firstMaxMin.max, secondMaxMin.max),
            min: Math.min(firstMaxMin.min, secondMaxMin.min)
        }
    }
}

const dacAlgs = {
    "findmaxminelements": findMaxMinElements
};

export { findMaxMinElements, dacAlgs };