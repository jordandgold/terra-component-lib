import React, { Component } from "react";
import Button from './lib/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Button text="Button" onClick={() => {}} className="ter-button--primary--1" />
          <Button text="Button" onClick={() => {}} className="ter-button--primary--2" />
          <Button text="Button" onClick={() => {}} className="ter-button--primary--3" />
          <Button text="Button" onClick={() => {}} className="ter-button--primary--4" />
          <Button text="Button" onClick={() => {}} className="ter-button--primary--5" />
        </div>
        <div>
          <Button text="Button" onClick={() => {}} className="ter-button--secondary--1" />
          <Button text="Button" onClick={() => {}} className="ter-button--secondary--2" />
          <Button text="Button" onClick={() => {}} className="ter-button--secondary--3" />
          <Button text="Button" onClick={() => {}} className="ter-button--secondary--4" />
          <Button text="Button" onClick={() => {}} className="ter-button--secondary--5" />
        </div>
      </div>
    )
  }
}

export default App;
