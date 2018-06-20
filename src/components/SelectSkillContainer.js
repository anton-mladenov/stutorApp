import React, { Component } from 'react'
import background from '../lib/background.png';
import { Link } from 'react-router-dom'
import './SelectSkillContainer.css';
import {tutorsSkillSet} from "../usersData/usersDummyData"

export default class SelectSkill extends Component {

	state = {
         selected: ""
     }


	handleClick = (event) => {
	        if (this.state.selected === false) {
	            this.setState({selected: event.target.value })
	        }
	    }




	showPredefinedSkills = () => {
		return tutorsSkillSet.map(skill => <button key={skill.id} value={skill.id} onClick={this.handleClick} className='black-button'><Link to={`/results/11/${skill.id}`} className="link-text"> {skill.name}</Link> </button>)
	}




  render() {
    console.log(tutorsSkillSet, this.state, this.props);
	return (
	  <div>
    <div className="home-dash-container">
      <br/>
    <br/>
    <br/>
      <div className="results-user-container-type">
      <p className="title">FIND</p>
      </div>
      <br/>
      <br/>
      <div className="add-skill-container">
      <p className="title2">Find a tutor</p>


       {this.showPredefinedSkills()}

      <br/>
      <br/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
	  </div>
	)
  }
}
