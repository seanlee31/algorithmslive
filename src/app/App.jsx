// Import Main Frameworks //
import React, { Component } from 'react';
import $ from 'jquery';

// // Import Algorithms //
// import { searchAlgs, binarySearch, searchDC } from '../algorithms/searchAlgorithms';
// import { mergeSort, mergeSortByParity } from '../algorithms/sortingAlgorithms';
// import { findMaxMinElements } from '../algorithms/dacAlgorithms';

// Import Helper Utilites //
import { getAlgorithmByTitle, getAlgorithmTitles } from './utils';

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
            <AlgorithmDemosByType type="search"/>
         </div>
      );
   }
}

// Algorithms
class AlgorithmDemosByType extends Component {
   render() {
      let algTitles = getAlgorithmTitles(this.props.type);
      console.log(algTitles)
      return (
         <div>
            <h3>{this.props.type.toUpperCase()} Algorithms</h3>
            {algTitles.map( (el) => <AlgorithmDemo algorithmTitle={el}/>)}
         </div>
      )
   }
}

class AlgorithmDemo extends Component {
   render() {
      let alg = getAlgorithmByTitle(this.props.algorithmTitle);
      let res = alg(array, target);
      return (
         <div>
            <h4>{this.props.algorithmTitle}</h4>
            <div>{alg.toString()}</div>
            <AlgorithmDemoResult result={res}/>
         </div>
      )
   }
}

class AlgorithmDemoResult extends Component {
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