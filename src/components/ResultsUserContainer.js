import React from 'react'
import './Results.css';
import { getSkill, isTutor } from '../lib/matching.js'
export default function ResultsUserContainer (props) {

  const skills = props.data.skills
  const selectedUsers = props.selectedUsers
  const skillId = props.skillId

  const handleClick = (param1, param2) => (e) => {
    document.getElementById("main-results-user-container").classList.add("animated-yes")
    setTimeout(() => props.addAccepted(param1, param2), 1000);

  }
  const handleClick1 = (param1, param2) => (e) => {
    document.getElementById("main-results-user-container").classList.add("animated-no")
    setTimeout(() => props.addRejected(param1, param2), 1000);
  }
  return (

    selectedUsers.map(stutor =>
      <div id="main-results-user-container"className="results-user-container" key={ stutor.id }>

        <div className="results-user-container-type">
          <p className="results-user-container-type-text">{ isTutor(stutor.id, selectedUsers) }</p>
        </div>

        <div className="results-user-container-skill">
          <p className="results-user-container-skill-text" >{ getSkill(skillId, skills) }</p>
        </div>

        <div className="results-user-container-photo">
          <img className="results-user-container-photo-img" src={ stutor.profilepic } alt="name"/>
        </div>

        <div className="results-user-container-name">
          <p className="results-user-container-name-text">{ stutor.firstName }</p>
        </div>

        <div className="results-user-container-location">
          <p className="results-user-container-location-text">City, Distance</p>
        </div>

        <div className="results-user-container-bio">
          <p className="results-user-container-bio-text">{ stutor.shortBio }</p>
        </div>

        <div className="results-buttons-container">
          <button className="results-button results-button-no" onClick={ handleClick1(props.currentUserId, stutor.id) }/>
          <button className="results-button results-button-ok" onClick={ handleClick(props.currentUserId, stutor.id) }/>
        </div>
      </div>
    )
  )
}
