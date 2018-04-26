import React, { Component } from "react";
// import API from "../utils/API";

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
    <h1 id ="header" style="color: #ffffff; text-align: center; text-decoration: bold">ENTER PIN</h1>
    <div class="keypadwrapper">
      <div class="inputwrapper">
        <span class="numberinput"></span>
        <span class="numberinput"></span>
        <span class="numberinput"></span>
        <span class="numberinput"></span>
      </div>
      <div class="keypad">
        <div id="lineone" class="numberline">
          <div class="content">
            <div>
              <span class="number">1</span>
              <span>___</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">2</span>
              <span>ABC</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">3</span>
              <span>DEF</span>
            </div>
          </div>
        </div>
        <div id="linetwo" class="numberline">
          <div class="content">
            <div>
              <span class="number">4</span>
              <span>GHI</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">5</span>
              <span>JKL</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">6</span>
              <span>MNO</span>
            </div>
          </div>
        </div>
        <div id="linethree" class="numberline">
          <div class="content">
            <div>
              <span class="number">7</span>
              <span>PQRS</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">8</span>
              <span>TUV</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">9</span>
              <span>WXYZ</span>
            </div>
          </div>
        </div>
        <div id="linefour" class="numberline">
          <div class="content">
            <div>
              <span class="number"></span>
              <span>___</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">0</span>
              <span>___</span>
            </div>
          </div>
          <div class="content">
            <div>
              <span class="number">></span>
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
