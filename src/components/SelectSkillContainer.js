import React, { Component } from 'react'
// import background from '../lib/background.png';
import { Link } from 'react-router-dom'
import './SelectSkillContainer.css';
import {tutorsSkillSet} from "../usersData/usersDummyData"

export default class SelectSkill extends Component {

	currentUserId = parseInt(this.props.match.params.currentUserId, 10)

	state = {
         selected: ""
     }


	handleClick = (event) => {
	        if (this.state.selected === false) {
	            this.setState({selected: event.target.value })
	        }
	    }




	showPredefinedSkills = () => {
		return tutorsSkillSet.map(skill => <button key={skill.id} value={skill.id} onClick={this.handleClick} className='button-select2 shake'><Link to={`/results/${this.currentUserId}/${skill.id}`} className="link-text"> {skill.name}</Link> </button>)
	}




  render() {
    console.log(tutorsSkillSet, this.state, this.props);
	return (
	  <div>
    <div className="home-dash-container-select">
      <br/>
    <br/>
    <br/>
      <div className="results-user-container-type">
      <p className="title">FIND</p>
      </div>
      <br/>
      <br/>
      <div className="add-skill-container-select">
      <p className="title5">What do you want to learn?</p>


       {this.showPredefinedSkills()}

      <br/>
      <br/>
      </div>
			<div className= "footer">
			</div>
      </div>
	  </div>
	)
  }
}
