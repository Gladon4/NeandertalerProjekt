const score = document.createElement('p');

function check(){
  let c = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  let q6 = document.quiz.question6.value;

  if (q1 == "Choice2") {c++;}
  if (q2 == "Choice1") {c++;}
  if (q3 == "Choice4") {c++;}
  if (q4 == "Choice2") {c++;}
  if (q5 == "Choice3") {c++;}
  if (q6 == "Choice4") {c++;}

  score.innerText = "Dein Ergebnis: \n" + c + " von 6 richtigen Antworten";
  score.class = "score"
  document.quiz.appendChild(score);
}
