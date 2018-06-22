import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'
import { Link } from 'react-router-dom'
import './AddSkillContainer.css';

export class AddSkillContainer extends Component {

	currentUserId = parseInt(this.props.match.params.currentUserId, 10)

	state = {
		searchResults:[]
	}
	matchingScore = (s, t) => {
	  if (!s.length) return t.length;
	  if (!t.length) return s.length;
	  return Math.min(
	    this.matchingScore(s.toLowerCase().substr(1), t) + 1,
	    this.matchingScore(t.toLowerCase().substr(1), s) + 1,
	    this.matchingScore(s.toLowerCase().substr(1), t.toLowerCase().substr(1)) + (s[0] !== t[0] ? 1 : 0)
	  ) + 1;
	}

	getScore = (s, x) => {
	  let dataReturn=[]
	  const data = this.props.skills;
	  for (let i = 0; i < data.length; i++) {
	    let obj = {score: this.matchingScore(s, data[i].name), id: data[i].id, name: data[i].name}
	    dataReturn.push(obj)
	  }
	  return dataReturn.sort(function(a, b){return a.score - b.score}).slice(0,x);
	}

	handleChange = (event) => {
	  event.preventDefault()
	  this.setState({
	    searchResults: event.target.value.length >=3 ? this.getScore(event.target.value,1) : []
	  })
	}

	putSkillInStore = (skill, userid) => {
		console.log("WORKING SORT OF");
	this.props.addSkill(skill, userid)
	}

	showResults = () => {
	return this.state.searchResults
		.map(a => <input type="submit" key={a.id} value={a.id} >Did you mean {a.name}?</input>)
	}

	// 	this.props.addSkill(event.target.value, this.currentUserId)

	//



	render() {

		return (
		<div>
			<div className="home-dash-container">

				<div className = "title-container">
				<h1 className="title"> JOIN </h1>
				</div>

				<div className = "add-skill-container">

					<label >
						<p className ="title2"> Become a Tutor </p>
					</label>

					<input type="text" onChange={this.handleChange()} placeholder="Find a skill"/>

					<form onSubmit={this.putSkillInStore()}>
						{ this.showResults() }
					</form>

				</div>

				<br/>

				<button className = "black-button"><Link to={`/homedash/${this.currentUserId}`}> <p className= "link-text"> GO! </p> </Link> </button>

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

export default connect(mapStateToProps, { addSkill })(AddSkillContainer)
