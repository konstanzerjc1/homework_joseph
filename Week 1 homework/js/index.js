// Have fun!
//below generates a random no
drunksyn=["drunk", "afflicted", "casting up his Accounts", "Been at Barbadoes",
"Piss'd in the Brook", "Drunk as a Wheel-Barrow", "Has Stole a Manchet out of the Brewer's Basket",
"He's had a Thump over the Head with Sampson's Jawbone",
"Cagrin'd", "Wamble Crop'd", "Crack'd", "He's been in the Cellar", "Non Compos", "Loaded his Cart",
"He's been too free with the Creature", "He's Chap-fallen",
"pissed", "tight", "in his cups", "going to Jerusalem",
"contending with the Pharoh", "been too free with Sir Richard", "as stiff as a ring bolt",
"halfway to Concord", "drank too much"]

let rdrunk = () =>{
  $('#t').text(drunksyn[Math.round(Math.random()*25)]);
}
$("#hw").on("click", rdrunk);
