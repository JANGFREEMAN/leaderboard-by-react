import React from 'react';
import ReactDOM from 'react-dom';
require('../css/header/header.scss');

var Header = React.createClass({
  render:function(){
    return (
      <header className = 'header'>
        <a>
          <img className = 'log' src = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg' alt = 'freeCodeCamp'/>
        </a>
      </header>
    );
  }
});

export {Header}
