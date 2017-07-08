var masterArr = [
//GaryV
[
"Whether you’re 9 or 90, stop trying to fix the things you’re bad at, and focus on the things you’re good at", 
"Gary Vaynerchuk", 
"photos/garyV.jpg"
],
//Dale Carnegie
[
"First ask yourself: What is the worst that can happen? Then prepare to accept it. Then proceed to improve on the worst", 
"Dale Carnegie" , 
"photos/daleC.jpg"
],
//Tim Ferriss
[
"What we fear doing most is usually what we most need to do", 
"Tim Ferriss", 
"photos/timF.jpg"
], 
//Richard Brandson
[
"Complexity is your enemy. Any fool can make something complicated. It is hard to keep things simple", 
"Richard Branson", 
"photos/richardB.jpg"
], 
//2D From the Gorillaz
[
"It'll be alright in the end. And if it's not alright, it's not the end", 
"2D (Gorillaz)", 
"photos/2D.png" 
], 
//Jay-Z
[
"Your job is to inspire people from your neighborhood to get out",
"Jay-Z",
"photos/jayZ.jpg"
], 
//Seneca
["The best ideas are common property", 
"Seneca", 
"photos/seneca.jpg"
], 
//Gandhi
[
"Be the change that you wish to see in the world", 
"Gandhi", 
"photos/gandi.jpg"
]
];

//First Random Quote
random();

//Random Array Index
var random8;

//Storage of the Random Array Index
var storeRandom;

//Random function to be run upon button click

function random() {
random8= Math.floor((Math.random() * 7) );
storeRandom = random8;

//Gets quote from master array positon 0

var quoteArr = masterArr[random8][0];
document.getElementById("quote").innerHTML = quoteArr;

//Gets quote from master array positon 1

var authorArr = masterArr[random8][1];
document.getElementById("author").innerHTML = authorArr;

//Background image generator still in progress

var img1 = 'url(\"';
var img2 = masterArr[random8][2];
var img3 = '\")';
var imgFinal = img1.concat(img2 + img3);

document.getElementById("bgImg").style.backgroundImage = imgFinal;
  }
  
  
//Tweet Quote
  function tweet() {
       random8= Math.floor((Math.random() * 7) );
       var tweetStart = "http://twitter.com/intent/tweet?text=";
       var author = masterArr[storeRandom][0].split(' ').join('+');
       var tweetVar = masterArr[storeRandom][1].split(' ').join('+');
       var tweet = tweetStart.concat(author + "  -" + tweetVar );
       window.location.href = tweet;
  }