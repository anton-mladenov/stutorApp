import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'

const user11 = {
		id: 11,
		skills: [],
	}

export class AddSkillContainer extends Component {
  
	showSkills = () => {
		return this.props.skills.map(skill => 
		<div key={skill.id}>
		<h6> {skill.name} </h6>
		<button className="addSkillButton"> + </button>
		</div>
		)
	}

	addNewSkill = (skill) => {
		
		return user11.skills.includes(skill) ? user11.skills : user11.skills.unshift(skill)
	}
  
	render() {
		return (
		<div>
			{this.showSkills()}
			{/* {this.userSomething()} */}
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
