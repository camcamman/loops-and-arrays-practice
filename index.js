var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (let i = 0; i
//      < officeItems.length; i++) {
//     console.log()
// }
// console.log("apple")
var count = 0
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i]==='computer') {count++}
}
console.log('there are ' + count + ' computers')

//Loop through the following array and log to the console 
//"old enough" if they are 18 or older, and "not old enough"
//if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        Pronoun = "he"
    } else {
        Pronoun = "she"
    }
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is old enough. let "+Pronoun+ " in")
    }else {
    }
}

// var lightSwitch = false

// for (var i = 0; i <= 9; i++) {
//     if (lightSwitch === false) {
//         lightSwitch === true
//     } 
//     if (lightSwitch === true) {
//         lightSwitch === false
//     }
// }
// console.log(lightSwitch)