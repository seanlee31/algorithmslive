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
   let algs = ['testing'];
   switch(algTitle) {
      case "search":
         algs = [...Object.keys(searchAlgs)];
         break;
      case "sorting":
         algs = [...Object.keys(sortingAlgs)];
         break;
      case "dac":
         algs = [...Object.keys(dacAlgs)];
         break;
   }
   console.log(algs)
   return algs;
}

function randomIntArray(length, max) {
   return [...new Array(length)].map(() => Math.round(Math.random() * max));
}

export { getAlgorithmByTitle, getAlgorithmTitles, randomIntArray };