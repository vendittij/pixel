import React, { Component } from 'react';
import Block from './block.js';

class Screen extends Component{

  constructor(props){
    super(props);

    this.state={
      color: 'grey',
      boardWidth: 22,
      numTiles:484,
      numBombs:99,
      board:[]
    }
  }


  setBoard(){
    var bombs = [];
    for (var j =0; j<this.state.numBombs;j++){
      var num = Math.floor(Math.random()*this.state.numTiles)
      while (bombs.indexOf(num) !== -1){
        num = Math.floor(Math.random()*this.state.numTiles)
      }
      bombs.push(num);
    }
    for (var i = 0; i<this.state.numTiles;i++){
      if(bombs.includes(i)){
        this.state.board.push('1')
      }else{this.state.board.push('0');}

    }

  }

  render(){
    this.setBoard();
    return(
      this.state.board.map((pixel,index)=>{
          return(
            <Block
            x={index%22}
            y={(Math.trunc(index/22))}
            index = {index}
            bomb = {pixel}
            board = {this.state.board}
            boardWidth = {this.state.boardWidth}
            />
          )
        })
      );
  }
}export default Screen;
