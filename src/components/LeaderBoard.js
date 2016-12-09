import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.js';
import {Content} from './Content.js';
import {Footer} from './Footer.js';
require('../css/main.scss');
var $ = require('jquery');
var LeaderBoard = React.createClass({
  render:function(){
      return (
        <div>
          <Header />
          <Content apiroot = {this.props.apiroot} />
          <Footer />
        </div>
      )
  }
});

export {LeaderBoard}
