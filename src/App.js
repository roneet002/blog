import React, { Component } from 'react';
import './App.css';
import Home from './component/Home';
import RestaurantCreate from './component/RestaurantCreate'
import RestaurantDetail from './component/RestaurantDetail'
import RestaurantList from './component/RestaurantList'
import RestaurantSearch from './component/RestaurantSearch'
import RestaurantUpdate from './component/RestaurantUpdate'
import {Nav, Navbar} from 'react-bootstrap'




import {Link, Route, BrowserRouter as Router} from 'react-router-dom'



export default class App extends Component{

 
  render(){

    return (
      <div className="App">

        <header className="App-header">
          
          
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Restaurant List</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
    <Link  to='/'>Home</Link>
      <Link to='/RestaurantCreate'>Restaurant Create</Link>
      <Link to='/RestaurantDetail'>Restaurant Detail</Link>
      <Link to='/RestaurantList'>Restaurant List</Link>
      <Link to='/RestaurantSearch'>Restaurant Search</Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<Route path='/RestaurantCreate'><RestaurantCreate /></Route>
<Route path='/RestaurantDetail'><RestaurantDetail/></Route>
<Route path='/RestaurantList'><RestaurantList/></Route>
<Route path='/RestaurantSearch'><RestaurantSearch/></Route>
<Route path='/RestaurantUpdate/:id' render={props=>(<RestaurantUpdate {...props} />)}></Route>
<Route path='/' exact><Home /></Route>



</Router>

          
        </header>
      </div>
    );


  }
}
