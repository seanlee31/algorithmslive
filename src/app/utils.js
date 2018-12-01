import { searchAlgs } from '../algorithms/searchAlgorithms';
import { sortingAlgs } from '../algorithms/sortingAlgorithms';
import { dacAlgs } from '../algorithms/dacAlgorithms';


const algs = { ...searchAlgs, ...sortingAlgs, ...dacAlgs };

function getAlgorithmByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = algs[algTitleTrimmed];
   return algorithm;
}

function getAlgorithmDemoTitle(algTitle) {
   console.log(`testing 1 - ${algTitle}`)
   let alg = "Binary Search";  // default alg.
   switch(algTitle) {
      case "search":
         // Get an algorithm from search algorithms.
         alg = "Binary Search";
         alg = "searchDC";
         break;
      case "sorting":
         // Get an algorithm from sorting algorithms.
         alg = "";
         break;
   } 
   return alg;
}

export { getAlgorithmByTitle, getAlgorithmDemoTitle };