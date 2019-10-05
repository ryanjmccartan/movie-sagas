import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

// import components
import List from '../List/List';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={List}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/edit" component={Edit}/>
      </div>
      </Router>
    );
  }
}

export default App;
