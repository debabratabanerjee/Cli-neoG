var readline= require('readline-sync')

var scoreCard = 0;
var consent =readline.question("Do you wana know me better by playing a quiz\nType yes or no ");
if(consent==="yes"){
console.log("Hi lets see HOW WELL DO YOU KNOW ME\n");
}
else{
  console.log("Try na once please, it would be good");
  
} 
var knowMe =readline.question("What is your name ");
console.log("Hi,"+knowMe+" lets see HOW WELL DO YOU KNOW ME"); 

//funtion play game

function play(question,answer,review){
  var userAnswer = readline.question(question)

  if(userAnswer===answer){
    console.log("Yess, that is absolutly right");
    scoreCard = scoreCard +1

  }
  else{
    console.log("Ohoo that's wrong");
  }
  console.log("Cureent Score-------",scoreCard)
  console.log(review)
}

var questions =[{
  question :"What I like the most to eat \n puri or chicken ",
  answer : "puri",
  review: "I jst love luchi or puri, the way it makes any dish better."
},
{
  question :"I am from West Bengal or Delhi",
  answer : "west bengal",
  review: "Born and brought-up in west bengal",
},
{
  question :"Is my age is 25. yes or no",
  answer : "no",
  review: "My is less than that",
}];

for(var i=0;i<questions.length;i++){
  var current = questions[i];
  play(current.question,current.answer,current.review)
}

if(scoreCard>0){
console.log("Congratulations!!! you know me good as you given "+ scoreCard+" correct answers out of 3")
}
else
console.log("You could try once more if you want to as you have not given any right answers")

