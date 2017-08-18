import React, { Component } from 'react'

class NameList extends Component {
	render() {
    return (
      <div className="App">
        
          <h2>Welcome to React</h2>
          <ul>
            <li>{this.props.name}</li>
            <li>{this.props.age}</li>
          </ul>
    
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default NameList