// src/components/LandingContainer

import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import './LandingProfile.css'

class LandingContainer extends Component {

  state = {
    emailAddress: null,
    redirect: false,
    link:'homedash',
    message:''
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      emailAddress: value
    });
    //console.log(this.state,'state')
  }

  handleSubmit = (event) => {

    event.preventDefault()
    console.log(this.props.users,'props users')
    let emailUserId
    if (this.state.emailAddress) {
      if (this.props.users.filter(user=> {
        if (user.emailAddress === this.state.emailAddress){
          emailUserId=user.id
          return user
        }
      }).length === 1) {
        console.log('email match')
        console.log(emailUserId,'emailUserid')
        this.setState({
          link: 'homedash/' + emailUserId
        })
        this.setState({redirect: true})
      }
      else {
        this.setState({message: 'email address unknown, please retry'})
        console.log('email does not match')
      }
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to={this.state.link}/>;
    }
    return (<div>
      <h2>Log in with your email address </h2>
      <form id='loginform' onSubmit={this.handleSubmit}>
        <label>
          Email address:
          <input type="text" name="emailAddress" onChange={this.handleChange}/>
        </label>
        <br/>
        <div>{this.state.message}</div>
        <br/>
        <input className="button" type="submit" value="Log in"/>
      </form>
      <h4>or</h4>
      <h2>Create a profile by clicking button below</h2>
      <Link to='/profile'>
        <button className='button' type="button" >
              Create a Profile
        </button>
      </Link>
      <br/><br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // Map the store state allUsers to the local prop users
  console.log(state,'map state')
  return {
    users: state.stutor
  }
}

// Bind Redux store updates to the function mapStateToProps and
// bind the action creators newGame and makeGuess
// so we can use it as props in the HangmanContainer component
export default connect(mapStateToProps) (LandingContainer)
