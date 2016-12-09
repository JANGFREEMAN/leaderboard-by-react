import React from 'react';
import ReactDOM from 'react-dom';
import {LeaderBoard} from './components/LeaderBoard.js'

ReactDOM.render(<LeaderBoard apiroot="http://fcctop100.herokuapp.com/api/fccusers/"/>, document.getElementById('app'));
