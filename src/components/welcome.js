"use strict";
import React from 'react';
import { hot } from 'react-hot-loader';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
export default hot(module)(Welcome)
