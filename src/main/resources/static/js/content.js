let API_getarticle = 'http://100.26.172.161:8080/article/getarticle?articleId=1'
let API_getsectionquiz = 'http://100.26.172.161:8080/quiz/getsectionquiz?sectionId='

//RUNS ON PAGE LOAD
$( document ).ready(function() {



  $.getJSON(API_getarticle, function(articleData){
    buildSection(articleData.sectionDTOList);
  });

});

//ARRAY SHUFFLE FUNCTION
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function buildSection(sectionDTOList) {

  var quizId = [];

  for(x = 0; x < sectionDTOList.length; x++) {

    id = (sectionDTOList[x]['sectionId']);
    ssn = (sectionDTOList[x]['sectionSequenceNumber']);
    sectionHeader = (sectionDTOList[x]['sectionHeader']);
    sectionText = (sectionDTOList[x]['sectionText']);
    hasQuiz = (sectionDTOList[x]['hasQuiz']);

    if (hasQuiz) {
      quizId.push(id);
    }

    var contentSections = `
      <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + id + `">
        <div class="col-md-6 left-block content-left-` + id + `">
          <h3>` + sectionHeader + `</h3>
          <p>` + sectionText + `</p>
        </div>
          <div class="col-md-6 right-block content-right-` + id + `">
          <img src="../static/images/test_image.png" class="content-image">
        </div>
      </div>
    `;

    $('.content-section').append(contentSections);

  }

  if (quizId.length > 0) {
    buildQuizQuestion(quizId);
  }

}

//BUILD QUIZ QUESTIONS HTML
function buildQuizQuestion(quizId) {

  for(x = 0; x < quizId.length; x++) {
    $.getJSON((API_getsectionquiz + quizId[x]), function(quizData){
      for(i = 0; i < quizData.sectionQuizDTOList.length; i++) {

        quizId = quizData.sectionQuizDTOList[i]['quizId'];
        questionData = quizData.sectionQuizDTOList[i]['quizOptionDTOList'];
        quizQuestion = quizData.sectionQuizDTOList[i]['quizQuestion'];


        var questionSections = `
          <div class="row quiz-question-` + quizId + `">
            <div class="quiz-left-` + quizId + ` col-md-6 left-block">
              <div class="quiz-content"><p>` + quizQuestion + `</p></div>
            </div>
            <div class="quiz-right-` + quizId + ` col-md-6 right-block">
              <p id="quiz_feedback_` + quizId + `"></p>
            </div>
          </div>
        `;

        // <div class="quiz-title"><h3>QUIZ QUESTION TITLE</h3></div>

        $('.quiz-section').append(questionSections);

        buildQuizAnswers(quizId, questionData);

      }
    });
  }

}

function buildQuizAnswers(quizId, questionData) {

  answers = [];

  //POPULATE ANSWERS
  for(x = 0; x < questionData.length; x++) {
    quizOptionId = questionData[x].quizOptionId;
    quizOptionText = questionData[x].quizOptionText;
    answers.push('<div><input id="' + quizOptionId + '" type="radio" name="quiz_answer_' + quizOptionId + '" value="' + quizOptionId +'"><label for="' + x +'">' + quizOptionText + '</label></div>');
  }
  shuffle(answers);
  for(x = 0; x < answers.length; x++) {
    $('.quiz-right-' + quizId).append(answers[x]);
  }

}


//CHECK QUIZ QUESTION ANSWERS
function checkQuizAnswer() {

  var question_answers = [2,3,3,3,3];
  var answered = true;

  //CHECK IF ALL QUESTIONS HAVE BEEN ANSWED AND DISPLAY FEEDBACK
  for(x = 0; x < $('div[id^="quiz_question_"]').length; x++) {

    if(typeof $('input[name="quiz_answer_' + x + '"]:checked').val() === "undefined") {
      answered = false;
      $('#quiz_feedback_' + x).text("*Please select an answer!");
      $('#quiz_feedback_' + x).css("color", "#ff0000");
    } else {
      $('#quiz_feedback_' + x).text("");
      $('#quiz_feedback_' + x).css("color", "#000000");
    }

  }

  //IF ALL QUESTIONS ARE ANSWERED SEND THE MARKS TO BE GRADED
  if (answered) {

    for(x = 0; x < $('div[id^="quiz_question_"]').length; x++) {

      if($('input[name="quiz_answer_' + x + '"]:checked').val() == question_answers[x]){
        $('#quiz_feedback_' + x).text("CORRECT!");
      } else {
        $('#quiz_feedback_' + x).text("INCORRECT!");
      }

    }

  }


}
