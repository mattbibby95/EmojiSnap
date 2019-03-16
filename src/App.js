import React, { Component } from 'react';
import './App.css';

function EmojiCard(props) {
  return (
    <div className="EmojiCard">{props.emoji}</div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        {/* ROW 1 */}
        <EmojiCard emoji="💸" />
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        {/* ROW 2 */}
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        {/* ROW 3 */}
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        {/* ROW 4 */}
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/> 
        <EmojiCard emoji="💸"/>
        {/* ROW 5 */}
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>         
        {/* ROW 6 /*/}
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>
        <EmojiCard emoji="💸"/>       
      </div>
    );
  }
}

export default App;
