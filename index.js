// FORK this starter file and save it to your own Repl.it account.
let astronautStatus="ready";
let fuelLevel="100%";
let astronautCount="7";
let averageAstronautMassKg="80.7";
let crewMassKg=astronautCount*averageAstronautMassKg;
let fuelMassKg="760,000";
let shuttleMassKg="74842.31";
let totalMassKg=crewMassKg + fuelMassKg + shuttleMassKg;
let weatherStatus=	"clear"
let fuelTempCelsius=	"-225";

console.log("--------------------------------");
console.log(" > LC04 - LAUNCH CHECKLIST");
console.log("--------------------------------");
let today = new Date().toISOString().slice(0, 10)
//let time = new time.toISOString().time();
var d = new Date();
console.log("Date : " + today);
var n = d.toLocaleTimeString();
console.log("Time : "+n);
console.log("--------------------------------------------");
console.log("> ASTRONAUT INFO ");
console.log("--------------------------------------------");
console.log("Count "+ astronautCount);

console.log("* status: "+astronautStatus);
console.log("--------------------------------------------");
console.log("> FUEL DATA ");
console.log("--------------------------------------------");
console.log("* Fuel temp celsius: "+fuelTempCelsius)
console.log("* Fuel level: " +fuelLevel);
console.log("--------------------------------------------");
console.log(" > MASS DATA");
console.log("--------------------------------------------");
console.log(" * Crew mass:"+crewMassKg);
console.log(" * Fuel mass:"+fuelMassKg);
console.log(" * Shuttle mass:"+shuttleMassKg);
console.log(" * Total mass:"+totalMassKg);
console.log("--------------------------------------------");
console.log("> FLIGHT PLAN ");
console.log("--------------------------------------------");
console.log("* weather: "+ weatherStatus);

console.log("--------------------------------------------");
console.log("> OVERALL STATUS");
console.log("--------------------------------------------");
console.log("* Clear for takeoff: YES");








// Declare and initialize the 12 variables here:




// Write code to generate the LC04 report here:



// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.