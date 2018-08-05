/*
References: 
Sophanarith Sok from freeCodeCamp
Fisher-Yates Shuffle Algorithm
  https://bost.ocks.org/mike/shuffle/
*/

let quotes;
let text;
let counter = 0;
let second = 10;
let frameRate = 60;

function preload()
{
  quotes = loadStrings("quotes.txt");
}

function setup()
{
  noCanvas();
  quotes = shuffle(quotes);
  text = select('#quote');
  displayQuote();
  //interval = setInterval(displayQuote, seconds * 1000);
}

function draw()
{
  let shading = sq(1.5*sin(PI * frameCount / frameRate / second));
  text.style('color', 'rgba(255, 255, 255, ' + shading + ')');
  if(frameCount % (frameRate * second) === 0)
    displayQuote();
}

function displayQuote()
{
  if(counter >= quotes.length)
    counter = 0;
  text.html(quotes[counter++]);
}

//The following is an excerpt of the Fisher-Yates algorithm
//Check references for a link to the source
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
