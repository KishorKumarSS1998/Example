import React from "react";
import axios from "axios";
import './style.css'
class TodoAPI extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      api:[],
      search:''
    }
  }
  callNewsapi(cname){
      axios.get('https://api.openweathermap.org/data/2.5/weather?q='+cname+'&appid=6d303da985a3bc381ff7d764c5627e8d').then((res)=>this.setState({api:res.data.main})).catch((err)=>console.log(err))
  }
  
  setSearch=(event)=>{
    this.setState({search:event.target.value})
  }
  render () {
    return (
        <div className='cont'>
        <h1>Todo API</h1> 
        <form onChange={this.setSearch}>
          <input type='text' placeholder='Enter Search'></input>
        </form>
        <button className='btn' onClick={()=>this.callNewsapi(this.state.search)}>Search</button>
              <h3>City : {this.state.search}</h3>
              <h3>Pressure :{this.state.api.pressure}</h3>
              <h3>Humidity : {this.state.api.humidity}</h3>
              <h3>Temp(min) : {this.state.api.temp_min}</h3>
              <h3>Temp(max) :{this.state.api.temp_max}</h3>
        </div>
    )
  }
}
export default TodoAPI 