let tutorsSkillSet = [
	"HTML/CSS",
	"Design",
	"React",
	"NodeJS",
	"Marketing"
]

let students = [
	{
		id: "S01"
		name: "Stan",
		shortBio: "likes Eminem",
		likesTutorID: ["T01"]
	},
	{
		id: "S02"
		name: "Danny",
		shortBio: "hates people",
		likesTutorID: ["T01", "T02"]
	},
	{
		id: "S03"
		name: "Cleopatra",
		shortBio: "take baths in milk",
		likesTutorID: ["T03"]
	},
	{
		id: "S04"
		name: "Jane",
		shortBio: "smokes weed",
		likesTutorID: []
	},
	{
		id: "S05"
		name: "Jack Sparrow",
		shortBio: "professional hustler",
		likesTutorID: []
	}
]

let tutors = [
	{
		id: "T01"
		name: "Debbie",
		shortBio: "likes writing short bio's",
		skills: tutorsSkillSet[0, 4],
		requestsFromStudentID: ["S03", "S01"]
	},
	{
		id: "T02"
		name: "Nina",
		shortBio: "has no idea what's going on",
		skills: tutorsSkillSet[1, 3],
		requestsFromStudentID: []
	},
	{
		id: "T03"
		name: "Samuel",
		shortBio: "enjoys playing the bad guy",
		skills: tutorsSkillSet[2],
		requestsFromStudentID: ["S01", "S04", "S05"]
	}
]