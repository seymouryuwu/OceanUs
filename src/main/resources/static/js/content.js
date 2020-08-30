let API_getarticle = 'https://oceanus.me/article/getarticle?articleId=';
let API_getsectionquiz = 'https://oceanus.me/quiz/getsectionquiz?sectionId=';
let API_examanswer = 'https://oceanus.me/quiz/examanswer?optionId=';
var this_URL = window.location.pathname;
var articleID =  this_URL.split('/').pop()

var currentQuizIds = [];
var currentQuizAnswers = [];

//RUNS ON PAGE LOAD
$( document ).ready(function() {

  console.log(articleID);
  if ($.isNumeric(articleID)) {
    articleID = parseInt(articleID);
    console.log(articleID);
  } else {
    console.log("not a number!");
  }

  //articleID = 1;

  $.ajax({url: (API_getarticle + articleID), success: function(articleData, textStatus) {
      $('.content-section').css('display', 'inherit');
      buildSection(articleData.sectionDTOList);
    }, error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error loading content!");
    }
  });

});

//ARRAY SHUFFLE FUNCTION
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function buildSection(sectionDTOList) {

  var quizId = [];
  if(sectionDTOList.length > 0) {
    for(x = 0; x < sectionDTOList.length; x++) {

      id = (sectionDTOList[x]['sectionId']);
      ssn = (sectionDTOList[x]['sectionSequenceNumber']);
      sectionHeader = (sectionDTOList[x]['sectionHeader']);
      sectionText = (sectionDTOList[x]['sectionText']);
      hasQuiz = (sectionDTOList[x]['hasQuiz']);
      imageUrl = (sectionDTOList[x]['imageUrl']);
      imageAlignment = (sectionDTOList[x]['imageAlignment']);

      if (hasQuiz) {
        quizId.push(id);
      }

      if (imageUrl) {
        if (imageAlignment == 'right') {
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + id + `">
              <div class="col-md-6 left-block content-left-` + id + `">
                <h3>` + sectionHeader + `</h3>
                <p>` + sectionText + `</p>
              </div>
                <div class="col-md-6 right-block content-right-` + id + `">
                <img src="` + imageUrl + `" class="content-image">
              </div>
            </div>
          `;
        } else if (imageAlignment == 'left') {
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + id + `">
              <div class="col-md-6 left-block content-left-` + id + `">
                <img src="` + imageUrl + `" class="content-image">
              </div>
              <div class="col-md-6 right-block content-right-` + id + `">
                <h3>` + sectionHeader + `</h3>
                <p>` + sectionText + `</p>
              </div>
            </div>
          `;
        } else {
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + id + `">
              <div class="col-md-12 full-block">
                <h3>` + sectionHeader + `</h3>
                <p>` + sectionText + `</p>
              </div>
            </div>
          `;
        }
      } else {
        var contentSections = `
          <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + id + `">
            <div class="col-md-12 full-block">
              <h3>` + sectionHeader + `</h3>
              <p>` + sectionText + `</p>
            </div>
          </div>
        `;
      }




      $('.content-section').append(contentSections);

    }

    if (quizId.length > 0) {
      buildQuizQuestion(quizId);
    }
  }

}

//BUILD QUIZ QUESTIONS HTML
function buildQuizQuestion(quizId) {

  var quizSection = `
  <div class="quiz-background"></div>
  <div class="full-block col-md-12">
    <div class="quiz-title"><h3>QUIZ</h3></div>
  </div>
  <form id="quiz_form" class="quiz-form" action="#">
  </form>
  `;

  $('.quiz-section').append(quizSection);

  for(x = 0; x < quizId.length; x++) {

    $.ajax({url: (API_getsectionquiz + quizId[x]), success: function(quizData, textStatus) {

      for(i = 0; i < quizData.sectionQuizDTOList.length; i++) {

        quizId = quizData.sectionQuizDTOList[i]['quizId'];
        questionData = quizData.sectionQuizDTOList[i]['quizOptionDTOList'];
        quizQuestion = quizData.sectionQuizDTOList[i]['quizQuestion'];

        currentQuizIds.push(quizId);

        $('.quiz-section').css('display', 'inherit');

        var questionSections = `
          <div class="row quiz-question-` + quizId + `">
            <div class="col-md-6 left-block">
              <div class="quiz-content"><p>` + quizQuestion + `</p></div>
            </div>
            <div class="col-md-6 right-block">
              <div class="quiz-answers-` + quizId + `"></div>
              <p id="quiz_feedback_` + quizId + `"></p>
            </div>
          </div>
        `;

        $('.quiz-form').append(questionSections);

        buildQuizAnswers(quizId, questionData);

      }

    }, error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error loading quiz!");
    }
  });
  }
  $('.quiz-section').append(`
  <button type="submit" class="quiz-submit" onClick="checkQuizAnswer()">
    <image src="../images/lock_button.png">
  </button>
  `);
}

function buildQuizAnswers(quizId, questionData) {

  answers = [];

  //POPULATE ANSWERS
  for(x = 0; x < questionData.length; x++) {
    quizOptionId = questionData[x].quizOptionId;
    quizOptionText = questionData[x].quizOptionText;
    answers.push(`
    <div>
      <input id="` + quizOptionId + `" type="radio" name="quiz-answer-` + quizId + `" value="` + quizOptionId +`">
      <label for="` + quizId +`"><span><span></span></span>` + quizOptionText + `</label>
    </div>
    `);
  }
  shuffle(answers);
  for(x = 0; x < answers.length; x++) {
    $('.quiz-answers-' + quizId).append(answers[x]);
  }

}


//CHECK QUIZ QUESTION ANSWERS
function checkQuizAnswer() {

  var answered = true;
  currentQuizAnswers = [];


  //NOTE: ask Seymour to start API ids at 0 then change 1 to to 0
  for(x = 0; x < currentQuizIds.length; x++) {
    console.log(currentQuizIds[x]);
    if(typeof $('input[name="quiz-answer-' + currentQuizIds[x] + '"]:checked').val() === "undefined") {
      answered = false;
      $('#quiz_feedback_' + x).text("*Please select an answer!");
      $('#quiz_feedback_' + x).css("color", "#ff0000");
    } else {
      $('#quiz_feedback_' + x).text("");
      $('#quiz_feedback_' + x).css("color", "#ffffff");
    }

  }

  // IF ALL QUESTIONS ARE ANSWERED SEND THE MARKS TO BE GRADED
  if (answered) {

    //SWITCH BUTTONS
    $('.quiz-submit').hide();
    $('.quiz-section').append(`
    <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleID + 1) + `)">
      <image src="../images/next_page_button.png">
    </button>
    `);

    //POPULATE currentQuizAnswers array
    for(x = 0; x < currentQuizIds.length; x++) {
      userAnswer = parseInt($('input[name="quiz-answer-' + currentQuizIds[x] + '"]:checked').val());
      currentQuizAnswers.push(userAnswer);
    }

    for(x = 0; x < currentQuizIds.length; x++) {

      var quizId = currentQuizIds[x];
      var correctness = "";
      var correctOptionId = "";
      var correctOptionText = "";

      $.ajax({
       url: (API_examanswer + currentQuizAnswers[x]),
       async: false,
       success: function(answerData, textStatus) {
         correctness = answerData.correctness;
         correctOptionId = answerData.correctOptionId;
         correctOptionText = answerData.correctOptionText;

       }, error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error loading quiz answer!");
        }
      });

      if(correctness){
         $('#quiz_feedback_' + quizId).text("CORRECT!");
         $('#quiz_feedback_' + quizId).css("color", "#00ff00");
         // next_page_button.png
       } else {
         $('#quiz_feedback_' + quizId).text("INCORRECT! the correct answer is " + correctOptionText);
         $('#quiz_feedback_' + quizId).css("color", "#ff0000");
       }

    }

  }


}

function nextQuiz(quizId) {
  window.location.replace('https://oceanus.me/content/' + quizId);
}
