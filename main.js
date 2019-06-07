function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if(question1=="javascript"){
    correct++;
}
if(question2=="Beginner"){
    correct++;
}
if(question3=="yes"){
    correct++;
}

var messages=["Great Job","Good","Need a Knowledge"];
var pictures=["imges/g.gif","imges/giphy.gif","imges/tenor.gif"]
var range;
if(correct>2){
    range = 1;
}
if(1<correct && correct<3){
    range = 0;
}
if(correct<2&&correct>0){
    range = 2;
}

document.getElementById("aftersub").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("howcorrect").innerHTML="You got "+correct+" correct";
document.getElementById("picture").src = pictures[range];
}