var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var breakBetweenNames = finalName.indexOf(" ");
    var firstName = (finalName.slice(0,breakBetweenNames)).toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    var lastName = finalName.slice(breakBetweenNames+1).toUpperCase();
    finalName = firstName + " " + lastName;
    // Don't delete this line!
    return finalName;
}

//function nameChanger(oldName) {
//    var finalName = oldName;
//    var names = oldName.split(" ");
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
//    return finalName;
//}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
