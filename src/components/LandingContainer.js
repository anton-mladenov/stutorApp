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

    this.setState({
      emailAddress: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.props.users,'props users')
    let emailUserId
    if (this.state.emailAddress) {
      if (this.props.users.filter(user=> {
        if (user.emailAddress === this.state.emailAddress){
          emailUserId=user.id
          return user
        }
        else return null
      }).length === 1) {
        // console.log('email match')
        // console.log(emailUserId,'emailUserid')
        this.setState({
          link: 'homedash/' + emailUserId
        })
        this.setState({redirect: true})
      }
      else {
        this.setState({message: 'email address unknown, please retry'})
      }
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to={this.state.link}/>;
    }
    return (
      <div>
        <div className="title-container-2">
          <h2 className="title3">Log in with your email address </h2>
        </div>
        <form id='loginform' onSubmit={this.handleSubmit}>
          <div className="container-email-form">
            <label>
              <p classname="email-text">Email address</p>
              <input type="text" name="emailAddress" className= "input" onChange={this.handleChange}/>
            </label>
          </div>
          <br/>
          <div>{this.state.message}</div>
          <br/>
          <input class="button" type="submit" value="Log in"/>
          <br/>
        </form>
        <h4 >or</h4>
        <h2 className="title4">Create a profile by clicking button below</h2>
        <Link to='/profile'>
          <button class='button-blue' type="button" >
                Create a Profile
          </button>
        </Link>
        <br/><br/>
        <div className="footer">
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // Map the store state allUsers to the local prop users
  return {
    users: state.stutor
  }
}

// Bind Redux store updates to the function mapStateToProps
export default connect(mapStateToProps) (LandingContainer)
