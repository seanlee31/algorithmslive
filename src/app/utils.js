import { searchAlgs } from '../algorithms/searchAlgorithms';
import { sortingAlgs } from '../algorithms/sortingAlgorithms';
import { dacAlgs } from '../algorithms/dacAlgorithms';


const algs = { ...searchAlgs, ...sortingAlgs, ...dacAlgs };

function getAlgorithmByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = algs[algTitleTrimmed];
   return algorithm;
}

function getAlgorithmTitles(algTitle) {
   let algs = [];
   switch(algTitle) {
      case "search":
         algs = [...Object.keys(searchAlgs)];
         break;
      case "sorting":
      
         break;
   }
   return algs;
}

export { getAlgorithmByTitle, getAlgorithmTitles };