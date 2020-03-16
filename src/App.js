import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';

export default class App extends Component{
constructor(){
super()
this.state={
user:null,
password:null
}
}
 sbt=()=>{
  user = this.state.user;
  password =this.state.password
this.setState({

  
})

}
users=(event)=>{
this.setState({
  user:event.target.value
})
}
password=(event)=>{
  this.setState({
    password:event.target.value
  })
}

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          

          <Home />
          
          <input type="text" onChange={(event)=>{this.users(event)}} />
          <input type="password"  onChange={(event)=>{this.password(event)}} />          
          <button onClick={()=>{this.sbt()}}>Form submit</button>

        {this.state.user}
        {this.state.password}
        </header>
      </div>
    );


  }
}
