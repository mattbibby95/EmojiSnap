import React, { Component } from 'react';
import './App.css';

 class EmojiCard extends Component {

  constructor(props){
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected = () => {
    this.props.onEmojiSelected(this.props.arrpos);
  }

  render() {
    return (
      <div className="EmojiCard" onClick={this.handleSelected}>{this.props.emoji}</div>
    );
  }
}

class EmojiRow extends Component {

  createRow = (arr, arrstart) => {

    let row = [];
  
    for (let index = 0; index < arr.length; index++) {
      row.push(<EmojiCard key={index+arrstart} emoji={arr[index]} 
        arrpos={index+arrstart} onEmojiSelected={this.props.onEmojiSelected}></EmojiCard>);
    }

    return row;
  }

  render(){
    return(
      this.createRow(this.props.emojis, this.props.arrstart)
    );
  }

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emojigrid : this.props.em1,
      matched : new Array(30).fill(false),
      prevclick: 0
    }
    this.onEmojiSelected = this.onEmojiSelected.bind(this);
  }

  onEmojiSelected = (id) => {
    if (this.state.emojigrid[this.state.prevclick] === this.state.emojigrid[id]) {
      console.log("WINNER WINNER")
    }
    this.setState({
      prevclick : id
    });
    console.log(id);
  }

  render() {
    return (
      <div className="Wrapper">
        {/* ROW 1 */}
        <EmojiRow onEmojiSelected={this.onEmojiSelected} arrstart={0} emojis={this.props.em1.slice(0,6)} />
        {/* ROW 2 */}
        <EmojiRow onEmojiSelected={this.onEmojiSelected} arrstart={6} emojis={this.props.em1.slice(6,12)} />
        {/* ROW 3 */}
        <EmojiRow onEmojiSelected={this.onEmojiSelected} arrstart={12} emojis={this.props.em1.slice(12,18)} />
        {/* ROW 4 */}
        <EmojiRow onEmojiSelected={this.onEmojiSelected} arrstart={18} emojis={this.props.em1.slice(18,24)} />
        {/* ROW 5 */}
        <EmojiRow onEmojiSelected={this.onEmojiSelected} arrstart={24} emojis={this.props.em1.slice(24,30)} />    
      </div>
    );
  }
}

export default App;
