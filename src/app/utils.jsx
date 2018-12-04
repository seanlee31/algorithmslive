// Import Main Frameworks //
import React, { Component } from 'react';
import $ from 'jquery';

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

function getParsedAlgResult(array, alg, res) {
   let parsedRes;
   console.log(res)

   switch (alg) {
      case "binarysearch":
         parsedRes = <div class="algResult">
            Array (Sorted): [{sortingAlgs['mergesort'](array, 0, array.length-1).join(', ')}]  <br/>
            Result (Boolean): {String(res.bool).toUpperCase()} <br/>
            Result (Index): {(res.idx) ? res.idx : "NONE"}
         </div>
         break;
      case "searchdc":
         parsedRes = <div class="algResult">
            Result (Boolean): {String(res.bool).toUpperCase()} <br/>
            Result (Index): {(res.idx) ? res.idx : "NONE"}
         </div>
         break;
      case "mergesort":
         parsedRes = <div class="algResult">
            Result (Sorted Array): [{res.join(', ')}]
         </div>
         break;
      case "findmaxminelements":
         parsedRes = <div class="algResult">
            Result (MAX): {res.max} <br/>
            Result (MIN): {res.min}
         </div>
         break;
      default:
         parsedRes = <div class="algResult">
            Result: No Matching Algorithms! <br/>
            Algorithm Requested: {alg}
         </div> 
         break;
   }
   return parsedRes;
}

export { getAlgorithmByTitle, getAlgorithmTitles, randomIntArray, getParsedAlgResult };