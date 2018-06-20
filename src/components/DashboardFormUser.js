// src/components/DashboardFormUser

import * as React from 'react'

export default class DashboardFormUser extends React.PureComponent {

  state = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    shortBio: null,
    skillChoice: null
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    // console.log(this.state,'state')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state,'state submit')
    // console.log(this.state.skillChoice,'state skillChoice submit')

    if (this.state.firstName && this.state.lastName &&
        this.state.emailAddress && this.state.shortBio
    ) {
      this.props.addDashboardUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress,
        shortBio: this.state.shortBio,
        skills: {id:Math.ceil(Math.random()*10000),
                 skill:this.state.skillChoice
                },
        rejected: [],
        accepted: []
      })
    }
  }

  render() {
    return (<div>
      <h2>Fill in your info please</h2>
      <form id='userform' onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
        </label>
        <br/><br/>
        <label>
          Email Address:
          <input type="text" name="emailAddress" onChange={this.handleChange} />
        </label>

      </form>
      <br/>
        <textarea rows="4" cols="50" name="shortBio" form="userform" onChange={this.handleChange}>Enter a short bio, please</textarea>
      <h2>Choose your skill please, if you are a mentor</h2>
      <form id='skillform' onSubmit={this.handleSubmit}>
        <label>
          Skills list:
          <select name="skillChoice"  onChange={this.handleChange}>
            <option value="javascript">Javascript</option>
            <option value="juggling">Juggling</option>
            <option value="html/css">Html/CSS</option>
          </select>
        </label>
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      </div>
    )
  }
}
