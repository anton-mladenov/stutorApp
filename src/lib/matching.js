
const getTutors = (allUsers) => {
	return allUsers.map(user => user)
                  .filter(userinfo => userinfo.skills)
}
const getTutorsWithSkillId = (skillId, allUsers) => {
  return getTutors(allUsers)
          .filter(skilledUser => skilledUser.skills.includes(skillId))
}
const getTutorsWithSkillIdAndNotAccepted = (currentUserId, skillId, allUsers) => {
  return  getTutorsWithSkillId(skillId, allUsers)
          .filter(user => !user.accepted.includes(currentUserId) && !user.rejected.includes(currentUserId)
          )
}

const waitingForAcceptance = (currentUserId, allUsers) => {
  return allUsers.map(user => user)
                .filter(allUsers => allUsers.accepted.includes(currentUserId))
}

const matchLogic = (currentUserId, allUsers) => {
  const currentUserAccepted = allUsers.filter(a => a.id === currentUserId).reduce((acc, val) => val)

  //return currentUserAccepted.accepted.map(a => waitingForAcceptance(currentUserId, allUsers).filter(b => b.id === a))
  return currentUserAccepted.accepted.map(a => waitingForAcceptance(currentUserId, allUsers).filter(b => b.id === a)).map(c => c[0])
}

const getNamesOfTutors = () => {
	return getTutors(allUsers).map(person => person.firstName)
}

const getNameofStudentsToBeAccepted = (currentUserId, allUsers) => {
	return matchLogic(currentUserId, allUsers).map(person => person.firstName )
}




console.log(getTutors(allUsers));
console.log(getTutorsWithSkillId(4, allUsers));
console.log(getTutorsWithSkillIdAndNotAccepted(1, 4, allUsers));
console.log(acceptStudent(9, allUsers));
console.log(matchLogic(9, allUsers));
