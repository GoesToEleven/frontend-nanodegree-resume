
var name = "Todd McLeod";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedRole);
document.querySelector("#header").insertAdjacentHTML("afterbegin", formattedName);

var bio = {
    "name" : "Todd McLeod",
    "role" : "Web Developer",
    "contactInfo" : "toddmcleod@gmail.com",
    "pictureURL" : "images/me.jpg",
    "welcomeMessage" : "Beautiful design, elegant code",
    "skills" : "HTML, CSS, JavaScript"
};


// build header
//var stringToInsert = formattedName + " " + formattedRole;
//document.querySelector("#header").insertAdjacentHTML("afterbegin", stringToInsert);
