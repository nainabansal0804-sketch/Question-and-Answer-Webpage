class QAItem {

constructor(question, answer){
this.question = question;
this.answer = answer;
}

render(){

const box = document.createElement("div");
box.classList.add("qa-box");

const questionDiv = document.createElement("div");
questionDiv.classList.add("question");

const questionText = document.createElement("span");
questionText.textContent = this.question;

const icon = document.createElement("span");
icon.textContent = "+";
icon.classList.add("icon");

questionDiv.appendChild(questionText);
questionDiv.appendChild(icon);

const answerDiv = document.createElement("div");
answerDiv.classList.add("answer");
answerDiv.textContent = this.answer;

questionDiv.addEventListener("click", () => {
this.toggle(answerDiv, icon);
});

box.appendChild(questionDiv);
box.appendChild(answerDiv);

return box;
}

toggle(answerDiv, icon){

if(answerDiv.style.display === "block"){
answerDiv.style.display = "none";
icon.textContent = "+";
}
else{
answerDiv.style.display = "block";
icon.textContent = "-";
}
}

}
const qaData = [

new QAItem(
"What is JavaScript?",
"JavaScript is a programming language used to make webpages interactive."
),

new QAItem(
"What is OOP?",
"OOP stands for Object-Oriented Programming. It organizes code using classes and objects."
),

new QAItem(
"What is an Event Listener?",
"An event listener waits for user actions like click, keypress, or mouse movement."
)

];
const container = document.getElementById("faq-container");

qaData.forEach(item => {
container.appendChild(item.render());
});