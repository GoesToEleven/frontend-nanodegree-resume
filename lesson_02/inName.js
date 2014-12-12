function inName(fullName) {
    var splitName = fullName.trim().split(" ");
    return splitName[0].slice(0,1).toUpperCase() +
        splitName[0].slice(1).toLowerCase() +
        " " + splitName[1].toUpperCase();
}

console.log(inName("Todd McLeod"));