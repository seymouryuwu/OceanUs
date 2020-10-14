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

var distance = 0;

/* ------------------- */
/* CONTENT : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {

  //Get current URL
  this_URL = window.location.pathname;

  //Get last segment of URL
  articleID =  parseInt(this_URL.split('/').pop());

  var devmode = false;

  /********** DEV MODE **********/
  /* IMPORTANT NOTE : Remove before deployment!!! */
  if (devmode) {
    articleID = 2;
  }
  /********** DEV MODE **********/

  if (articleID < 6) {
    available = true;
  }

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

      //Randomly choose image of animal with speach bubble
      var randomNum = (Math.random() * 3);
      var randomImage = "";
      randomNum = Math.ceil(randomNum);

      switch (randomNum) {
        case 1:
          randomImage = "../images/logos/bubble-puffer.png";
          break;
        case 2:
          randomImage = "../images/logos/bubble-seal.png";
          break;
        case 3:
          randomImage = "../images/logos/bubble-shark.png";
          break;
        default:

      }

      //Check for tags in the content and format accordingly
      sectionText = sectionText.replace(/<fun>/g, "<div class='content-fun-fact'>");
      sectionText = sectionText.replace(/<\/fun>/g, "<div class='content-fun-fact-image'><img src='" + randomImage + "'></div></div>");
      sectionText = sectionText.replace(/\\n/g, "</br></br>");
      sectionText = sectionText.replace(/\n/g, "</br></br>");

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

    if (quizId.length > 0) {
      buildQuizQuestion(quizId);
    } else {
      if (available) {
        //Append next quiz button
        $('.content-section').append(`
        <button type="submit" class="quiz-next" onClick="nextQuiz(` + parseInt(articleID + 1) + `)">
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
      console.log('Hello!');
      answered = false;
      $('#quiz_feedback_' + currentQuizIds[x]).html("<span class='red-text'>*Please select an answer!</span>");
    } else {
      $('#quiz_feedback_' + currentQuizIds[x]).html("");
    }

  }

  // If all questions have been answered grade the test
  if (answered) {

    //Hide lock 'submit' button
    $('.quiz-submit').hide();

    //Append next quiz button if another article is available
    if (available) {

      $('.quiz-section').append(`
      <button type="submit" class="quiz-next" onClick="startReward(` + articleID + `)">
        <image src="` + staticAssetsURL + `images/start.png">
      </button>
      `);

    } else {
      //TODO: Check if there is a game attached before appending this
      $('.quiz-section').append(`
      <button type="submit" class="quiz-next" onClick="startReward(` + articleID + `)">
        <image src="` + staticAssetsURL + `images/start.png">
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
         $('#quiz_feedback_' + quizId).html("<span class='green-text'>CORRECT!</span> ");
       } else {
         $('#quiz_feedback_' + quizId).html("<span class='red-text'>INCORRECT!</span></br>The correct answer is " + correctOptionText);
       }

    }

  }

}


/* -------------------------- */
/* CONTENT : START REWARD GAME */
/* -------------------------- */

function startReward(articleID) {

  var nextArticle = 0;
  if (available) {
    nextArticle = (articleID + 1);
  }

  switch (articleID) {
    case 0:
      console.log("No 0 id article!");
      break;
    case 1:
      var win = window.open('/sharkvsrubbish?aid=' + nextArticle, '_self');
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
      break;
    case 2:
      var win = window.open('/suziestoosies?aid=' + nextArticle, '_self');
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:
      var win = window.open('/cloggedmemory?aid=' + nextArticle, '_self');
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
      break;
    default:

  }

  var next = parseInt(articleID + 1);

  console.log(next);

  //Disable Scroll
  $('body').css('position', 'fixed');

  //TODO: Check if there is an article after this
  if (available) {
    //Add next quiz buttons onClick event
    $('#next_quiz1').on("click", 'nextQuiz(' + next + ')');
    $('#next_quiz2').on("click", 'nextQuiz(' + next + ')');
  } else {
    $('#next_quiz1').attr('href',navGamesURL).text('Games');
    $('#next_quiz2').attr('href',navGamesURL).text('Games');
  }

}


/* -------------------------- */
/* CONTENT : NEXT QUIZ BUTTON */
/* -------------------------- */

function nextQuiz(quizId) {

  var nextArticle = (contentURL + parseInt(quizId));


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


/* -------------------------- */
/* CONTENT : FIRES WHEN SHARK GAME CLOSES */
/* -------------------------- */

function closeSharkGame() {
  console.log('next quiz!');
  nextQuiz(parseInt(articleID) + 1);
}


/* -------------------------- */
/* CONTENT : SCROLL LOCK */
/* -------------------------- */

$(window).scroll(function() {

  distance = $('#quiz_section').offset().top;
  topPadding = -Math.abs(distance);

  if ( $(this).scrollTop() >= distance && $('#quiz_section').children().length > 1) {
      $('body').css('position', 'fixed').css('margin-top', parseInt(topPadding));
      $('#quiz_section').addClass('scrollable');
  }
});
