var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "(Cameron's minor in college was astronomy)",
    "property-2": "The 4 Galilean (largest) moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.


// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
console.log(weirdObject.property);
console.log(weirdObject["property"]);
var dotNotation0 = true;
var bracketNotation0 = true;

console.log(weirdObject.property1);
console.log(weirdObject["property1"]);
// property1
var dotNotation1 = true;
var bracketNotation1 = true;

console.log(weirdObject.property-2);
console.log(weirdObject["property-2"]);
// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

//console.log(weirdObject.property 3);
console.log(weirdObject["property 3"]);
// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

console.log(weirdObject.property$);
console.log(weirdObject["property$"]);
// property$
var dotNotation4 = true;
var bracketNotation4 = true;

//console.log(weirdObject. property);
console.log(weirdObject[" property"]);
// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

//console.log(weirdObject.property());
console.log(weirdObject["property()"]);
// property()
var dotNotation6 = false;
var bracketNotation6 = true;

//console.log(weirdObject.property[]);
console.log(weirdObject["property[]"]);
// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

//console.log(weirdObject.8property);
console.log(weirdObject["8property"]);
// 8property
var dotNotation8 = false;
var bracketNotation8 = true;
