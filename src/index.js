import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { shuffle } from 'underscore'
import * as serviceWorker from './serviceWorker';

const emojis = ["😀","😂","😭","🤓","🤩","👩‍💻","🕵️‍","💂‍","👍",
                "👏","👌","🐶","🐳","🌞","🍺"]

var doublemojis = emojis.reduce(function(result, current) {
        return result.concat([current,current]);
    }, []
)

var shuffled = shuffle(doublemojis);

console.log(shuffled);

ReactDOM.render(<App em1={shuffled}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
