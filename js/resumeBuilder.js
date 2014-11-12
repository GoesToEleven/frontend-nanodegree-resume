
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
    "skills": "HTML, CSS, JavaScript",
    //"skills": ["HTML", "CSS", "JavaScript"],
    "pictureURL": "images/me.jpg"
};

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


// build header
//var stringToInsert = formattedName + " " + formattedRole;
//document.querySelector("#header").insertAdjacentHTML("afterbegin", stringToInsert);
