/*
* VANILLA JS
*/
var stringToAdd = "";
stringToAdd += "<p>Todd McLeod</p>";

var email = "toddmcleod@udacity.com";
var newEmail = email.replace("udacity", "gmail");
console.log("email: " + email);
console.log("new email: " + newEmail);
stringToAdd += ("<p>email: " + email + "</p>");
stringToAdd += ("<p>new email: " + newEmail + "</p>");

var awesomeThoughts = "My name is Todd and I am awesome!";
var funThoughts = awesomeThoughts.replace("awesome!", "FUN");
stringToAdd += ("<p>" + awesomeThoughts + "</p>");

document.querySelector("#main").innerHTML = stringToAdd;

/*
 * JQUERY
 */

//$("#main").append("Todd");