
//var awesomeThoughts = "I am Ramon and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

//console.log(funThoughts);

//$("#main").append(funThoughts);

//var name = "Ramon Widmer";
//var formattedName = HTMLheaderName.replace("%data%", name);

//ar role = "Network Engineer";
//var formattedRole = HTMLheaderRole.replace("%data%",role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


//var s = "audacity";
//s = s.slice(4);
//console.log(s);

//var fruits = [];
//fruits.push('banana', 'apple', 'peach', 'prune');
//console.log(Object.keys(fruits));
//console.log(fruits.length);

//var skills = [“awesomeness”, “programming”, “teaching”];

var bio = {
	"name" : "Ramon Widmer",
	"role" : "Network Engineer",
	"contacts" : {
		"mobile": "510-590-6850",
		"email" : "widmer66@yahoo.com"
	},
	"Welcomemessage" : "Hello, this is my welcome message.",
	"skills": [
		"awesmomeness", "programming"
	],
	"bioPic": "images/fry.jpg"
}

// good up to here.

var WorkExp = {
	"Position" : "Senior Network Engineer",
	"Employer" : "AT&T",
	"YearWorked" : 14,
	"WorkCity" : "San Ramon"
}

var Education = {}
Education["school1"] = "UC Davis";
Education["years"] = 4;
Education["City"] = "Davis, California";


$("#main").prepend(bio.name);
//$("#main").prepend(bio.role);
//$("#main").prepend(bio.Welcomemessage);
//$("#main").prepend(WorkExp.Position);
//$("#main").append(Education.school1);
$("#main").append(Education["school1"]);
$("#main").prepend(Education.years);
$("#main").append(Education.City);



