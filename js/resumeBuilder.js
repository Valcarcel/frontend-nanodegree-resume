// work, projects, bio, edu

var bio = {
	"name" : "Ramon Widmer",
	"role" : "Network Engineer",
	"contacts" : {
		"mobile": "510-590-6850",
		"email" : "widmer66@yahoo.com",
		"github" : "Valcarcel",
		"location": "San Ramon, CA",
	},
	"Welcomemessage" : "Network Engineer, wannabe programmer",
	"skills": [
		"Cisco and Juniper Routing and Switching", "Network capacity management", "PERL programming"
	],
	"bioPic": "images/my-face.jpg"
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
		"location": "San Ramon, CA",
		"title": "Senior Network Design Engineer",
		"dates": "September 2010",
		"Description": "Performed capacity management for the ATT mobility newwork. Troubleshoot network connectivity issues. Wroter router and switch configs for Juniper and Cisco routers and switches. Built engineering design packages for the installation of new network hardware. Used PERL programming to automate troubleshooting, and the development of router command line configurations. Managed POR in order to have forecasted router builds land on month over month budget."
		},
		{
		"employer": "PacBell Wireless",
		"location": "Pleasanton, CA",
		"title": "Datacom Engineer",
		"dates": "September 2003",
		"Description": "Operations, monitoring, IP addree management, etc."
		}
	]
}


// Contninue to fill in Work Experience here.

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



function displayHeader() {
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	//var formattedContacgtGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
	//$("#header").append(formattedContacgtGeneric);
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedHTMLmobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedHTMLemail);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github );
	$("#topContacts, #footerContacts").append(formattedHTMLgithub);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedHTMLlocation);

	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedHTMLbioPic);
	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.Welcomemessage);
	$("#header").append(formattedHTMLwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header:last").append(formattedSkill);
	}
	//var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.Welcomemessage);

}


function displayWork() {
for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].Description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDate);
	$(".work-entry:last").append(formattedDesc);
	//$("#main").append(formattedEmployerTitle);
}
}

displayHeader();
 displayWork();


//function locationizer(work_obj) {
//	var locationArray = [];
//	for (job in work_obj.jobs) {
//		console.log(work_obj.jobs[job].location);
//		var newLocation = work_obj.jobs[job].location;
//		locationArray.push(newLocation);
//	}
//	return locationArray;
//}


//console.log(locationizer(work));


//$(document).click(function(loc) {
//	  	var x = loc.pageX;
//		var y = loc.pageY;
//	logClicks(x,y);
//});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " "+name[1];

}


$("#main").append(internationalizeButton);

//console.log(projects.projects[0].title);
projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display();

$("#mapDiv").append(googleMap);