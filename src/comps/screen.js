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
      checked:[],
      board:[]
    }
    this.setBoard();
    this.openWhites=this.openWhites.bind(this);
    this.setChecked=this.setChecked.bind(this);
  }

  openWhites(index){
    for( let ref in this.refs){
      if(this.refs[ref].props.index === index){
        console.log(index);
        if(this.refs[ref].checkSurrounding() === 0){
          this.refs[ref].setState({
            color:'white'
          });
          this.setChecked(index);

        }else if(this.refs[ref].checkSurrounding() === 1){
          this.refs[ref].setState({
            color:'green'
          });
          this.setChecked(index);
        }else if(this.refs[ref].checkSurrounding() === 2){
          this.refs[ref].setState({
            color:'blue'
          });
          this.setChecked(index);
        }else if(this.refs[ref].checkSurrounding() === 3){
          this.refs[ref].setState({
            color:'yellow'
          });
          this.setChecked(index);
        }else if(this.refs[ref].checkSurrounding() === 4){
          this.refs[ref].setState({
            color:'orange'
          });
          this.setChecked(index);
        }else if(this.refs[ref].checkSurrounding() === 5){
          this.refs[ref].setState({
            color:'black'
          });
          this.setChecked(index);
        }
        console.log(this.state.board[index]);
        break;
      }
    }
  }

  setChecked(index, _callback){
    let board = [...this.state.board];
    let item = {...board[index]};
    item = '2';
    board[index] = item;
    this.setState({board},()=>console.log(this.state.board));
    _callback();
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


  //
  // componentDidMount(){
  //   this.setBoard();
  //   this.setState({
  //     tiles: this.state.board.map((pixel,index)=>{
  //         return(
  //           <Block
  //           x={index%22}
  //           y={(Math.trunc(index/22))}
  //           index = {index}
  //           bomb = {pixel}
  //           board = {this.state.board}
  //           openWhites = {this.openWhites}
  //           boardWidth = {this.state.boardWidth}
  //           />
  //         )
  //       })
  //   })
  //   console.log(this.state.tiles);
  // }

  render(){

    return(
      this.state.board.map((pixel,index)=>{
          return(
            <Block
            ref = {'ref'+index.toString()}
            x={index%22}
            y={(Math.trunc(index/22))}
            index = {index}
            bomb = {pixel}
            board = {this.state.board}
            openWhites = {this.openWhites}
            boardWidth = {this.state.boardWidth}
            setChecked = {this.setChecked}
            />
          )
        })
      );
  }
}export default Screen;
