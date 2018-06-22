import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'
import { Link } from 'react-router-dom'
import './AddSkillContainer.css';

export class AddSkillContainer extends Component {

	currentUserId = parseInt(this.props.match.params.currentUserId, 10)

	state = {
		// showMenu: false,
		// selected: "",
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

	getScore = (s) => {
		let dataReturn=[]
		const data = this.props.data.skills;
		for (let i = 0; i < data.length; i++) {
			let obj = {score: this.matchingScore(s, data[i].name), id: data[i].id, name: data[i].name}
			dataReturn.push(obj)
		}
		return dataReturn.sort(function(a, b){return a.score - b.score}).slice(0,1);
	}

	handleChange = (event) => {
		event.preventDefault()
		this.setState({
			searchResults: event.target.value.length >=3 ? this.getScore(event.target.value) : []
		})
	}

	render() {

		return (
		<div>
			<div className="home-dash-container">

				<div className = "title-container">
				<h1 className="title"> JOIN </h1>
				</div>

				<div>

				<input type="text" className = "inputskill" onChange={this.handleChange} placeholder="   Find a skill"/>
					<ul>
						{/* {this.state.searchResults.map(a => console.log(a.id))}						 */}
						{this.state.searchResults.map(a => <button key={a.id} onClick={()=>this.props.addSkill(a.id, this.currentUserId)}><li key={a.id}>Did you mean {a.name}?</li></button>)}
					</ul>
				</ div>

				<button className = "black-button"><Link to={`/homedash/${this.currentUserId}`}> <p className= "link-text"> GO! </p> </Link> </button>
				{/* { this.props.users.map(user => this.props.skills.map(skill => <h6>{user.skill["name"]}</h6>)) } */}
				<div id="TEST">
				<ul>
				{/* { this.props.users.map(user => user.id === this.currentUserId ? <li key={user.id}>hahah</li> : null ) } */}
				{/* {this.props.users.map(a => a.id === this.currentUserId && a.skills.map(b =>
					this.props.skills.map(c => c === b ? <li>c.name</li> : null)
				))} */}
					{/* {this.props.users.filter(user => user.id === this.currentUserId)[0].skills.map(sid => )} */}
				</ul>
				</div>
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
		users: state.stutor,
		data: state
    }
}

export default connect(mapStateToProps, { addSkill })(AddSkillContainer)
