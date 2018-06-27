import React, { Component } from 'react';

class Login extends Component {
    constructor() {
      super();
  
      this.state = {
        username: "",
        password: ""
      };
  
      this.handleLogin = this.handleLogin.bind(this);
    }
  
    handleUsernameChange(name){
      this.setState({username:name});
    }
  
    handlePasswordChange(password){
      this.setState({password:password});
    }
  
    handleLogin(){
      alert(`Username:${this.state.username}Password:${this.state.password}`);
    }
  
    render(){
      return(
        <div>
          <input onChange={(element)=>this.handleUsernameChange(element.target.value)}type="text"/>
          <input onChange={(element)=>this.handlePasswordChange(element.target.value)}type="text"/>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      )
    }
  }
  
  export default Login;