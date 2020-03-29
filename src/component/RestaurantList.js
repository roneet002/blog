import React, { Component, Fragment } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class RestaurantList extends Component {
constructor(){
    super()
    this.state={
        list:null
    }
}
componentDidMount(){
        this.getData()
    }
    getData(){
        fetch("http://localhost:3000/restaurent").then((resp)=>{
            resp.json().then((result)=>{
            this.setState({
                list:result
            })    
            })    
            })    

    }
    delEntry(id){
// console.warn(id)
fetch("http://localhost:3000/restaurent/"+id, 
{
    method:"DELETE",}).then((result)=>{
        result.json().then((resp)=>{
            this.getData()
            alert("your request ha been deleted")
            
        })
    })

    }
    render() {
        return (
            <Fragment><div className="table-responsive"><h1>Restaurant List</h1><Table striped bordered hover className="restoList"><thead><tr><th>id</th><th>Restaurent Name</th><th>Restaurant Address</th><th>Rating</th><th>Restaurant Contact</th><th>Operation</th></tr></thead><tbody>{        
this.state.list ? this.state.list.map((item)=>{
return(<tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.address}</td><td>{item.rating}</td><td>{item.email}</td><td><Link to={"/RestaurantUpdate/"+item.id}>Edit</Link><span onClick={()=>{this.delEntry(item.id)}} className="colBlue">Delete</span></td></tr>)
}):<tr><td colSpan="6">please wait</td></tr>}</tbody></Table></div></Fragment>
        )
    }
}
