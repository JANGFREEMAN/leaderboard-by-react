import React from 'react';
import ReactDOM from 'react-dom';
require('../css/content/content.scss');
var $ = require('jquery');
var User = React.createClass({
  render:function(){
    return (
      <tr>
        <td>{this.props.count}</td>
        <td className = 'userImg'>
          <a href = {"http://www.freecodecamp.com/" + this.props.user.username} target = '_blank'>
            <img src = {this.props.user.img}/>
            <span>{this.props.user.username}</span>
          </a>
        </td>
        <td>{this.props.user.recent}</td>
        <td>{this.props.user.alltime}</td>
      </tr>
    )
  }
});

var Thead = React.createClass({
  handleClick: function(column){
    this.props.changeSortColumn(column);
  },
  render:function(){
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th  onClick = {this.handleClick.bind(this,'recent')}>Points in 30 days</th>
          <th  onClick = {this.handleClick.bind(this,'alltime')}>All Time Points</th>
        </tr>
      </thead>
    )
  }
})

var Content = React.createClass({
  getInitialState:function(){
    return {
      users:[],
      column:'recent',
      reverse: false //是否翻转
    }
  },
  getData() {
    $.ajax({
      url: this.props.apiroot+"top/"+this.state.column,
      dataType: 'json',
      cache: false,
      success: function(data) {
        debugger;
        var users = data;
        this.setState({users: users});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.apiroot, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount:function(){
    this.getData();
  },
  changeSortColumn: function(column){
    if(this.state.column != column){
      //不相等
      this.getData();
      this.setState({
        column: column
      });
    }
  },
  render:function(){
      var count = 0 ,
          UserList = this.state.users.map((user) =>{
            count++;
            return <User key = {user.username} user = {user} count = {count} />
          })
      return (
        <div className = 'content'>
            <div className = 'content-header'>
                <h2 >排行榜</h2>
            </div>
            <div className = 'content-table'>
                <table className = 'table table-striped table-bordered'>
                    <Thead changeSortColumn = {this.changeSortColumn}/>
                    <tbody>
                        {UserList}
                    </tbody>
                </table>
            </div>
        </div>
      )
  }
});

export {Content}
