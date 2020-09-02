/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Quiz's & Games (Content) Page */
/* DESCRIPTION : JavaScript functions only applicable to the content page */
/* AUTHOR:     : Malcolm Malloy */
/* TARGET HTML : templates/content.html */

/* -------------------------- */
/* CONTENT : API DECLARATIONS */
/* -------------------------- */

let API_getarticle = 'https://oceanus.me/article/getarticle?articleId=';
let API_getsectionquiz = 'https://oceanus.me/quiz/getsectionquiz?sectionId=';
let API_examanswer = 'https://oceanus.me/quiz/examanswer?optionId=';

/* -------------------------- */
/* CONTENT : GLOBAL VARIABLES */
/* -------------------------- */

var this_URL = "";
var articleID =  "";
var available = false;
var currentQuizIds = [];
var currentQuizAnswers = [];

/* ------------------- */
/* CONTENT : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {

  //Get current URL
  this_URL = window.location.pathname;

  //Get last segment of URL
  articleID =  parseInt(this_URL.split('/').pop());


  /********** DEV MODE **********/
  /* IMPORTANT NOTE : Remove before deployment!!! */
  if (devmode) {
    articleID = 5;
    console.log("DEV MODE : The content pages articleID variable has been set to " + articleID);
  }
  /********** DEV MODE **********/


  //Check if last URL segment is numeric
  if ($.isNumeric(articleID)) {

    //API Request : Get Article API by articleID
    $.ajax({url: (API_getarticle + articleID), success: function(articleData, textStatus) {
        $('.content-section').css('display', 'inherit');
        buildSection(articleData.sectionDTOList);
      }, error: function(jqXHR, textStatus, errorThrown) {
        //TODO: Redirect to something went wrong page
        console.log("Error loading content!");
      }
    });

  } else {
    //TODO: Redirect to something went wrong page
    console.log("Last section in URL is not numeric");
  }

  //API Request : VALIDATION : Check if the next article is available to load
  $.ajax({url: (API_getarticle + (articleID + 1)), success: function(articleData, textStatus) {
      available = true;
      console.log("article found");
      console.log(available);
    }, error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error loading content!");
    }
  });

});

/* ----------------- */
/* CONTENT : GENERAL */
/* ----------------- */

function shuffle(array) {
  //Shuffle array
  array.sort(() => Math.random() - 0.5);
}

/* -------------------------------------------- */
/* CONTENT : BUILD CONTENT SECTION (HTML BLOCK) */
/* -------------------------------------------- */

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

      //Check for tags in the content and format accordingly
      sectionText = sectionText.replace(/<fun>/g, "<span class='content-fun-fact'>");
      sectionText = sectionText.replace(/<\/fun>/g, "</span>");
      sectionText = sectionText.replace(/\\n/g, "</br></br>");
      sectionText = sectionText.replace(/\n/g, "</br></br>");

      console.log(sectionText);
      //Populate global array quizId with the current quiz id if hasQuiz = TRUE
      if (hasQuiz) {
        quizId.push(id);
      }

      //Generate content HTML block based on the image alignment
      if (imageUrl) {
        //Right aligned image HTML block
        if (imageAlignment == 'right') {
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + ssn + `">
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
          //Left aligned image HTML block
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + ssn + `">
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
          //Full-width HTML block with no image
          var contentSections = `
            <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + ssn + `">
              <div class="col-md-12 full-block">
                <h3>` + sectionHeader + `</h3>
                <p>` + sectionText + `</p>
              </div>
            </div>
          `;
        }
      } else {
        //Full-width HTML block with no image
        var contentSections = `
          <div class="row content-row-` + id + ` content-id-` + id + ` ssn-` + ssn + `">
            <div class="col-md-12 full-block">
              <h3>` + sectionHeader + `</h3>
              <p>` + sectionText + `</p>
            </div>
          </div>
        `;
      }

      //Append content HTML block to the content section
      $('.content-section').append(contentSections);

    }

    //If the quizID global array is populated build quiz else add next button
    console.log(quizId);
    if (quizId.length > 0) {
      buildQuizQuestion(quizId);
    } else {
      if (available) {
        //Append next quiz button
        $('.content-section').append(`
        <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleID + 1) + `)">
          <image src="` + staticAssetsURL + `images/next_page_button.png">
        </button>
        `);
      }
    }
  }

}

/* ----------------------------------------- */
/* CONTENT : BUILD QUIZ SECTION (HTML BLOCK) */
/* ----------------------------------------- */

