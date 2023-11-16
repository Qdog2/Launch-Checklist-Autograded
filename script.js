// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.getElementById('launchForm')
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]")
        let copilot = document.querySelector("input[name=copilotName]")
        let fuelLevel = document.querySelector("input[name=fuelLevel]")
        let cargoLevel = document.querySelector("input[name=cargoMass]")
        const list = document.getElementById('faultyItems')
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        });
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            const space = pickPlanet(listedPlanets)
            for (let i = 0; i < listedPlanets.length; i++) {
                addDestinationInfo(document, space.name, space.diameter, space.star, space.distance, space.moons, space.imageUrl)
            }
        });
        
    
 });
