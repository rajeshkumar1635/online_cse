import React, { Component } from 'react'
//import Register from "./Register"
import hos from "./images/1.jpg"
import {Link} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='container'>   
<nav class="navbar navbar-dark bg-primary">
  <table className="table">
    <tr>
    <td>
  Hospital Management system
  </td>
  <td>
   <Link to="/Register">Register
   </Link>
   </td>
   </tr>
   </table>
</nav>
<div>
<img src={hos} class="img-fluid" alt="..."/>
</div>
      </div>
    )
  }
}
