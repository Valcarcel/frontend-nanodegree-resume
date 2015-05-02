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
}

displayHeader();

 var Education = {
	"schools": [
		{
			"name": "UC Davis",
			"location": "Davis, California",
			"degree": "BS",
			"major": "Biological Sciences",
			"dates": "June 1992",
			"url": "http://ucdavis.edu/"
		},
		{
			"name": "San Joaquin Delta College",
			"location": "Stockton, California",
			"degree": "AA",
			"major": "Electron Microscopy",
			"dates" : "June 1989",
			"url": "https://www.deltacollege.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "April 2015",
			"url": "https://www.udacity.com/course/progress#!/c-ud304-nd"
		}
	]
}

function displayEducation() {
	for (school in Education.schools) {

		var formattedSchool = HTMLschoolName.replace("%data%",Education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",Education.schools[school].degree);
		var formattedSchoolAndDegree = formattedSchool + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",Education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",Education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",Education.schools[school].major);
		console.log(formattedSchoolMajor);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolAndDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in Education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",Education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",Education.onlineCourses[course].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",Education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",Education.onlineCourses[course].url);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

displayEducation();

var work = {
	"jobs": [	// jobs array in the work object
		{
		"employer": "AT&T",
		"location": "San Ramon, CA",
		"title": "Senior Network Design Engineer",
		"dates": "September 2010",
		"Description": "Performed capacity management for the ATT mobility newwork. Troubleshoot network connectivity issues. Wrote router and switch configurations for Cisco customer edge routers and switches. Wrote router configurations for Juniper IP/MPLS provider edge routers in support of the GPRS, UMTS, and LTE Wireless networks. Built engineering design packages for the installation of new network hardware. Used PERL programming to automate troubleshooting and the development of router command line configurations. Planned and managed host migrations from EOL routers to new repacement routers. Managed plan of record in order to have forecasted router builds actualize on need by date and on budget."
		},
		{
		"employer": "PacBell Wireless",
		"location": "Pleasanton, CA",
		"title": "Datacom Engineer",
		"dates": "September 2003",
		"Description": "Installed and configured Cisco routers and switches to support the operations and maintenance of the Pacific Bell Wireless Network. Managed IP and port allocations. Responded to on-call pager to resolve network issues. Inerfaces with the transport team during outages. Automated network troubleshooting for the NOC by developing web based tools using PERL CGI."
		},
		{
		"employer": "NewChannel",
		"location": "Redwood City, CA",
		"title": "Software Support",
		"dates": "June 2002",
		"Description": "General desktop support. Used UNIX shell commands to analyze logs generated by NewChannel's proprietary Web-based sales channel services that would help clients track site visitors, qualify the leads and pitch them on sales."
		},
		{
		"employer": "Genentech",
		"location": "South San Francisco, CA",
		"title": "Electron Microscopist",
		"dates": "August 1994",
		"Description": "Biological transmission and scanning electron microscopy. Specimen preparation techniques include autoradiography, and immunofluorescence for light and confocal microscopy."
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