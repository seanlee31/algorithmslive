// Import Main Frameworks //
import React, { Component } from 'react';
import $ from 'jquery';

// // Import Algorithms //
// import { searchAlgs, binarySearch, searchDC } from '../algorithms/searchAlgorithms';
import { mergeSort, mergeSortByParity } from '../algorithms/sortingAlgorithms';
// import { findMaxMinElements } from '../algorithms/dacAlgorithms';

// Import Helper Utilites //
import { getAlgorithmByTitle, getAlgorithmTitles, randomIntArray, getParsedAlgResult } from './utils';

var array = randomIntArray(20, 20),
    target = 20;

const pageTitle = "Algorithms Live!";
const algorithmDemosTitle = "Algorithms Demos";

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
            <AlgorithmDemosByType algType="search"/>
            <AlgorithmDemosByType algType="sorting"/>
            <AlgorithmDemosByType algType="dac"/>
         </div>
      );
   }
}

// Algorithms
class AlgorithmDemosByType extends Component {
   render() {
      let algTitles = getAlgorithmTitles(this.props.algType);
      return (
         <div>
            <h3>{this.props.algType.toUpperCase()} Algorithms</h3>
            {algTitles.map( (el) => <AlgorithmDemo algTitle={el} algType={this.props.algType}/>)}
         </div>
      )
   }
}

class AlgorithmDemo extends Component {
   render() {
      let alg = getAlgorithmByTitle(this.props.algTitle);
      let res;
      console.log(alg)

      switch (this.props.algType) {
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
      console.log(res)

      return (
         <div>
            <h4>{this.props.algTitle}</h4>
            <div>{alg.toString()}</div>
            <AlgorithmDemoResult algResult={res} algTitle={this.props.algTitle}/>
         </div>
      )
   }
}

class AlgorithmDemoResult extends Component {
   render() {
      let input = <div>
         Array: [{array.join(', ')}] <br/>
         Target: {target}
      </div>
      console.log(`testing: ${this.props.algResult}`)
      let parsedResult = getParsedAlgResult(array, this.props.algTitle, this.props.algResult);

      return (
         <div>
            Array: [{array.join(', ')}] <br/>
            Target: {target} <br/>
            {parsedResult}
         </div>
      )
   }
}

export default App;