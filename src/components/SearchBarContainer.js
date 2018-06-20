import React, { Component } from 'react'
import {tutorsSkillSet} from "../usersData/usersDummyData"

export default class SearchBarContainer extends Component {
	
	state = {
		showMenu: false
	}

	showMenu = (event) => {
		event.preventDefault()
		this.setState({ showMenu: true })
	}

	showPredefinedSkills = () => {
		return tutorsSkillSet.map(skill => <option key={skill.id}> {skill.name} </option>)
	}
  
	render() {
		// console.log(tutorsSkillSet, this.state, this.props);
		
		return (
		<div>

			<div onClick={this.showMenu}>
				<button>Search For Skills</button>
			</div>

			{
				this.state.showMenu ? 
				<div className="searchOptionsMenu">
					{this.showPredefinedSkills()}
				</div> 
				: null
			}
			

		</div>
		)
	}
}
