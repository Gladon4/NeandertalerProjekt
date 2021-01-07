const score = document.createElement('p');

function check(){
  let c = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  let q6 = document.quiz.question6.value;
  let q7 = document.quiz.question7.value;
  let q8 = document.quiz.question8.value;
  let q9 = document.quiz.question9.value;

  if (q1 == "Choice1") {c++;}
  if (q2 == "Choice1") {c++;}
  if (q3 == "Choice1") {c++;}
  if (q4 == "Choice1") {c++;}
  if (q5 == "Choice1") {c++;}
  if (q6 == "Choice1") {c++;}
  if (q7 == "Choice1") {c++;}
  if (q8 == "Choice1") {c++;}
  if (q9 == "Choice1") {c++;}

  score.innerText = "Dein Ergebnis: " + c + "!";
  score.class = "score"
  document.quiz.appendChild(score);
}
