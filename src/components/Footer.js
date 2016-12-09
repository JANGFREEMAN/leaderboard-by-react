import React from 'react';
import ReactDOM from 'react-dom';
require('../css/footer/footer.scss');


var Footer = React.createClass({
  render: function(){
    return (
      <footer>
        <div className = 'container'>
            <p>Written by <a href = 'https://github.com/JANGFREEMAN'>@Zhangyx</a></p>
        </div>
      </footer>
    );
  }
});

export {Footer}
