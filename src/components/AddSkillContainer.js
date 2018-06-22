import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'
import { Link } from 'react-router-dom'
import './AddSkillContainer.css';

// const user11 = {
// 		id: 11,
// 		skills: [],
// 	}

export class AddSkillContainer extends Component {

	currentUserId = parseInt(this.props.match.params.currentUserId, 10)
	// userFromStoreWithID = this.props.users

	// testing = () => {
	// 	console.log("testing function running ...")
	// 	return this.props.users.map(user => user.id === this.currentUserId ? console.log("skillID in user's skills array: " + user.skills) : null )
	// }

	state = {
		showMenu: false,
		selected: ""
	}

	// addNewSkill = (skill, userId) => {
	// 	return userId.skills.includes(skill) ? userId.skills : userId.skills.unshift(skill)
	// }

	handleChange = (event) => {
		event.preventDefault()
		if (this.state.selected === "") {
			this.setState({selected: event.target.value })
		}
		console.log("event.target.value: " + event.target.value)
		this.props.addSkill(event.target.value, this.currentUserId)
		// console.log("currentUserId skills array: " + this.currentUserId.skills)
	}

	showSkills = () => {
        return this.props.skills.map(skill => <option value={skill.id} key={skill.id}> {skill.name} </option>) /*value={skill.id} onClick={this.handleChange}*/
    }

	render() {
		// console.log(this.currentUserId)
		// console.log(typeof this.userFromStoreWithID)
		// this.testing()
		
		return (
		<div>
			<div className="home-dash-container">

				<div className = "title-container">
				<h1 className="title"> JOIN </h1>
				</div>

				<div className = "add-skill-container">
					<label >
						<p className ="title2"> Become a Tutor </p>
						<select className="select" value={this.state.value} onChange={this.handleChange}> {/*value={this.state.value} onChange={this.handleChange}*/}
 						<option value="0">Select Skill</option>
						 {this.showSkills()}
						</select>
					</label>
				</div>

				<br/>

				<button className = "black-button"><Link to={`/homedash/${this.currentUserId}`}> <p className= "link-text"> GO! </p> </Link> </button>
				
				<div className= "footer">
				</div>
			</div>
		</div>

		)
  	}
}

const mapStateToProps = (state) => {
    return {
        skills: state.skills,
		users: state.stutor
    }
}

export default connect(mapStateToProps, { addSkill })(AddSkillContainer)
