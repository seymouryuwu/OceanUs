let API_getarticle = 'https://oceanus.me/article/getarticle?articleId=1'
let API_getsectionquiz = 'https://oceanus.me/quiz/getsectionquiz?sectionId='

//RUNS ON PAGE LOAD
$( document ).ready(function() {



  $.ajax({url: API_getarticle, success: function(articleData, textStatus) {
      $('.content-section').css('display', 'inherit');
      buildSection(articleData.sectionDTOList);
    }, error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error loading content!");
    }
  });

  //FOR TESTING REMOVE!!!!!
  checkQuizAnswer();

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

      console.log(imageUrl);
      console.log(imageAlignment);

      if (hasQuiz) {
        quizId.push(id);
      }

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
      } else {
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
    <image src="../static/images/lock_button.png">
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
      <label for="` + x +`"><span><span></span></span>` + quizOptionText + `</label>
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
  console.log("checkQuizAnswer();");
  console.log($('div[class^="quiz-question-"]'));


  // for(x = 0; x < $('div[class^="quiz-answer-"]').length; x++) {
  //
  //   console.log($('input[name="quiz-answer-' + x + '"]').val());
  //
  // }


}


// {
//   "articleId":1,
//   "articleTitle":"How to be a good guy",
//   "sectionDTOList":[{"sectionId":1,
//   "sectionSequenceNumber":1,
//   "sectionHeader":"Be kind",
//   "sectionText":"Being kind is very important.",
//   "hasQuiz":false,
//   "imageUrl":"http://100.26.172.161:8080/image/getsectionimage/1",
//   "imageAlignment":"left"},
//   {"sectionId":2,"sectionSequenceNumber":2,"sectionHeader":"Be honest","sectionText":"Being honest is cool.","hasQuiz":true,"imageUrl":"http://100.26.172.161:8080/image/getsectionimage/2","imageAlignment":"right"},{"sectionId":3,"sectionSequenceNumber":3,"sectionHeader":"Be tough","sectionText":"Who is the tough guy!","hasQuiz":true,"imageUrl":null,"imageAlignment":null}]}
