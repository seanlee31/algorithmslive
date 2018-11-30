import {searchAlgs, binarySearch, searchDC} from '../algorithms/searchAlgorithms';

function getAlgorithmByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = searchAlgs[algTitleTrimmed];
   return algorithm;
}

export { getAlgorithmByTitle };