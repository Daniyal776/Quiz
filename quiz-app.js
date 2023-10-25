const quizQuestions = [
    {
        question: "Which of these data type cannot be type <br> parameterized ?",
        opt1: "Array",
        opt2: "list",
        opt3: "Map",
        opt4: "All of these",
        correct: "opt1",
    },
    {
        question: "Which of the following is not OOP concept in java ?",
        opt1: "Inheritance",
        opt2: "palymorphism",
        opt3: "Encapsulation",
        opt4: "All of above",
        correct: "opt4",
    },
    {
        question: "What does HTML stand for?",
        opt1: "Hypertext Markup Language",
        opt2: "Hypertext Markdown Language",
        opt3: "Hyperloop Machine Language",
        opt4: "Helicopters Terminals Motorboats Lamborginis",
        correct: "opt1",
    },
    {
        question: "What year was JavaScript launched?",
        opt1: "1996",
        opt2: "1995",
        opt3: "1994",
        opt4: "none of the above",
        correct: "opt2",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        opt1: "< js >",
        opt2: " < JavaScript > ",
        opt3: "Script",
        opt4: "Scripting",
        correct: "opt3",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        opt1: "The <body> Section",
        opt2: "The <head> Section",
        opt3: "Both the <head> Section and the  <body> Section are correct ?  ",
        
        correct: "opt2",
    },
    {
        question: "How do you create a function in JavaScript? ",
        opt1: "function myfunction()",
        opt2: "function:myfunction()",
        opt3: "function = myfunction()",
        
        correct: "opt1",
    },
    {
        question: "How does a WHILE loop start? ",
        opt1: "While i= 1 to 10",
        opt2: "While (i <= 10; i++ )",
        opt3: "While (1 <= 10 )",
        opt4: "While  (i  => 10; i++ )",
        
        correct: "opt3",
    },
    {
        question: "How can you add a comment in a JavaScript? ",
        opt1: " //This ia comment",
        opt2: "<!--This ia comment-->",
        opt3: "*/ This ia comment*/",
        opt4: "This ia comment ",
        
        correct: "opt1",
    },
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let option_5_element = document.getElementById("option5");
let option_6_element = document.getElementById("option6");
let option_7_element = document.getElementById("option7");
let option_8_element = document.getElementById("option8");
let option_9_element = document.getElementById("option9");
let option_10_element = document.getElementById("option10");
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{

        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;        
        }
        current_question_number ++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./result-Page.html";
    
        }else{
            //show next question
            showQuestion();
        }
    }
});

showQuestion();








