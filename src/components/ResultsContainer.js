import React, { PureComponent } from 'react'
import ResultsUserContainer from './ResultsUserContainer'
// import { getTutorsWithSkillIdAndNotAccepted } from '../lib/matching'
import './Results.css';

const allUsers =
[
  {
		id: 1,
		firstName: "Hilargi",
		lastName: "Alecto",
		email: "hilargi@gmail.com",
		shortBio: "I am a 47-year-old associate at a law firm who enjoys listening to music, jigsaw puzzles and baking.",
		rejected: [4],
		accepted: [7,9]
	},
	{
		id: 2,
		firstName: "Keara",
		lastName: "Naseem",
		email: "keara@gmail.com",
		shortBio: "I am a 61-year-old CEO who enjoys donating blood, jigsaw puzzles and adult colouring books.",
		rejected: [7, 4],
		accepted: [9]
	},
	{
		id: 3,
		firstName: "Svetlana",
		lastName: "Vulcan",
		email: "svetlana@gmail.com",
		shortBio: "I am brave and brave, but can also be very greedy and a bit standoffish.",
		rejected: [9, 7],
		accepted: [4]
	},
	{
		id: 4,
		firstName: "Tameka",
		lastName: "Ormond",
		email: "tameka@gmail.com",
		shortBio: "I am loveable and exciting, but can also be very cowardly and a bit unkind.",
		skills: [1],
		rejected: [],
		accepted: []
	},
	{
		id: 5,
		firstName: "Ayako",
		lastName: "Firuze",
		email: "ayako@gmail.com",
		shortBio: "A law student with an unfortunate habit of bumping off the people around her.",
    skills: [3],
		rejected: [7],
		accepted: [9, 4]
	},
	{
		id: 6,
		firstName: "Eleazar",
		lastName: "Felix",
		email: "eleazar@gmail.com",
		shortBio: "A senior politician with an unfortunate habit of bumping off the people around her. I am also inspiring and smart.",
		rejected: [9],
		accepted: [4]
	},
	{
		id: 7,
		firstName: "Sheela",
		lastName: "Stefanija",
		email: "sheela@gmail.com",
		shortBio: "She enjoys extreme ironing, watching sport and duck herding.",
		skills: [4],
		rejected: [],
		accepted: [4, 6]
	},
	{
		id: 8,
		firstName: "Nilima",
		lastName: "Fedelmid",
		email: "nilima@gmail.com",
		shortBio: "A personal trainer who enjoys watching television, working on cars and traveling.",
		rejected: [9],
		accepted: [7]
	},
	{
		id: 9,
		firstName: "Methodius",
		lastName: "Balendin",
		email: "methodius@gmail.com",
		shortBio: "A chef at own restaurant who enjoys extreme ironing, eating out and adult colouring books",
		skills: [4],
		rejected: [],
		accepted: [1, 10]
	},
	{
		id: 10,
		firstName: "Kumar",
		lastName: "Lena",
		email: "kumar@gmail.com",

    shortBio: "A government politician whose life is dominated by solving the murder of his brother, Leigh Lena.",
    rejected: [4],
    accepted: [7, 9]
  },
]

export default class ResultsContainer extends PureComponent {
  resultList = () => {
    // console.log(getTutorsWithSkillIdAndNotAccepted(1, 2, allUsers))
  }
  render () {
    return (
      <div className="results-container">
        <ResultsUserContainer />
      </div>
    )
  }
}
