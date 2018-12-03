function printArrayWithRange(array, start, end) {
    return array.slice(start, end + 1);
}

function getMidIdx(start, end) {
    let mid = start + Math.floor((end - start) / 2);
    console.log(`${start}, ${end}, ${mid}`)
    return mid;
}

export { printArrayWithRange, getMidIdx };