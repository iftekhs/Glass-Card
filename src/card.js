import React, { Component } from 'react';
import image from './image.jpg';
import Button from '@material-ui/core/Button';
import card from './card';
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    // this.inputRef.current is null here
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src={image} alt="" />
            </div>
            <div className="middle">
              <h1> Glass Card </h1>
              <p>
                This is a aweasome looking card!
              </p>
              <div className="middleButtons">
                <Button>Glass</Button>
                <Button> Card</Button>
              </div>
            </div>
            <div className="bottom">
              <h4> Copyright | 2021 </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
