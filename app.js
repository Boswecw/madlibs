function createParagraph(){
var word1 = document.getElementById('word1').value;
var word2 = document.getElementById('word2').value;
var word3 = document.getElementById('word3').value;
var word4 = document.getElementById('word4').value;
var word5 = document.getElementById('word5').value;
var word6 = document.getElementById('word6').value;
var word7 = document.getElementById('word7').value;
var word8 = document.getElementById('word8').value;
var word9 = document.getElementById('word9').value;
var word10 = document.getElementById('word10').value;
var word11 = document.getElementById('word11').value;
var word12 = document.getElementById('word12').value;
var word13 = document.getElementById('word13').value;
var word14 = document.getElementById('word14').value;
var word15 = document.getElementById('word15').value;
var word16 = document.getElementById('word16').value;
var word17 = document.getElementById('word17').value;
var word18 = document.getElementById('word18').value;

var paragraph = `A vacation is when you take a trip to some ${word1} place with your ${word2} family. Usually you go to some place that is near a/an ${word3} or up on a/an ${word4}. A good vacation place is one where you can ride ${word1} or play ${word5} or go hunting for ${word6}. I like to spend my time ${word7} or ${word8}. When parents go on a vacation, they spend their time eating three ${word9} a day, and fathers play golf, and mothers sit around ${word10}. Last summer, my little brother fell in a/an ${word11} and got poison${word12} all over his${word13}. My family is going to go to (the) ${word14}, and I will practice ${word15}. Parents need vacations more than kids because parents are always very ${word16} and because they have to work${word17} hours every day all year making enough ${word18} to pay for the vacation.`

        document.getElementById('answer').innerHTML = paragraph;
}

