// src/components/Profile

import * as React from 'react'
//import { Link  } from 'react-router-dom'
import { Redirect } from 'react-router';
import './LandingProfile.css'

export default class Profile extends React.PureComponent {

  state = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    shortBio: null,
    link: 'homedash',
    redirect: false,
    message: ' '
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    //console.log(this.state,'state')
  }

  handleSubmit = (event) => {

    const newId = Math.ceil(Math.random()*10000)

    event.preventDefault()
    console.log(this.state,'state submit')

    this.setState({
      link: 'homedash/' + newId
    })
    console.log(this.state.link, 'state link')
    console.log(this.state.id, 'state id')

    if (this.state.firstName && this.state.lastName &&
        this.state.emailAddress && this.state.shortBio
    ) {
      this.props.addProfileUser({
        id: newId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress,
        shortBio: this.state.shortBio,
        skills: [],
        rejected: [],
        accepted: []
      })
      this.setState({redirect: true})
    }
    else {
      this.state.message='Please fill in all the fields'
    }

  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to={this.state.link}/>;
    }
    return (<div>
      <h2>Fill in your Profile info please</h2>
      <form id='userform' onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" required onChange={this.handleChange} />
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
      <br/>
      <div>{this.state.message}</div>
      <br/>
      <form id='just submit' onSubmit={this.handleSubmit}>
          <input className="button" type="submit" value="Submit" />
      </form>
      <br/><br/>
      {/*
      <Link to={this.state.link}>
          <button type="button" style={{fontSize: 20}}>
               Find or become a Tutor
          </button>
      </Link>
      <br/><br/>
      */}
      </div>
    )
  }
}
