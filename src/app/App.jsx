import React, { Component } from 'react';
import {searchAlgs, binarySearch, searchDC} from '../algorithms/searchAlgorithms';
import $ from 'jquery';


var array = [10, 20, 30, 40],
    target = 20;

const pageTitle = "Algorithms Live";
const algorithmDemosTitle = "Algorithms Demos";
const algorithmDemoTitle = "Binary Search";
const algorithmTypeTitle = "Search Algorithms";

function getAlgorithmByTitle(algTitle) {
   let algTitleTrimmed = algTitle.replace(/\s/g, "").toLowerCase();
   let algorithm = searchAlgs[algTitleTrimmed];
   return algorithm;
}

let alg = getAlgorithmByTitle(algorithmDemoTitle);
let res = alg(array, target);

class App extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

// Header
class Header extends Component {
   render() {
      return (
         <div>
            <h1>{pageTitle}</h1>
         </div>
      );
   }
}

// Contents
class Content extends Component {
   render() {
      return (
         <div>
            <h2>{algorithmDemosTitle}</h2>
            <AlgorithmDemosByTypes/>
         </div>
      );
   }
}

// Algorithms
class AlgorithmDemosByTypes extends Component {
   render() {
      return (
         <div>
            <h3>{algorithmTypeTitle}</h3>
            <AlgorithmDemos/>
         </div>
      )
   }
}

class AlgorithmDemos extends Component {
   render() {
      return (
         <div>
            <h4>{algorithmDemoTitle}</h4>
            <AlgorithmDemo/>
         </div>
      )
   }
}

class AlgorithmDemo extends Component {
   render() {
      return (
         <div>
            Array: {array.map( (el) => <li>{el}</li> )} <br/>
            Target: {target} <br/>
            Result: {String(res.bool)} {res.idx} <br/>
         </div>
      )
   }
}

export default App;