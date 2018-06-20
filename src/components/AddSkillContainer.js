import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'

const user11 = {
		id: 11,
		skills: [],
	}

export class AddSkillContainer extends Component {
	
	state = {
		showMenu: false
	}

	// showSkills = () => {
	// 	return this.props.skills.map(skill => 
	// 	<div key={skill.id}>
	// 	<h6> {skill.name} </h6>
	// 	<button className="addSkillButton" onClick={this.addNewSkill(skill.id)}> + </button>
	// 	</div>
	// 	)
	// }
	showSkills = () => {
        return this.props.skills.map(skill => <option key={skill.id}> {skill.name} </option>)
    }

	addNewSkill = (skill) => {
		console.log("button clicked, bro!")
		console.log("user11 skills array: " + user11.skills)
		return user11.skills.includes(skill) ? user11.skills : user11.skills.unshift(skill)
	}
  
	render() {
		return (
		// {this.showSkills()}
		{/* {this.userSomething()} */}
		// <div className="dropdownListWrapper">
		// 	Ad
		// </div>
		<div>

			<div>
				<p> Add A Skill </p>
			</div>
			
			<div>
				<select> {this.showSkills()} </select>
			</div>

			<div>
			{
				this.state.showMenu ? 
				<div>
					{this.showSkills()}
				</div> 
				: null
			}
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

