/**
 * Created by tm on 11/13/2014.
 */
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/>/g, "");
    newHTML = newHTML.replace(/</g, "");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));