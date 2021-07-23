import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';


export default class addCar extends Component {
    
   constructor(props){
       super(props);
       
       this.state = {
           carname : "",
           version : "",
           year : ""
       }
      
       this.onCarNameInoutevent = this.onCarNameInoutevent.bind(this)
       this.onVersionInoutevent = this.onVersionInoutevent.bind(this)
       this.onyearInoutevent = this.onyearInoutevent.bind(this)
       this.onSubmitHandler = this.onSubmitHandler.bind(this)

    
   }
   onCarNameInoutevent(e){
           this.setState({carname : e.target.value})
   }
   onVersionInoutevent(e){
      this.setState({version : e.target.value})
  }
  onyearInoutevent(e){
    this.setState({year : e.target.value})
  }
  onSubmitHandler(e){
      e.preventDefault()
      console.log(this.state)

      //submit car details
      axios.post('http://localhost:8080/crudapid/webapi/myresource/add',this.state).then((res)=>{
            //console.log(res)
            if(res.data){
               <Redirect to ="/show"/>
              
               

            }
            else{
                console.log("Adding failed")
            }
            
      }).catch((err)=>{
            console.log(err)
      })

  }


    render() {
        return (
            <div>
                 <a href="/show">Show cars</a>
                <form onSubmit = {this.onSubmitHandler}>
                    <h1>Add Car</h1>
                    <input type="text" placeholder="Enter car name" value = {this.state.carname}  onChange={this.onCarNameInoutevent}></input><br />
                    <input type="text" placeholder="Enter version" value={this.state.version} onChange={this.onVersionInoutevent}></input><br />
                    <input type="text" placeholder="Enter year" value = {this.state.year} onChange={this.onyearInoutevent}></input><br />
                    <button type="submit">Add Car</button>
                </form>
             
                
            </div>
        )
    }
}

