import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class RestaurantUpdate extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            rating:'',
            email:'',
            
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/restaurent/"+this.props.match.params.id).then((resp)=>{
        resp.json().then((result)=>{
            this.setState({
            name:result.name,
            address:result.address,
            rating:result.rating,
            email:result.email
        })    
        })    
        })    
    }
update(){
    fetch('http://localhost:3000/restaurent/'+this.props.match.params.id, {
            method:"Post",
            header:{'Content-Type':'application/json'},
            body:"JSON.stringfy(this.state)"

        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                
                alert('your data hasbeen updatedy')
            })
        })
}
    
    render() {
        

        return (
            <div className="w-25 m-auto">
                <h1>Restaurant Update</h1>
               <div className="form-group"><input onChange={(event)=>{this.setState({name:event.target.value})}} value={this.state.name} type="text"  className="form-control" /></div>
               <div className="form-group"><input onChange={(event)=>{this.setState({address:event.target.value})}} value={this.state.address} type="text" className="form-control" /></div>
               <div className="form-group"><input onChange={(event)=>{this.setState({rating:event.target.value})}} value={this.state.rating} type="text" className="form-control"/></div>
               <div className="form-group"><input onChange={(event)=>{this.setState({email:event.target.value})}} value={this.state.email} type="text" className="form-control"/></div>
               <Button className="w-100" onClick={()=>this.update()}>Submit</Button>
           
            </div>
        )
    }
}
