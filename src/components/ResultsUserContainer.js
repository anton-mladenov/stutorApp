import React from 'react'
import './Results.css';
import ResultsButtonAccept from './ResultsButtonAccept'
import ResultsButtonReject from './ResultsButtonReject'
import testProfile from '../usersData/test-profile.jpg'
import { getSkill, isTutor } from '../lib/matching.js'

export default function ResultsUserContainer (props) {
  const skills = props.data.skills
  const selectedUsers = props.selectedUsers
  const skillId = props.skillId
  const currentUserId = props.currentUserId


  return (

    selectedUsers.map(stutor =>
      <div className="results-user-container" key={ stutor.id }>
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
          <ResultsButtonAccept currentUserId={ currentUserId } addAccepted={ props.addAccepted } userId={ stutor.id }/>
          <ResultsButtonReject currentUserId={ currentUserId }/>
        </div>
      </div>
    )
  )
}
