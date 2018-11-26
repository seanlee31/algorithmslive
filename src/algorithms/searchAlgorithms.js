import { printArrayWithRange } from './utils';

function binarySearch(array, target) {
    let start = 0,
        end = array.length - 1;

    return binarySearchHelper(array, target, start, end);
}

function binarySearchHelper(array, target, start, end) {
    const res = { bool: false, idx: null };

    while (end >= start) {
        let mid = start + Math.floor((end - start) / 2);

        if (array[mid] === target) {
            res['bool'] = true;
            res['idx'] = mid;
            return res;
        } else if (array[mid] > target) {  // target does not exist oin the right side. 
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return res;
}

function searchDC(array, target) {
    let start = 0,
    end = array.length - 1;

    return searchDCHelper(array, target, start, end);
}

function searchDCHelper(array, target, start, end) {
    const res = { bool: false, idx: null };

    if (start === end) {    // Base Case
        if (array[start] === target) {
            res['bool'] = true;
            res['idx'] = start;
        }
        return res;
    } else {
        // Divide
        let mid = start + Math.floor((end - start) / 2);
        
        console.log(`[Current Array] ${printArrayWithRange(array, start, end)}`);
        // console.log(`[Current Indicies] ${mid} | ${start} ${end}`);
        // Conquer
        // console.log('first')
        let first = searchDCHelper(array, target, start, mid);
        // console.log('second')
        // console.log(mid)
        let second = searchDCHelper(array, target, mid+1, end);

        // Combine
        res['bool'] = first.bool || second.bool;
        // console.log(`[Current Result] \nbool : ${res['bool']}\n first.bool : ${first.bool}\n first.idx : ${first.idx}\n second.bool : ${second.bool} \n second.idx : ${second.idx} \n`)
        
        if (first.idx != null) {
            res['idx'] = first.idx
        }
        if (second.idx != null) {
            res['idx'] = second.idx
        }

        return res;
    }
}

const searchAlgs = {
    "binarysearch": binarySearch,
    "searchdc": searchDC
};

var array = ["john", "sean", "shawn", "jon", "shown", "jonn", "johnny"],
    target = "sean";

// var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//     target = 50;

var array = [10, 20, 30, 40],
    target = 20;

console.log(`[Original Array] ${array}`);
console.log(`[Target] ${target}`);
var res = searchDC(array, target);
console.log(res);

export {binarySearch, searchDC, searchAlgs};