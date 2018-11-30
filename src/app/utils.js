import { searchAlgs } from '../algorithms/searchAlgorithms';
import { sortingAlgs } from '../algorithms/sortingAlgorithms';
import { dacAlgs } from '../algorithms/dacAlgorithms';


const algs = { ...searchAlgs, ...sortingAlgs, ...dacAlgs };

function getAlgorithmByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = algs[algTitleTrimmed];
   console.log(algs)
   console.log(algorithm)
   return algorithm;
}

export { getAlgorithmByTitle };