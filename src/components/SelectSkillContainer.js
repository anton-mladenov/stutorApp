import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SelectSkillContainer.css';
import {tutorsSkillSet} from "../usersData/usersDummyData"

export default class SelectSkill extends Component {

	currentUserId = 1
	skillIdNew = 3

	testfunction = (i) => {
		const val = i
		console.log(val)
	}

	state = {
		showMenu: false
	}

	showMenu = (event) => {
		event.preventDefault()
		this.setState({ showMenu: true })
	}

	showPredefinedSkills = () => {
		return (<select className= "style-drop-down-menu">
		{tutorsSkillSet.map(skill => <option key={skill.id} value={skill.id} className= "style-of-single-list">{skill.name}</option>

	)}</select>)
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
</div>











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
