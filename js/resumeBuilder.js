
var name = "Todd McLeod";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

// build header
var stringToInsert = formattedName + " " + formattedRole;

document.querySelector("#header").innerHTML = stringToInsert;
