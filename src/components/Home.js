import React, { Component } from 'react';
import "./Home.css";

export default class componentName extends Component {
  render() {
	return (
	  <div className="mainDiv">
		  
		<div className="logoDiv">
			<p className="logoText"> STUTOR </p>
		</div>

		<div className="taglineDiv">
			<p className="meet"> Meet. </p>
			<p className="learn">	Learn. </p>
			<p className="teach">	Teach. </p>
		</div>

		<div className="createProfile">
			<p className="createProfileText"> Create A Profile </p>
		</div>

		<div className="loginDiv">
			<p className="loginText"> Already Have A Profile? Log In </p>
		</div>

	  </div>
	)
  }
}