function buildQuizQuestion(quizId) {

  //Generate outer HTML block for the quiz section
  var quizSection = `
  <div class="quiz-background"></div>
  <div class="full-block col-md-12">
    <div class="quiz-title"><h3>QUIZ</h3></div>
  </div>
  <form id="quiz_form" class="quiz-form" action="#">
  </form>
  `;

  //Append quiz HTML block to the quiz section
  $('.quiz-section').append(quizSection);

  //Iterate through global quizId array
  for(x = 0; x < quizId.length; x++) {

    //API Request : Get Section Quiz API by quizID
    $.ajax({url: (API_getsectionquiz + quizId[x]), success: function(quizData, textStatus) {

      for(i = 0; i < quizData.sectionQuizDTOList.length; i++) {

        quizId = quizData.sectionQuizDTOList[i]['quizId'];
        questionData = quizData.sectionQuizDTOList[i]['quizOptionDTOList'];
        quizQuestion = quizData.sectionQuizDTOList[i]['quizQuestion'];

        currentQuizIds.push(quizId);

        //Unhide quiz section
        $('.quiz-section').css('display', 'inherit');

        //Generate quiz question outer HTML block
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

        //Append quiz question outer HTML block to the quiz form tag
        $('.quiz-form').append(questionSections);

        //Build answers
        buildQuizAnswers(quizId, questionData);

      }

    }, error: function(jqXHR, textStatus, errorThrown) {
      //TODO: Redirect to something went wrong page
      console.log("Error loading quiz!");
    }
  });

  }

  //Append submit button HTML block to the quiz section
  $('.quiz-section').append(`
  <button type="submit" class="quiz-submit" onClick="checkQuizAnswer()">
    <image src="` + staticAssetsURL + `images/lock_button.png">
  </button>
  `);

}



/* ----------------------------------------- */
/* CONTENT : BUILD QUIZ ANSWERS (HTML BLOCK) */
/* ----------------------------------------- */

function buildQuizAnswers(quizId, questionData) {

  var answers = [];

  //Iterate through each question
  for(x = 0; x < questionData.length; x++) {

    quizOptionId = questionData[x].quizOptionId;
    quizOptionText = questionData[x].quizOptionText;

    //Generate answer HTML block and push to answers array
    answers.push(`
    <div>
      <input id="` + quizOptionId + `" type="radio" name="quiz-answer-` + quizId + `" value="` + quizOptionId +`">
      <label for="` + quizId +`"><span><span></span></span>` + quizOptionText + `</label>
    </div>
    `);

  }

  //Shuffle answers HTML block array
  shuffle(answers);

  //Append the HTML blocks in the answers array to the relevant quiz
  for(x = 0; x < answers.length; x++) {
    $('.quiz-answers-' + quizId).append(answers[x]);
  }

}

/* ---------------------------- */
/* CONTENT : CHECK QUIZ ANSWERS */
/* ---------------------------- */

function checkQuizAnswer() {

  var answered = true;

  //Clear currentQuizAnswers global array
  currentQuizAnswers = [];

  //VALIDATION : Check and display feedback if the user has not selected an option for each question
  for(x = 0; x < currentQuizIds.length; x++) {
    if(typeof $('input[name="quiz-answer-' + currentQuizIds[x] + '"]:checked').val() === "undefined") {
      answered = false;
      $('#quiz_feedback_' + x).text("*Please select an answer!");
      $('#quiz_feedback_' + x).css("color", "#ff0000");
    } else {
      $('#quiz_feedback_' + x).text("");
      $('#quiz_feedback_' + x).css("color", "#ffffff");
    }

  }

  // If all questions have been answered grade the test
  if (answered) {

    //Hide lock 'submit' button
    $('.quiz-submit').hide();

    //Append next quiz button
    if (available) {
      $('.quiz-section').append(`
      <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleID + 1) + `)">
        <image src="` + staticAssetsURL + `images/next_page_button.png">
      </button>
      `);
    }

    //Populate currentQuizAnswers array with users answers
    for(x = 0; x < currentQuizIds.length; x++) {
      userAnswer = parseInt($('input[name="quiz-answer-' + currentQuizIds[x] + '"]:checked').val());
      currentQuizAnswers.push(userAnswer);
    }


    for(x = 0; x < currentQuizIds.length; x++) {

      var quizId = currentQuizIds[x];
      var correctness = "";
      var correctOptionId = "";
      var correctOptionText = "";

      //API Request : Get Exam Answer API by answer ID
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

      //FEEDBACK : Check if question is true and display relevant response text
      if(correctness){
         $('#quiz_feedback_' + quizId).text("CORRECT!");
         $('#quiz_feedback_' + quizId).css("color", "#00ff00");
       } else {
         $('#quiz_feedback_' + quizId).text("INCORRECT! the correct answer is " + correctOptionText);
         $('#quiz_feedback_' + quizId).css("color", "#ff0000");
       }

    }

  }

}

/* -------------------------- */
/* CONTENT : NEXT QUIZ BUTTON */
/* -------------------------- */

function nextQuiz(quizId) {
  var nextArticle = (contentURL + quizId);


  /********** DEV MODE **********/
  /* IMPORTANT NOTE : Remove before deployment!!! */
  if (devmode) {
    nextArticle = contentURL;
    console.log("DEV MODE : Next Article reloads same page");
  }
  /********** DEV MODE **********/


  //Redirect to next content page
  window.location.replace(nextArticle);
}
