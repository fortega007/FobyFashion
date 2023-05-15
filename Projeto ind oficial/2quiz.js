const question=document.querySelector(".question");
const answer=document.querySelector(".answer");
const spnQtd=document.querySelector(".spnQtd");
const textFinish=document.querySelector(".finish span");
const content=document.querySelector(".content");
const contentFinish=document.querySelector(".finish");
const btnRestart=document.querySelector(".finish button");

import question from "./question.js";

let currentIndex=0;
let questionCorrect=0;

function loadQquestion(){
    spnQtd.innerHTML=`${currentIndex +1}/${question.lengh}`;
    const item=question[currentIndex];
    answer.innerHTML="";
    question.innerHTML=item.question;

       item.answer.forEach((answer)=>{
        const div=document.createElement("div");
       
    div.innerHTML=`
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    
    `;
      answer.appendChild(div);
    });
 document.querySelectorAll(".answer").forEach((item=>{
    item.addEventListener("click",nextQuestion);
 });

}


loadQuestion()
