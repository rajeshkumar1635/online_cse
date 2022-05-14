import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
      super(props)
    this.state={
        FirstName:'',
        LastName:"",
        PhoneNumber:"",
        Gender:"Select"
    }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
    }
    handleSubmit=(event)=>{
event.preventDefault();
alert("you have registered successfully");
    }
  render() {
    return (
      <div>
<form onSubmit={this.handleSubmit}>
<label>
    FirstName</label>
    <input type="text" onChange={this.handleChange} name="FirstName" />
    <label>
        LastName</label>
        <input type="text" onChange={this.handleChange} name="LastName"/>
    <label>
        Phone Number
        </label>
        <input type="text" onChange={this.handleChange} name="PhoneNumber"/>
        <label>
            Gender</label>
<select name="Gender" onChange={this.handleChange} value={this.state.Gender}>
    <option value="Male"> Male </option>
<option value="Female"> Female</option>
</select>
<input type="submit" value ="Submit"/>
</form>
      </div>
    )
  }
}
