import React from 'react'
import './Results.css';
import ResultsButtonAccept from './ResultsButtonAccept'
import ResultsButtonReject from './ResultsButtonReject'
import testProfile from '../usersData/test-profile.jpg'

export default function ResultsUserContainer (props) {
  const skills = props.data.skills
  const stutors = props.data.stutor
  const skillId = 1

  const getSkill = (skillId, skills) => {
    return skills.filter(a => a.id === skillId)[0].name
  }


  return (
    stutors.map(stutor =>
      <div className="results-user-container" key={ stutor.id }>
        <div className="results-user-container-type">
          <p className="results-user-container-type-text">TUTOR</p>
        </div>
        <div className="results-user-container-skill">
          <p className="results-user-container-skill-text" >{ getSkill(skillId, skills) }</p>
        </div>
        <div className="results-user-container-photo">
          <img className="results-user-container-photo-img" src={ testProfile } alt="name"/>
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
          <ResultsButtonReject />
          <ResultsButtonAccept />
        </div>
      </div>
    )
  )
}
