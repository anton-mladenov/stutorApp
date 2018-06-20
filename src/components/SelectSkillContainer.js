import React, { Component } from 'react'
import background from '../lib/background.png';
import { Link } from 'react-router-dom'
import './SelectSkillContainer.css';
import {tutorsSkillSet} from "../usersData/usersDummyData"

export default class SelectSkill extends Component {



	state = {
		showMenu: false
	}

	showMenu = (event) => {
		event.preventDefault()
		this.setState({ showMenu: true })
	}

	showPredefinedSkills = () => {
		return tutorsSkillSet.map(skill => <option key={skill.id} className= "style-of-single-list"> {skill.name} </option>)
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
      <select className= "style-drop-down-menu">
     {this.showPredefinedSkills()}
      </select>
      <br/>
      <br/>

      {
				this.state.showMenu ?
				<div className="searchOptionsMenu">
					{this.showPredefinedSkills()}
				</div>
				: null
			}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <button className='black-button'> <Link to={`/results`} className="link-text">GO!</Link>< /button>
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
