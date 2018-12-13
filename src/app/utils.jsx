// Import Main Frameworks //
import React, { Component } from 'react';
import $ from 'jquery';

// Import Algorithms //
import { searchAlgs } from '../algorithms/searchAlgorithms';
import { sortingAlgs } from '../algorithms/sortingAlgorithms';
import { dacAlgs } from '../algorithms/dacAlgorithms';


const algs = { ...searchAlgs, ...sortingAlgs, ...dacAlgs };

function randomIntArray(length, max) {
   return [...new Array(length)].map(() => Math.round(Math.random() * max));
}

function getAlgByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = algs[algTitleTrimmed];
   return algorithm;
}

function getAlgTitles(algTitle) {
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

   return algs;
}

function getAlgResult(array, target, algType, alg) {
   let res;
   switch (algType) {
      case "search":
         res = alg(array, target);
         break;
      case "sorting":
         res = alg(array, 0, array.length - 1);
         break;
      case "dac":
         res = alg(array, 0, array.length - 1);
         break;
      default:
         res = alg(array, target);
         break;
   }
   return res;
}

function getParsedAlgResult(array, alg, res) {
   let parsedResult;

   switch (alg) {
      case "binarysearch":
         parsedResult = <div className="algResult">
            Array (Sorted): [{sortingAlgs['mergesort'](array, 0, array.length-1).join(', ')}]  <br/>
            Result (Boolean): {String(res.bool).toUpperCase()} <br/>
            Result (Index): {(res.idx) ? res.idx : "NONE"}
         </div>
         break;
      case "searchdc":
         parsedResult = <div className="algResult">
            Result (Boolean): {String(res.bool).toUpperCase()} <br/>
            Result (Index): {(res.idx) ? res.idx : "NONE"}
         </div>
         break;
      case "mergesort":
         parsedResult = <div className="algResult">
            Result (Sorted Array): [{res.join(', ')}]
         </div>
         break;
      case "findmaxminelements":
         parsedResult = <div className="algResult">
            Result (MAX): {res.max} <br/>
            Result (MIN): {res.min}
         </div>
         break;
      default:
         parsedResult = <div className="algResult">
            Result: No Matching Algorithms! <br/>
            Algorithm Requested: {alg}
         </div> 
         break;
   }
   return parsedResult;
}

export { randomIntArray, getAlgByTitle, getAlgTitles, getAlgResult, getParsedAlgResult };