// DUMMY QUIZ DATA
var question_data = [

  {question : "What is the best colour in the universe?",
  answers : ["Blue", "Green", "Red", "Yellow", "Orange", "Purple"]},

  {question:"What is the largest country in the world?",
  answers : ["Australia", "China", "India", "Russia"]},

];

var question_answers = [2,3,3,3,3];

//RUNS ON PAGE LOAD
$( document ).ready(function() {
  buildQuizQuestion(question_data);

  let API_endpoint = 'https://jsonplaceholder.typicode.com/todos/1'

  var myjson;
  $.getJSON(API_endpoint, function(json){
    myjson = json;
    console.log(myjson.id);
  });

});

//ARRAY SHUFFLE FUNCTION
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//BUILD QUIZ QUESTIONS HTML
function buildQuizQuestion(question_data) {

  for(x = 0; x < question_data.length; x++) {

    var answers = [];

    //OPEN FORM
    $('#quiz_form').append('<div id="quiz_question_' + x+ '" class="row quiz-question"></div>');

    //CREATE LEFT AND RIGHT PANEL
    $('#quiz_question_' + x).append('<div id="quiz_left_' + x + '" class="col-md-6 left-block"></div>');
    $('#quiz_question_' + x).append('<div id="quiz_right_'+x+'" class="col-md-6 right-block"></div>');


    //POPULATE LEFT PANEL
    $('#quiz_left_' + x).append('<div class="quiz-title"><h3>QUIZ QUESTION TITLE</h3></div>');
    $('#quiz_left_' + x).append('<div class="quiz-content"><p>' + question_data[x].question + '</p></div>');

    //POPULATE RIGHT PANEL
    for(i = 0; i < question_data[x].answers.length; i++) {

      answers.push('<div><input id="' + i + '" type="radio" name="quiz_answer_' + x + '" value="' + i +'"><label for="' + i +'">' + question_data[x].answers[i] + '</label></div>');
    }
    shuffle(answers);
    for(i = 0; i < answers.length; i++) {
      $('#quiz_right_' + x).append(answers[i]);
    }

    //ADD FEEDBACK SECTION
    $('#quiz_right_' + x).append('<p id="quiz_question_feedback_' + x + '"></p>');


  }

  //ADD SUBMIT BUTTON
  $('#quiz_form').append('<div class="quiz-submit"><input type="submit" value="Submit" onClick="checkQuizAnswer()"></div>');

}


//CHECK QUIZ QUESTION ANSWERS
function checkQuizAnswer() {

  var answered = true;

  //CHECK IF ALL QUESTIONS HAVE BEEN ANSWED AND DISPLAY FEEDBACK
  for(x = 0; x < $('div[id^="quiz_question_"]').length; x++) {

    if(typeof $('input[name="quiz_answer_' + x + '"]:checked').val() === "undefined") {
      answered = false;
      $('#quiz_question_feedback_' + x).text("*Please select an answer!");
      $('#quiz_question_feedback_' + x).css("color", "#ff0000");
    } else {
      $('#quiz_question_feedback_' + x).text("");
      $('#quiz_question_feedback_' + x).css("color", "#000000");
    }

  }

  //IF ALL QUESTIONS ARE ANSWERED SEND THE MARKS TO BE GRADED
  if (answered) {

    for(x = 0; x < $('div[id^="quiz_question_"]').length; x++) {

      if($('input[name="quiz_answer_' + x + '"]:checked').val() == question_answers[x]){
        $('#quiz_question_feedback_' + x).text("CORRECT!");
      } else {
        $('#quiz_question_feedback_' + x).text("INCORRECT!");
      }

    }

  }


}
