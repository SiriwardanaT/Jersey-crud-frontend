import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class showCars extends Component {
     constructor(prosp){
        super(prosp)

        this.state = {
            cars : []
        }
     }

    //life cycles
   async componentDidMount(){

        await axios.get('http://localhost:8080/crudapid/webapi/myresource/allCar').then((res)=>{
            if(res !=null){
                console.log(res)
                this.setState({cars:res.data})

            }
            else{
                console.log("ooops")
            }

        })
        .catch((err)=>{
            console.log(err)
        })
         
    }

    render() {
        return (
            <div>
                <table border = "1">
                <tr>
                            <th>CarName</th>
                            <th>Version</th>
                            <th>year</th>
                         
                </tr>   
             {this.state.cars.map((car)=>{
                   return(
                    <tr key = {car.id}>
                        <th>{car.carname}</th>
                        <th>{car.version}</th>
                        <th>{car.year}</th>
                        <th><button type="submit" onClick={()=>{
                            //delete method
                            axios.post('http://localhost:8080/crudapid/webapi/myresource/delete/'+car.id).then((res)=>{
                                console.log(res.data)
                                window.location.reload(true)
                             
                            })
                            .catch((err)=>{
                                console.log(err)

                            })
                        }}>Delete</button></th>
                        <th><Link to={'/update/'+car.id}>update</Link></th>

                 
                    </tr>
                    
                   )
                  
                    
                })}
                </table>
            </div>
        )
    }
}
