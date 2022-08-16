//Hook with class component

import React, { Component } from 'react'

var count:number
export default class extends Component< {},{count:number}> {
    
    constructor(props:any){
        super(props)
        this.state = {
            count: 0,
        }

    }
    increment =()=>{
       this.setState({
        count:this.state.count +1

       })
 
     }
    decrement =()=>{
        this.setState({
            count:this.state.count -1
        
 
     })
    }
  render() {
    return (
    <div>
         <p> The count is : {this.state.count}  </p>
         <button type='button' className='btn btn-primary btn-sm' onClick={this.decrement}> -  </button>
         <button type='button' className='btn btn-primary btn-sm' onClick={this.increment}> +  </button>
    </div>
    )
  }
}
