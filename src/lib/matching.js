
// - user A is a students
// - user A has a property "likes" which holds one/few/many an array of strings, ...
// 	... where each string represents the "id" of any user B
// - an "id" of any user B is being added to the user A''s array of "likes" whenever user A "swipes LIKE" a particular user B

// - user B is a tutor
// - user B has a property "requests" which holds one/few/many requests for matching from any user A

// - the function takes two arguments - user A and user B;
// - the function checks whether user A has a particular user B in his/her "likes" array ...
// 	... && whether user B has the same particular user A in his/her "requests array"

// - if these two conditions do NOT match, the function returns something?/the current (Redux) state?/nothing? ...
// - if these two conditions DO match, the function returns a match which will be most likely another function ...
// 	...which then sends a notification/email to the same two users who have been matched

// if a match between any user A and user B already exist, the function shouldn't be able to match them again as well as ...
// ... each of them should be excluded from the array of the other

var userAAALikes = ['spray', 'limit', 'dog', '', 'destruction', 'present'];
var userBBBRequests = ['cat', 'dog', 'bat'];

// let isMatched = (a, b) => {
// 	// let abc = a.includes("spray")
// 	let abc = a.filter(element => b.includes(element))
// 	console.log("does abc include X? =>  " + abc)
// }

let isMatched2 = (a, b) => {
	// let abc = a.includes("spray")
	let abc = b.filter(element => a.includes(element))
	console.log("does abc include X? =>  " + abc)
	if (abc) {

	} else if {

	}
};

// isMatched(userAAALikes, userBBBRequests);
isMatched2(userAAALikes, userBBBRequests);
