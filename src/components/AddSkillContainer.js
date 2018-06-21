import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'
import { Link } from 'react-router-dom'
import './AddSkillContainer.css';

const user11 = {
		id: 11,
		skills: [],
	}

export class AddSkillContainer extends Component {

	currentUserId = parseInt(this.props.match.params.currentUserId, 10)

	// showSkills = () => {
	// 	return this.props.skills.map(skill =>
	// 	<div key={skill.id}>
	// 	<h6> {skill.name} </h6>
	// 	<button className="addSkillButton" onClick={this.addNewSkill(skill.id)}> + </button>
	// 	</div>
	// 	)
	// }
	state = {
		showMenu: false,
		selected: ""
	}

	addNewSkill = (skill) => {
		return user11.skills.includes(skill) ? user11.skills : user11.skills.unshift(skill)
	}

	handleChange = (event) => {
		if (this.state.selected === "") {
			this.setState({selected: event.target.value })
		}
		console.log(event.target.value)
		this.addNewSkill(event.target.value)
		console.log("user11 skills array: " + user11.skills)
	}

	showSkills = () => {
        return this.props.skills.map(skill => <option value={skill.id} onClick={this.handleChange} key={skill.id}> {skill.name} </option>)
    }

	render() {
		return (
		<div>
			<div className="home-dash-container">

			<div className = "title-container">
			<h1 className="title">JOIN</h1>
			</div>

			<div className = "add-skill-container">
				<label >
					<p className ="title2">Become a Tutor</p>
					<select className="select"value={this.state.value} onChange={this.handleChange}>
					{this.showSkills()}
					</select>
				</label>
			</div>
			<br/>
			<button className = "black-button"><Link to={`/homedash/${this.currentUserId}`}> <p className= "link-text">GO!</p> </Link> </button>
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

export default connect(mapStateToProps,{ addSkill })(AddSkillContainer)
