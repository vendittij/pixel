import React, { Component } from 'react';
import { Rect } from 'react-konva';

class Block extends Component{

  constructor(props){
    super(props);

    this.state={
      color: 'grey',
      width: 20,
      checked: false,
      gameOver:false
    }
    this.checkSurrounding();
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
    else if(index > 0 && index < this.props.boardWidth){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkMiddleLeft();
      return counter;
    }
    //Top Right Corner
    else if(index === this.props.boardWidth-1){
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkBottomMiddle();
      return counter;
    }
    //Left Side
    else if(index%this.props.boardWidth === 0 && (index !==0 && index !==(this.props.board.length-this.props.boardWidth))){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkBottomRight();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopRight();
      return counter;
    }
    //Right Side
    else if(index%this.props.boardWidth === 21 && (index !== (this.props.boardWidth-1) && index !== (this.props.board.length-1))){
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkBottomLeft();
      counter = counter+this.checkBottomMiddle();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopLeft();
      return counter;
    }
    //Bottom Row w/o Corners
    else if(index > (this.props.board.length-this.props.boardWidth) && index < this.props.board.length-1){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkTopRight();
      counter = counter+this.checkTopMiddle();
      counter = counter+this.checkTopLeft();
      counter = counter+this.checkMiddleLeft();
      return counter;
    }
    //Bottom Right Corner
    else if(index === this.props.board.length-1){
      counter = counter+this.checkMiddleLeft();
      counter = counter+this.checkTopLeft();
      counter = counter+this.checkTopMiddle();
      return counter;
    }
    //Bottom Left Corner
    else if(index === this.props.board.length-this.props.boardWidth){
      counter = counter+this.checkMiddleRight();
      counter = counter+this.checkTopRight();
      counter = counter+this.checkTopMiddle();
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

  noBombs(){
    var index = this.props.index;
    var width = this.props.boardWidth;
//Top Left Corner
    if(index === 0){
      if(this.props.board[index+1]!=='2'){this.props.openWhites(index+1);}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width+1)]!=='2'){this.props.openWhites(index+(width+1));}
    }
//Top Row
    else if(index > 0 && index < this.props.boardWidth){
      if(this.props.board[index+1]!=='2'){this.props.openWhites(index+1);}
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index+(width-1)]!=='2'){this.props.openWhites(index+(width-1));}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width+1)]!=='2'){this.props.openWhites(index+(width+1));}
    }
//Top Right Corner
    else if(index === this.props.boardWidth-1){
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width-1)]!=='2'){this.props.openWhites(index+(width-1));}
    }
//Left
    else if(index%this.props.boardWidth === 0 && (index !==0 && index !==(this.props.board.length-this.props.boardWidth))){
      if(this.props.board[index+1]!=='2'){this.props.openWhites(index+1);}
      if(this.props.board[index-(width-1)]!=='2'){this.props.openWhites(index-(width-1));}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width+1)]!=='2'){this.props.openWhites(index+(width+1));}
    }
//Right
    else if(index%this.props.boardWidth === 21 && (index !== (this.props.boardWidth-1) && index !== (this.props.board.length-1))){
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index-(width+1)]!=='2'){this.props.openWhites(index-(width+1));}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width-1)]!=='2'){this.props.openWhites(index+(width-1));}
    }
//Bottom Row
    else if(index > (this.props.board.length-this.props.boardWidth) && index < this.props.board.length-1){
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index-(width+1)]!=='2'){this.props.openWhites(index-(width+1));}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index-(width-1)]!== 2){this.props.openWhites(index-(width-1));}
      if(this.props.board[index+1] !== 2){this.props.openWhites(index+1);}
    }
//Bottom Right Corner
    else if(index === this.props.board.length-1){
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index-(width+1)]!=='2'){this.props.openWhites(index-(width+1));}
    }
//Bottom Left Corner
    else if(index === this.props.board.length-this.props.boardWidth){
      if(this.props.board[index+1]!=='2'){this.props.openWhites(index+1);}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index-(width-1)]!=='2'){this.props.openWhites(index-(width-1));}
    }
//Middle
    else{
      console.log(this.props.board[index-1]);
      if(this.props.board[index-1]!=='2'){this.props.openWhites(index-1);}
      if(this.props.board[index+1]!=='2'){this.props.openWhites(index+1);}
      if(this.props.board[index-(width+1)]!=='2'){this.props.openWhites(index-(width+1));}
      if(this.props.board[index-(width-1)]!=='2'){this.props.openWhites(index-(width-1));}
      if(this.props.board[index-(width)]!=='2'){this.props.openWhites(index-(width));}
      if(this.props.board[index+(width)]!=='2'){this.props.openWhites(index+(width));}
      if(this.props.board[index+(width-1)]!=='2'){this.props.openWhites(index+(width-1));}
      if(this.props.board[index+(width)+1]!=='2'){this.props.openWhites(index+(width+1));}
    }


  }


  handleClick=e=>{

    if (this.props.bomb === '1'){
      this.setState({
      color:'red',
      checked: true
      })
      this.setState({
        gameOver:true
      });
    }else if(this.checkSurrounding()=== 1){
      this.setState({
      color:'green',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 2){
      this.setState({
      color:'blue',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 3){
      this.setState({
      color:'yellow',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 4){
      this.setState({
      color:'orange',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 5){
      this.setState({
      color:'black',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 6){
      this.setState({
      color:'purple',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 7){
      this.setState({
      color:'pink',
      checked: true
      })
      this.props.setChecked(this.props.index);
    }else if(this.checkSurrounding()=== 8){
      this.setState({
      color:'indigo',
      checked: true
    })
    this.props.setChecked(this.props.index);
    }else{
      this.setState({
      color:'white',
      checked: true
    });
    //Fix this call back 
    this.props.setChecked(this.props.index,function(){this.noBombs()});
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
