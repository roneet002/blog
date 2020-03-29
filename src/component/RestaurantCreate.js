import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class RestaurantCreate extends Component {
    constructor(){
    super()
    this.state={
        name:null,
        address:null,
        rating:null,
        email:null
    }

    }
    

    create(){
        

        fetch('http://localhost:3000/restaurent', {
            method:"POST",
            header:{'Content-Type':'application/json'},
            body:"JSON.stringfy(this.state)"

        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                alert('you data has been added')
                console.warn(this.state)
            })
        })
    }

    render() {
        return (
            <div className="w-25 m-auto">
                <h1>Restaurant Create</h1>
               
               <div className="form-group"><input type="text" onChange={(event)=>this.setState({name:event.target.value})} placeholder="Restaurant Name" className="form-control" /></div>
               <div className="form-group"><input type="text" onChange={(event)=>this.setState({address:event.target.value})} placeholder="Restaurant Location" className="form-control" /></div>
               <div className="form-group"><input type="text" onChange={(event)=>this.setState({rating:event.target.value})} placeholder="Restaurant Rating" className="form-control"/></div>
               <div className="form-group"><input type="text" onChange={(event)=>this.setState({email:event.target.value})} placeholder="Contact Address" className="form-control"/></div>
               <Button className="w-100" onClick={()=>this.create()}>Submit</Button>
            </div>
        )
    }
}
