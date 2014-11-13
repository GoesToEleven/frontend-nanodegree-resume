var bio = {
    "name": "Todd McLeod",
    "role": "Web Developer",
    "contacts": {
        "mobile": "559-744-3647",
        "email": "toddmcleod@gmail.com",
        "twitter": "@Todd_McLeod",
        "github": "GoesToEleven",
        "location": "California"
    },
    "welcomeMessage": "Beautiful design, elegant code",
    //"skills": "HTML, CSS, JavaScript",
    "skills": ["HTML", "CSS", "JavaScript"],
    "pictureURL": "images/me.jpg"
};

var education = {
    "schools": [
        {
            "name": "CSU Fresno",
            "dates": "1996 - 1998",
            "location": "Fresno, CA",
            "degree": "MBA",
            "major": ["Business"],
            "URL": "http://www.fresnostate.edu/craig/"
        },
        {
            "name": "UCSC",
            "dates": "1992 - 1993",
            "location": "Santa Cruz, CA",
            "degree": "Bachelor of Arts",
            "major": ["Economics"],
            "URL": "http://www.fresnostate.edu/craig/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "10/29/14",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": "5/28/14",
            "url": "https://www.udacity.com/course/ud036"
        },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "7/10/14",
            "url": "https://www.udacity.com/course/cs101"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "11/13/14",
            "url": "https://www.udacity.com/course/ud775"
        }
    ]
};

var work = {
    "jobs": [
        {
            "title": "Tenured Faculty",
            "employer": "Fresno City College",
            "dates": "2000 - Present",
            "city": "Fresno, CA",
            "description": "My education includes a Bachelor's degree in Economics from UC Santa Cruz and an MBA from CSU Fresno. " +
            "My academic honors include: UCLA Alumni Scholar, UCSC Graduating Honors, CSUF Phi Kappa Phi, CSUF Beta Gamma Sigma, " +
            "CSUF Dean's List all semesters, CSUF Graduate School of Business Dean's Medalist, CSUF Graduate School of Business Summa " +
            "Cum Laude, California Business Industry Grant Outstanding Teacher, CITD Grant Recipient (two times), CIBER Grant " +
            "Recipient, Microsoft Certified Master Instructor.I am tenured faculty in the Computer Information Technology department " +
            "at Fresno City College where I have accomplished the following: engaged and educated students; served as department " +
            "chair; developed curriculum; maintained curriculum; streamlined certificates and degrees; scheduled classes; " +
            "participated in the writing of grants; participated in shared governance; maintained professional proficiency; " +
            "presented at conferences; participated in faculty development opportunities including University of Colorado's " +
            "China Faculty Development Program; developed innovative approaches to teaching; studied student success factors and " +
            "implemented changes; served as a catalyst and an innovator in the initiation, implementation, and guidance of online " +
            "learning; participated in the development of the Online Teachers Training Program; served as an instructor in the " +
            "Online Teacher's Training Program; taught a variety of courses including: Computer Concepts, Computer Literacy, " +
            "An Introduction to Online Learning, Microsoft Office, Data-Driven Websites, California Real Estate, Online Teacher " +
            "Training in Multimedia, Online Teacher Training in Intellectual Property, Applied Accounting, Accelerated QuickBooks, " +
            "Working Relations, Business Communications, Real Estate Market Analysis, and New Venture Management; served as " +
            "the co-developer of the Real Estate Land Use Institute's annual report; served as a facilitator and presenter at " +
            "the district-wide Great Teacher's Conference; presented at staff development days; presented at Fresno City College's " +
            "Summer Institute; helped initiate bond Measure 'E' which provided $30 million in funding to refurbish Fresno " +
            "City College's 'Old Administration Building' which had been closed for 34 years."
        }
    ]
};

var portfolio = {
  "projects": [
      {
          "title": "Intro to HTML and CSS",
          "dates": "10/29/14",
          "description": "Created webpages using current HTML / CSS practices",
          "imageURLs": [
              "https://cdn.rawgit.com/GoesToEleven/udacity_HTML_CSS/master/portfolio/final_project/mockup_one.html"
          ]
      }
  ]
};

//console.log(work.jobs[0].title);
//console.log(education.schools[0].name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact);
//formattedContact = formattedContact.replace("%data%", bio.contact2);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer) + HTMLworkTitle.replace("%data%", work.jobs[0].title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].city);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name) + HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);

document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedRole);
document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedName);
//document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedContact);
document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedMobile);
document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedEmail);
document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedTwitter);
document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedGithub);
document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedLocation);
document.querySelector("#header ul").insertAdjacentHTML("afterend", formattedPictureURL);
document.querySelector("#header ul").insertAdjacentHTML("afterend", formattedWelcomeMessage);
document.querySelector("#header ul:last-child").insertAdjacentHTML("beforeend", formattedSkills);

document.querySelector("#jobsExperience").insertAdjacentHTML("beforeend", HTMLworkStart);
document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkEmployer);
//document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkTitle);
document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkDates);
document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkLocation);
document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkDescription);

document.querySelector("#education").insertAdjacentHTML("beforeend", HTMLschoolStart);
document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolName);
//document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolDegree);
document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolDates);
document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolLocation);
document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolMajor);
