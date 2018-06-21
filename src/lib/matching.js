export const getTutors = (allUsers) => {
  return allUsers.map(user => user)
    .filter(userinfo => userinfo.skills)
}
export const getTutorsWithSkillId = (skillId, allUsers) => {
  return getTutors(allUsers)
    .filter(skilledUser => skilledUser.skills.includes(skillId))
}
export const getTutorsWithSkillIdAndNotAccepted = (currentUserId, skillId, allUsers) => {
  return  getTutorsWithSkillId(skillId, allUsers)
    .filter(user => !user.accepted.includes(currentUserId) && !user.rejected.includes(currentUserId)
			 )
}
export const waitingForAcceptance = (currentUserId, allUsers) => {
  return allUsers.filter(allUsers => allUsers.accepted.includes(currentUserId))
}
export const matchLogic = (currentUserId, allUsers) => {
  const currentUserAccepted = allUsers.filter(a => a.id === currentUserId).reduce((acc, val) => val)

  //return currentUserAccepted.accepted.map(a => waitingForAcceptance(currentUserId, allUsers).filter(b => b.id === a))
  return currentUserAccepted.accepted.map(a => waitingForAcceptance(currentUserId, allUsers).filter(b => b.id === a)).map(c => c[0])
}
export const getNamesOfTutors = (allUsers) => {
	 return getTutors(allUsers).map(person => person.firstName)
}
export const getNameofStudentsToBeAccepted = (currentUserId, allUsers) => {
	 return matchLogic(currentUserId, allUsers).map(person => person.firstName )
}
export const getSkill = (skillId, skills) => {
	 return skills.filter(a => a.id === skillId)[0].name
}
export const isTutor = (userId, stutors) => {
	 if(stutors.filter(a => a.id === userId)[0].skills.length > 0) {
		 return "TUTOR"
	 } else {
		 return "STUDENT"
	 }
}
