// Import Main Frameworks //
import React, { Component } from 'react';
import $ from 'jquery';

// // Import Algorithms //
// import { searchAlgs, binarySearch, searchDC } from '../algorithms/searchAlgorithms';
// import { mergeSort, mergeSortByParity } from '../algorithms/sortingAlgorithms';
// import { findMaxMinElements } from '../algorithms/dacAlgorithms';

// Import Helper Utilites //
import { getAlgorithmByTitle, getAlgorithmDemoTitle } from './utils';



var array = [10, 20, 30, 40],
    target = 20;

const pageTitle = "Algorithms Live";
const algorithmDemosTitle = "Algorithms Demos";
const algorithmTypeTitle = "Search Algorithms";

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
            <AlgorithmDemosByTypes type="search"/>
         </div>
      );
   }
}

// Algorithms
class AlgorithmDemosByTypes extends Component {
   render() {
      return (
         <div>
            <h3>{this.props.type.toUpperCase()} Algorithms</h3>
            <AlgorithmDemos algorithmDemoTitle={getAlgorithmDemoTitle(this.props.type)}/>
            <AlgorithmDemos algorithmDemoTitle={getAlgorithmDemoTitle(this.props.type)}/>
         </div>
      )
   }
}

class AlgorithmDemos extends Component {
   render() {
      console.log(this.props.algorithmDemoTitle)
      console.log("======================")
      let alg = getAlgorithmByTitle(this.props.algorithmDemoTitle);
      let res = alg(array, target);
      return (
         <div>
            <h4>{this.props.algorithmDemoTitle}</h4>
            <AlgorithmDemo result={res}/>
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
            Result (Boolean): {String(this.props.result.bool).toUpperCase()} <br/>
            Result (Index): {this.props.result.idx} <br/>
         </div>
      )
   }
}

export default App;