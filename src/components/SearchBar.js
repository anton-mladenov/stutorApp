import React, { Component } from 'react'
import tutorsSkillSet from "../usersData/usersDummyData"

export default class componentName extends Component {
	
	state = {
		showMenu: false
	}



	showMenu = (event) => {
		event.preventDefault()
		this.setState({ showMenu: true })
	}
  
	render() {
		return (
		<div>
			
			<div onClick={this.showMenu}>
				<button>Search For Skills</button>
			</div>

			{
				this.state.showMenu ? 
				<div className="Search Options Menu">
					<button> {tutorsSkillSet[0]} </button>
					<button> {tutorsSkillSet[1]} </button>
					<button> {tutorsSkillSet[2]} </button>
					<button> {tutorsSkillSet[3]} </button>
					<button> {tutorsSkillSet[4]} </button>
				</div> 
				: null
			}
			

		</div>
		)
	}
}
