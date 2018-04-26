import React, { Component } from "react";
// import API from "../utils/API";
import "./pin.css";

class Pin extends Component {
  state = {
    enteredPin: [],
    pinIsValid: false
  }

  componentDidMount() {
    const localList = localStorage.getItem('enteredPin');
  }

  handleBtnClick = event => {
    
  };

  render() {
    return (
      <div id="root">
    <h1 id ="header">ENTER PIN</h1>
    <div className="keypadwrapper">
      <div className="inputwrapper">
        <span className="numberinput"></span>
        <span className="numberinput"></span>
        <span className="numberinput"></span>
        <span className="numberinput"></span>
      </div>
      <div className="keypad">
        <div id="lineone" className="numberline">
          <div className="content">
            <div>
              <span className="number">1</span>
              <span>___</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">2</span>
              <span>ABC</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">3</span>
              <span>DEF</span>
            </div>
          </div>
        </div>
        <div id="linetwo" className="numberline">
          <div className="content">
            <div>
              <span className="number">4</span>
              <span>GHI</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">5</span>
              <span>JKL</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">6</span>
              <span>MNO</span>
            </div>
          </div>
        </div>
        <div id="linethree" className="numberline">
          <div className="content">
            <div>
              <span className="number">7</span>
              <span>PQRS</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">8</span>
              <span>TUV</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">9</span>
              <span>WXYZ</span>
            </div>
          </div>
        </div>
        <div id="linefour" className="numberline">
          <div className="content">
            <div>
              <span className="number"></span>
              <span>___</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">0</span>
              <span>___</span>
            </div>
          </div>
          <div className="content">
            <div>
              <span className="number">></span>
              <span>SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    );
  }
}

export default Pin;
