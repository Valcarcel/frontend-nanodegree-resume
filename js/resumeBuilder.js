// work, projects, bio, edu

var bio = {
	"name" : "Ramon Widmer",
	"role" : "Network Engineer",
	"contacts" : {
		"mobile": "510-590-6850",
		"email" : "widmer66@yahoo.com"
	},
	"Welcomemessage" : "Hello, this is my welcome message.",
	"skills": [
		"Network Enineering", "Capacity Planning", "PERL"
	],
	"bioPic": "images/fry.jpg"
}


 var Education = {
	"schools": [
		{
			"name": "UC Davis",
			"city": "Davis, California",
			"degree": "BS",
			"major": "biological sciences"
		},
		{
			"name": "San Joaquin Delta College",
			"city": "Stockton, California",
			"degree": "AA"
		}
	],
	"onlineCourses" : [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/progress#!/c-ud304-nd"
		}
	]
}



var work = {
	"jobs": [	// jobs array in the work object
		{
		"employer": "AT&T",
		"title": "Senior Network Design Engineer",
		"dates": "September 2010",
		"Description": "Performed capacity management for the ATT mobility newwork. Troubleshoot network connectivity issues. Wroter router and switch configs for Juniper and Cisco routers and switches. Built engineering design packages for the installation of new network hardware. Used PERL programming to automate troubleshooting, and the development of router command line configurations. Managed POR in order to have forecasted router builds land on month over month budget."
		},
		{
		"employer": "PacBell Wireless",
		"title": "Datacom Engineer",
		"dates": "September 2003",
		"Description": "Operations, monitoring, IP addree management, etc."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample project 1",
			"dates": "2014",
			"description": "Website that automated network troubleshooting."
		}
	]
}

//$("#main").prepend(bio.name);
//$("#main").prepend(bio.role);
//$("#main").prepend(bio.Welcomemessage);
//$("#main").prepend(WorkExp.Position);
//$("#main").append(Education.school1);
//$("#main").append(Education["school1"]);
//$("#main").prepend(Education.years);
//$("#main").append(Education.City);

// Can I acces the work object?




for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	//console.log(formattedEmployer);

	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	console.log(formattedEmployerTitle);
	//$("#workExperience").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedEmployerTitle);
	//$("#main").append(formattedEmployerTitle);
}

