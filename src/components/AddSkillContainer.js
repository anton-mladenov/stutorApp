import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'

const user11 = {
		id: 11,
		skills: [],
	}

export class AddSkillContainer extends Component {
	
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
			
			<div>
				<label>
					Add A Skill
					{/* <button onClick={this.showSkills()}> Add A Skill </button>  */}
					<select value={this.state.value} onChange={this.handleChange}> 
					{this.showSkills()} 
					</select> 
				</label>
			</div>

			{/* <div>
			{
				this.state.showMenu ? 
				<div>
					{this.showSkills()}
				</div> 
				: null
			}
			</div> */}

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

