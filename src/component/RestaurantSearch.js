import React, { Component } from 'react'

export default class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state={
            searchData:null,
            noData:false
        }
    }
    search(key){
    console.warn(key)
    fetch("http://localhost:3000/restaurent?q="+key).then((resp)=>{
        resp.json().then((result)=>{
            if(result.length>0){
                this.setState({searchData:result,noData:false})
            }
            else{
                this.setState({
                    noData:true,
                    searchData:null
                })
            }
            
        })
    })


    }
    render() {
        return (
            <div className="w-25 m-auto">
                <h1>Restaurant Search</h1>
                <input type="text" placeholder="Search Your Data" className="form-control" onChange={(event)=>{this.search(event.target.value)}}/>

                {
                    this.state.searchData ?<div>
                    {
                        this.state.searchData.map((item)=>{
                            return(<div key={item.id} className="searchRow">{item.name}</div>)
                        })
                    }</div> : ''
                }
                {
                    this.state.noData ? <h3>No Data Found</h3>:''
                }
            </div>
        )
    }
}
