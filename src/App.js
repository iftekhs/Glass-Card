import './App.css';
import image from './image.jpg';
import Button from '@material-ui/core/Button';
import card from './card';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
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
              <Button className="middleButtonsf">
                {' '}
                Card
              </Button>
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

export default App;
