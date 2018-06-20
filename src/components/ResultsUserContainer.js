import React from 'react'
import './Results.css';
import ResultsButtonAccept from './ResultsButtonAccept'
import ResultsButtonReject from './ResultsButtonReject'
import testProfile from '../usersData/test-profile.jpg'

export default function ResultsUserContainer (props) {
  return (
    <div className="results-user-container">
      <div className="results-user-container-type">
        <p className="results-user-container-type-text">TUTOR</p>
      </div>
      <div className="results-user-container-skill">
        <p className="results-user-container-skill-text">Javascript</p>
      </div>
      <div className="results-user-container-photo">
        <img className="results-user-container-photo-img" src={ testProfile } alt="name"/>
      </div>
      <div className="results-user-container-name">
        <p className="results-user-container-name-text">Firstname</p>
      </div>
      <div className="results-user-container-location">
        <p className="results-user-container-location-text">City, Distance</p>
      </div>
      <div className="results-user-container-bio">
        <p className="results-user-container-bio-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      </div>
      <div className="results-buttons-container">
        <ResultsButtonReject />
        <ResultsButtonAccept />
      </div>
    </div>
  )
}
