import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Screen from './screen.js';

class BackDrop extends Component{

  render(){
    return(
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Screen/>
        </Layer>
      </Stage>
    );
  }
}export default BackDrop;
