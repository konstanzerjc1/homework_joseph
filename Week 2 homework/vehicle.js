/*
* You get to give yourself an awesome vehicle
* It is an object
* Be sure to give it the following:
*   - a name that is a string
*   - a distanceToEmpty that is a number of kilometers it can travel
*   - a speed that is a number and represents the number of km/hr your vehicle can travel
*   - a currentLocation
*   - a method that can get the currentLocation or set the currentLocation
*   - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
*/

let vehicle = {
  name: "KITT",
  distanceToEmpty: 1000,
  speed: 100,
  currentLocation: "Los Angeles",
  drive: (city) => {
    vehicle.currentLocation=city;
    console.log("I am in " + vehicle.currentLocation+".");
    return "I am in " + vehicle.currentLocation+".";
  },
  honkHorn: () => {
    console.log("Hello Knight Rider. My name is " + vehicle.name+".");
    return "Hello Knight Rider. My name is " + vehicle.name+".";
  },
  quotes: ["Knight Rider, a shadowy flight into the dangerous world of a man who does not exist.",
          "I am the Knight Automated Roving Robot, KARR if you prefer. I am the prototype of the car of the future!",
          "No, Michael, I cannot. When you're one-of-a-kind, companionship does not compute.",
          "Don't touch Turbo Boost. Something tells me you shouldn't touch Turbo Boost.",
          "It wasn't a fair fight, April. It's like putting Sugar Ray in the ring against a overgrown heavyweight."
        ],
  sayQuote: () => {
    thisQuote=vehicle.quotes[Math.round(Math.random()*5)];
    console.log(thisQuote);
    return thisQuote;
  }
}

vehicle.drive("DC");
vehicle.honkHorn();
vehicle.sayQuote();
