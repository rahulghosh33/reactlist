import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    charInput: '',
    charArr: []
  };

  inputChangeHandler = (event) => {
    const value = event.target.value;
    const valueArr = value.split('');
    this.setState({
      charInput: event.target.value,
      charArr: valueArr
    });
  }

  charClickHandler = (charIndex) => {
    const charArr = [...this.state.charArr];
    charArr.splice(charIndex, 1);

    const charInput = charArr.join('');

    this.setState({
      charInput: charInput,
      charArr: charArr
    });

  }

  render() {
    let characterDisplay = null;
    if (this.state.charArr.length > 0) {
      characterDisplay = (
        <div>
          {this.state.charArr.map( (char, index) => {
            return <CharComponent 
              character = {char}
              key = {index}
              click = {() => this.charClickHandler(index)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <div className="container">
          <input
            type="text"
            className="form-field"
            value={this.state.charInput}
            onChange={(event) => this.inputChangeHandler(event)} />
          <p>{this.state.charInput}</p>
          <ValidationComponent 
            textLength={this.state.charInput.length} />
          {characterDisplay}
        </div>
      </div>
    );
  }
}

export default App;
