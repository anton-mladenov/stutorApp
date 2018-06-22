export const getTutors = (allUsers) => {
  return allUsers.map(user => user)
    .filter(userinfo => userinfo.skills)
}
export const getTutorsWithSkillId = (skillId, allUsers) => {
  return getTutors(allUsers)
    .filter(skilledUser => skilledUser.skills.includes(skillId))
}
export const getTutorsWithSkillIdAndNotAccepted = (currentUserId, skillId, allUsers) => {
  const accepted = allUsers.filter(user => user.id === currentUserId)[0].accepted
  const rejected = allUsers.filter(user => user.id === currentUserId)[0].rejected
  console.log(accepted)
  console.log(rejected)
  console.log(rejected.concat(accepted))
  return  getTutorsWithSkillId(skillId, allUsers).filter(a => {
    const result = !rejected.concat(accepted).includes(a.id)
    console.log(result)
    return result
  })
}

export const waitingForAcceptance = (currentUserId, allUsers) => {
  const currentUserAccepted = allUsers.filter(a => a.id === currentUserId).reduce((acc, val) => val)
  const alreadyAccepted= allUsers.filter(user => currentUserAccepted.accepted.includes(user.id)).map(user => user.id)
  const alreadyRejected= allUsers.filter(user => currentUserAccepted.rejected.includes(user.id)).map(user => user.id)
  //console.log(alreadyAccepted,'alreadyAccepted')
  return allUsers.filter(allUsers =>
    allUsers.accepted.includes(currentUserId))
    .filter(user => !alreadyAccepted.includes(user.id)
    && !alreadyRejected.includes(user.id))
}


//export const waitingForAcceptance = (currentUserId, allUsers) => {
//console.log(allUsers)
//  return allUsers.filter(allUsers => allUsers.accepted.includes(currentUserId))
//}

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
