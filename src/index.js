"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome.js'

const div = document.createElement("div")
document.body.appendChild(div)

ReactDOM.render(
  <Welcome/>,
  div,
);
