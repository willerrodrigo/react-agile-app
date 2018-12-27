import React, { Component } from 'react';
import './App.css';

import NavBar from './ui/NavBar'

class App extends Component {
  render() {
    const logo = 'Scrum'
    return (
      <div class="container">
        <NavBar logo={logo}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
