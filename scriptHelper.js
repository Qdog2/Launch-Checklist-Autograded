// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
    const missionDestination = document.getElementById('missionTarget');
    missionDestination.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `
    
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (isNaN(testInput) === false) {
        return "Is a Number"
    };
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById('pilotStatus')
    const copilotStatus = document.getElementById('copilotStatus')
    const fuelStatus = document.getElementById('fuelStatus')
    const launchStatus = document.getElementById('launchStatus')
    const cargoStatus = document.getElementById('cargoStatus')

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All entries must be filled out. Please try again.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Not a Number. Please try again.")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Is a Number. Please try again.")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`
    }

    if (fuelLevel < 10000 && cargoLevel >= 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch."
        launchStatus.style.color = 'red'
    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch."
        launchStatus.style.color = 'red'
    } else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch."
        launchStatus.style.color = 'red'
    } else if (fuelLevel >= 10000 && cargoLevel <= 10000){
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = 'green'
    }
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
     });
 
     return planetsReturned;
 }

 function pickPlanet(planets) {
    let index = Math.floor(Math.random(planets)*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;