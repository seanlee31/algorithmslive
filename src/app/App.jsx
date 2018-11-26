import React, { Component } from 'react';
import {binarySearch, searchDC} from '../algorithms/searchAlgorithms';


var array = [10, 20, 30, 40],
    target = 20;

var res = searchDC(array, target);

const pageTitle = "Algorithms Live";
const algorithmDemosTitle = "Algorithms Demos";
const algorithmDemoTitle = String(res.bool);
// const algorithmDemoTitle = "Algorithms Demo 1";

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
class Header extends Component {
   render() {
      return (
         <div>
            <h1>{pageTitle}</h1>
         </div>
      );
   }
}
class Content extends Component {
   render() {
      return (
         <div>
            <h2>{algorithmDemosTitle}</h2>
            <AlgorithmDemos/>
         </div>
      );
   }
}

class AlgorithmDemos extends Component {
   render() {
      return (
         <div>
            <h3>{algorithmDemoTitle}</h3>
         </div>
      )
   }
}

export default App;