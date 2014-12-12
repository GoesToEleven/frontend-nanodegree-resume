/**********************
 // BIO
 **********************/

var bio = {
    "name": "Todd McLeod",
    "role": "Web Developer",
    "contacts": {
        "mobile": "559-744-3647",
        "email": "toddmcleod@gmail.com",
        "twitter": "@Todd_McLeod",
        "github": "GoesToEleven",
        "location": "Fresno, CA"
    },
    "welcomeMessage": "Beautiful design, elegant code",
    //"skills": "HTML, CSS, JavaScript",
    "skills": ["HTML", "CSS", "JavaScript"],
    "pictureURL": "images/me.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedRole);
    document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedName);
    document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedmobile);
    document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedEmail);
    document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedTwitter);
    document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedGithub);
    document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedLocation);
    document.querySelector("#header").insertAdjacentHTML("beforeend", formattedPictureURL);
    document.querySelector("#header").insertAdjacentHTML("beforeend", formattedWelcomeMessage);

    //iterate through skills array
    if (bio.skills.length > 0) {
        document.querySelector("#header").insertAdjacentHTML("beforeend", HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            document.querySelector("#skills").insertAdjacentHTML("beforeend", formattedSkills);
        }
    }

// FOOTER
    document.querySelector("#footerContacts").insertAdjacentHTML("beforeend", formattedmobile);
    document.querySelector("#footerContacts").insertAdjacentHTML("beforeend", formattedEmail);
    document.querySelector("#footerContacts").insertAdjacentHTML("beforeend", formattedTwitter);
    document.querySelector("#footerContacts").insertAdjacentHTML("beforeend", formattedGithub);

};

/**********************
 // EDUCATION
 **********************/

var education = {
    "schools": [
        {
            "name": "CSU Fresno",
            "dates": "1996 - 1998",
            "location": "Fresno, CA",
            "degree": "MBA",
            "majors": ["Business"],
            "URL": "http://www.fresnostate.edu/craig/"
        },
        {
            "name": "UCSC",
            "dates": "1992 - 1993",
            "location": "Santa Cruz, CA",
            "degree": "Bachelor of Arts",
            "majors": ["Economics"],
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

education.display = function () {
    // regular education
    for (i in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name)
            + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        document.querySelector("#education").insertAdjacentHTML("beforeend", HTMLschoolStart);
        document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolName);
        document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolDates);
        document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolLocation);
        document.querySelector(".education-entry").insertAdjacentHTML("beforeend", formattedSchoolMajors);
    }

    //online education
    document.querySelector("#education").insertAdjacentHTML("beforeend", HTMLonlineClasses);
    document.querySelector("#education").insertAdjacentHTML("beforeend", HTMLOnlineschoolStart);
    for (i in education.onlineCourses) {
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        formattedOnlineSchool = formattedOnlineSchool.replace("%dataURL%", education.onlineCourses[i].url);
        formattedOnlineSchool = formattedOnlineSchool.replace("%dataTitle%", education.onlineCourses[i].title);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        document.querySelector(".online-entry").insertAdjacentHTML("beforeend", formattedOnlineSchool);
        document.querySelector(".online-entry").insertAdjacentHTML("beforeend", formattedOnlineDates);
    }
};

/**********************
 // WORK
 **********************/

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
        },
        {
            "title": "Adjunct Faculty",
            "employer": "California State University, Fresno",
            "dates": "1997 - 2000",
            "city": "Fresno, CA",
            "description": "Taught classes."
        }
    ]
};

work.display = function () {
    for (i in work.jobs) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].city);
        document.querySelector("#workExperience").insertAdjacentHTML("beforeend", HTMLworkStart);
        document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkEmployer);
        document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkDates);
        document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkLocation);
        document.querySelector(".work-entry").insertAdjacentHTML("beforeend", formattedWorkDescription);
        console.log("This ran.")
    }
};

/**********************
 // PROJECTS
 **********************/

var projects = {
    "projects": [
        {
            "title": "Intro to HTML and CSS",
            "dates": "10/29/14",
            "description": "Created webpages using current HTML / CSS practices",
            "images": [
                "https://scontent-b-sjc.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10857937_965453810135442_4697091086322810311_n.jpg?oh=53fb7539989e830b4ffd589784619a0e&oe=5505AF7E"
            ]
        }
    ]
};

projects.display = function () {
    for (i in projects.projects) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectimages = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
        document.querySelector("#projects").insertAdjacentHTML("beforeend", HTMLprojectStart);
        document.querySelector(".project-entry").insertAdjacentHTML("beforeend", formattedProjectTitle);
        document.querySelector(".project-entry").insertAdjacentHTML("beforeend", formattedProjectDates);
        document.querySelector(".project-entry").insertAdjacentHTML("beforeend", formattedProjectDescription);
        document.querySelector(".project-entry").insertAdjacentHTML("beforeend", formattedProjectimages);
    }
};


bio.display();
education.display();
work.display();
projects.display();


/**********************
 // LOCATION GOOGLE MAP
 **********************/

document.querySelector("#mapDiv").insertAdjacentHTML("beforeend", googleMap);
