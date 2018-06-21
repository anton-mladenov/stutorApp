import React from 'react'
import './Results.css';

export default function ResultsButtonAccept (props) {
  const currentUserId = props.currentUserId
  const userId = props.userId
  return (
    <div>
    <p>{ currentUserId }</p>
    <p>{ userId }</p>
    <input
      type="submit"
      value=""
      className="results-button results-button-ok"
      onClick= { props.addAccepted(currentUserId , userId) }
    />
    </div>
  )
}
