//initialize faux database
var data = {
	"users": [
		{
			"firstName": "James",
			"lastName": "Abercrombie",
			"uid": 0,
			"userName": "jAbercrombie",
			"email": "jAbercrombie@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Richard",
			"lastName": "Allen",
			"uid": 1,
			"userName": "rAllen",
			"email": "rAllen@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "John",
			"lastName": "Andrew",
			"uid": 2,
			"userName": "jAndrew",
			"email": "jAndrew@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Jane",
			"lastName": "Doe",
			"uid": 4,
			"userName": "jDoe",
			"email": "jDoe@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "John",
			"lastName": "Doe",
			"uid": 3,
			"userName": "jDoe2",
			"email": "jDoe2@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Tracy",
			"lastName": "Emmins",
			"uid": 5,
			"userName": "tEmmins",
			"email": "tEmmins",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Frank",
			"lastName": "Thomas",
			"uid": 6,
			"userName": "fThomas",
			"email": "fThomas@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Paul",
			"lastName": "Garrison",
			"uid": 7,
			"userName": "pGarrison",
			"email": "pGarrison@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"notes": ""
		},{
			"firstName": "Robert",
			"lastName": "Johnson",
			"uid": 8,
			"userName": "rJohnson",
			"email": "rJohnson@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		},{
			"firstName": "Rachel",
			"lastName": "London",
			"uid": 9,
			"userName": "rLondon",
			"email": "rLondon@gmail.com",
			"roles": [{
					"role": "Administrator"
				},{
					"role": "Event Planner"
				}],
			"picture": "img/defaultProfilePicture.png",
			"joinDate": "4/23/13",
			"lastLogin": "4/23/13",
			"bio": ""
		}
	]
};

// GET

exports.users = function (req, res) {
	res.json({
		users: data.users
	});
};

exports.user = function (req, res) {
	var id = req.params.id;
	if (id >= 0 && id < data.users.length){
		res.json({
			user: data.users[id]
		}) 
	} else {
		res.json(false);
	}
};

exports.addUser = function (req, res) {
	data.users.push(req.body);
	res.json(req.body);
}

exports.editUser = function (req, res) {
	var id = req.params.id;
console.log(req.body)
	if(id >= 0 && id < data.users.length){
		data.users[id] = req.body;
		res.json(true)
	} else {
		res.json(false)
	}
}