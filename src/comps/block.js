import React, { Component } from 'react';
import { Rect } from 'react-konva';

class Block extends Component{

  constructor(props){
    super(props);

    this.state={
      color: 'grey',
      width: 20,
      gameOver:false
    }
  }

  checkTopLeft(){
    var counter = 0;
    if(this.props.board[this.props.index - (this.props.boardWidth+1)] === '1'){
      counter++;
    }
    return counter;
  }

  checkTopMiddle(){
    var counter = 0;
    if(this.props.board[this.props.index - this.props.boardWidth] === '1'){
      counter++;
    }
    return counter;
  }

  checkTopRight(){
    var counter = 0;
    if(this.props.board[this.props.index - (this.props.boardWidth-1)] === '1'){
      counter++;
    }
    return counter;
  }

  checkMiddleLeft(){
    var counter = 0;
    if(this.props.board[this.props.index - 1] === '1'){
      counter++;
    }
    return counter;
  }

  checkMiddleRight(){
    var counter = 0;
    if(this.props.board[this.props.index + 1] === '1'){
      counter++;
    }
    return counter;
  }

  checkBottomLeft(){
    var counter = 0;
    if(this.props.board[this.props.index + (this.props.boardWidth-1)] === '1'){
      counter++;
    }
    return counter;
  }


  checkBottomMiddle(){
    var counter = 0;
    if(this.props.board[this.props.index + this.props.boardWidth] === '1'){
      counter++;
    }
    return counter;
  }

  checkBottomRight(){
    var counter = 0;
    if(this.props.board[this.props.index + (this.props.boardWidth+1)] === '1'){
      counter++;
    }
    return counter;
  }

  checkSurrounding(){
    var counter = 0;
    var index = this.props.index;
    //Top Left Corner
    if(index === 0){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      return counter;
    }
    //Top Row w/o Corners
    if(index > 0 && index < this.props.boardWidth){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkMiddleLeft();
      return counter;
    }
    //Top Right Corner
    if(index === this.props.boardWidth-1){
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkBottomMiddle();
      return counter;
    }
    //Left Side
    if(index%this.props.boardWidth === 0 && (index !==0 || index !==(this.props.board.length-this.props.boardWidth))){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopRight();
      return counter;
    }
    //Right Side
    if(index%this.props.boardWidth === 21 && (index !== (this.props.boardWidth-1)||index !== (this.props.board.length-1))){
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopLeft();
      return counter;
    }
    //Bottom Row w/o Corners
    if(index > (this.props.board.length-this.props.boardWidth) && index < this.props.board.length){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkTopRight();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopLeft();
      counter = counter+this.checkMiddleLeft();
      return counter;
    }
    //All middle spaces
    else{
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkTopRight();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopLeft();
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkBottomLeft();
      return counter;
    }
  }


  handleClick=e=>{
    if (this.props.bomb === '1'){
      e.target.to({
      fill:'red'
      })

      this.setState({
        gameOver:true
      });
    }else if(this.checkSurrounding()=== 1){
      e.target.to({
      fill:'green'
      })

    }else if(this.checkSurrounding()=== 2){
      e.target.to({
      fill:'blue'
      })

    }else if(this.checkSurrounding()=== 3){
      e.target.to({
      fill:'yellow'
      })

    }else if(this.checkSurrounding()=== 4){
      e.target.to({
      fill:'orange'
      })

    }else if(this.checkSurrounding()=== 5){
      e.target.to({
      fill:'black'
      })

    }else if(this.checkSurrounding()=== 6){
      e.target.to({
      fill:'purple'
      })

    }else if(this.checkSurrounding()=== 7){
      e.target.to({
      fill:'teal'
      })

    }else if(this.checkSurrounding()=== 8){
      e.target.to({
      fill:'white'
    })
    }else{
      e.target.to({
        fill:'white'
      })
    }
  }

  render(){
    return(
      <Rect
      x={this.state.width * this.props.x}
      y={this.state.width * this.props.y}
      width={this.state.width}
      height={this.state.width}
      stroke={'black'}
      fill={this.state.color}
      fillPriority={'pattern'}
      onClick = {this.handleClick}
      />
    );
  }
}export default Block;
