
var bio = {
    "name" : "Todd McLeod",
    "role" : "Web Developer",
    "contact" : "Contact",
    "contact2" : "contact2",
    "mobile" : "559-744-3647",
    "email" : "toddmcleod@gmail.com",
    "twitter" : "https://twitter.com/Todd_McLeod",
    "github" : "https://github.com/GoesToEleven",
    "location" : "Fresno, CA",
    "pictureURL" : "images/me.jpg",
    "welcomeMessage" : "Beautiful design, elegant code",
    "skills" : "HTML, CSS, JavaScript"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact);
//formattedContact = formattedContact.replace("%data%", bio.contact2);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
//var formattedLocation = HTMLlocation.replace("%data%", bio.location);
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
//document.querySelector("#header ul").insertAdjacentHTML("beforeend", formattedLocation);
document.querySelector("#header ul").insertAdjacentHTML("afterend", formattedPictureURL);
document.querySelector("#header ul").insertAdjacentHTML("afterend", formattedWelcomeMessage);
document.querySelector("#header ul:last-child").insertAdjacentHTML("beforeend", formattedSkills);


// build header
//var stringToInsert = formattedName + " " + formattedRole;
//document.querySelector("#header").insertAdjacentHTML("afterbegin", stringToInsert);
