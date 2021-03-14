/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Adventure Quiz Page */
/* DESCRIPTION : JavaScript functions only applicable to the adventure quiz page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/adventurequiz.html */

/* --------------------------------- */
/* ADVENTURE QUIZ : API DECLARATIONS */
/* --------------------------------- */

let API_getarticle = 'https://oceanus.me/article/getarticle?articleId=';
let API_getsectionquiz = 'https://oceanus.me/quiz/getsectionquiz?sectionId=';
let API_examanswer = 'https://oceanus.me/quiz/examanswer?optionId=';

/* --------------------------------- */
/* ADVENTURE QUIZ : GLOBAL VARIABLES */
/* --------------------------------- */

var this_URL = "";
var available = false;
var currentQuizIds = [];
var currentQuizAnswers = [];
var gameAPI = '';
var lastArticle = false;
var welcomeAnswered = false;

var distance = 0;

/* -------------------------- */
/* ADVENTURE QUIZ : PAGE LOAD */
/* -------------------------- */
/* Loads the article API */

$( document ).ready(function() {

  if (articleId < articleCount)  {
    available = true;
  }

  if (articleId == articleCount)  {
    lastArticle = true;
  }

  //Check if last URL segment is numeric
  if ($.isNumeric(articleId)) {

    //API Request : Get Article API by articleId
    $.ajax({url: (API_getarticle + articleId), success: function(articleData, textStatus) {
        $('.content-section').css('display', 'inherit');
        buildSection(articleData.sectionDTOList);
        gameAPI = articleData.gameAPI;
      }, error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error loading content!");
      }
    });

  } else {
    $('.content-section').css('display', 'inherit');
    $('.welcome_quiz_section').css('display', 'inherit');
    loadWelcomePage();
  }

});

/* ------------------------ */
/* ADVENTURE QUIZ : GENERAL */
/* ------------------------ */

/* Shuffle an array */
function shuffle(array) {
  //Shuffle array
  array.sort(() => Math.random() - 0.5);
}

/* Sort an object by one of its attributes */
function sortObjectEntries(obj, n){

  let sortedList = []

  //Sorting by values asc
  sortedList = Object.entries(obj).sort((a,b)=>{
      if(b[1] > a[1]) return 1;
      else if(b[1] < a[1]) return -1;
  //if values are same do edition checking if keys are in the right order
      else {
         if(a[0] > b[0]) return 1;
         else if(a[0] < b[0]) return -1;
         else return 0;
  }
 })
  // return first n values from sortedList
   return sortedList.map(el=>el[0]).slice(0,n)

}

/* ------------------------------------------------- */
/* ADVENTURE QUIZ : BUILD WELCOME BLOCK (HTML BLOCK) */
/* ------------------------------------------------- */
/* If the URL has no article id parameter then the intro article and test quiz is displayed */

function loadWelcomePage() {

   console.log("loadWelcomePage");

   $('.content-section').append(`
     <div class="row">
       <div class="col-md-12 full-block">

            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CTZNh7-Imd8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

         <h3>Are you excited to start your Adventure Journey and be a part of the change???????</h3>
         <p>We are sure you will have fun. But to get to the end there are some hurdles that you need to pass.</p>
         <p>In order to begin your adventure journey there are few things that you need to be aware of.</p>
         <ul>
            <li>You will be able to unlock the articles one by one.</li>
            <li>After you have read the articles there will be a quiz relating to that article.</li>
            <li>REMEMBER you  CAN NOT scroll back to the article while doing your quizzes. The article will be LOCKED. </li>
            <li>So, you need to read the article very carefully to do well in your quizzes and to answer them correctly. If you do well in your quizzes you stand a chance to win an achievement badge. We love badges and so will you. That’s SUPERCOOL!!! </li>
            <li>After you do your quizzes there will be some sections where you get to play games too. You can not play the games directly from the games section as Games will be unlocked only when you finish reading the article and the quiz.</li>
         </ul>
         <p>Just to make you familiar with the functionality of scroll lock there is a training quiz right after this content.</p>
         <p>Are you READYYYYYYYYYYYYYYYYYYYY??????</p>
       </div>
     </div>

   `);

   $('.welcome_quiz_section').append(`

     <div class="full-block col-md-12">
       <div class="quiz-title"><h2><span class="header-span-green">TRAINING QUIZ</span></h2></div>
     </div>


        <form id="quiz_form" class="quiz-form" action="#">

          <div class="row quiz-question-1">

            <div class="col-md-6 left-block">
              <div class="quiz-content"><p>You can scroll back to read the article while doing your quizzes?</p></div>
            </div>

            <div class="col-md-6 right-block">
              <div class="quiz-answers-1">

                <div>
                  <input id="3" type="radio" name="quiz-answer-1" value="3" onClick="answerTrue()">
                  <label for="1"><span><span></span></span>True</label>
                </div>

                <div>
                  <input id="1" type="radio" name="quiz-answer-1" value="1" onClick="answerFalse()">
                  <label for="1"><span><span></span></span>False</label>
                </div>

              </div>



            </div>
          </div>

        </form>

     <div class="no-game-next-button col-md-12">

       <p id="quiz_feedback_1"></p>

       <button type="submit" class="start-journey" onClick="nextQuiz(1)" style="display: none;">
         <image src="` + staticAssetsURL + `images/button/yellow-start.png">
       </button>

       <p class="start-journey-text" style="display: none;">Please <a href="/login" class="header-span-green">login</a> before you start if you wish to record your quiz scores, unlock games and achievements.</p>

     </div>

     <form id="quiz_form" class="quiz-form" action="#">
     </form>

   `);

}

/* ------------------------------------------ */
/* ADVENTURE QUIZ : ANSWER TRAINING QUIZ TRUE */
/* ------------------------------------------ */
/* Provides user feedback and re-enables scroll */

function answerTrue() {
    console.log("Oh No! You need to read/listen to the INSTRUCTIONS again!");

    welcomeAnswered = true;

    $('#quiz_feedback_1').text('Oh No! You need to read/listen to the INSTRUCTIONS again!');
    $('.start-journey').hide();
    $('.start-journey-text').hide();
    $('html, body')

    $('body').css('overflow', 'unset');
    $('#welcome_quiz_section').removeClass('scrollable');
}

/* ------------------------------------------- */
/* ADVENTURE QUIZ : ANSWER TRAINING QUIZ FALSE */
/* ------------------------------------------- */
/* Provides user feedback, displays navigation button and re-enables scroll */

function answerFalse() {
    welcomeAnswered = true;

    $('#quiz_feedback_1').text('False! Well done you answered correctly!');

    $('.start-journey').show();
    $('.start-journey-text').show();
    $('body').css('overflow', 'unset');
    $('#welcome_quiz_section').removeClass('scrollable');

}



/* --------------------------------------------------- */
/* ADVENTURE QUIZ : BUILD CONTENT SECTION (HTML BLOCK) */
/* --------------------------------------------------- */
/* Formats and appends the article text and images to the content section  */

function buildSection(sectionDTOList) {

  //Sort Article sections by sequence number
  sectionDTOList.sort(function(a, b) {
      return parseFloat(a.sectionSequenceNumber) - parseFloat(b.sectionSequenceNumber);
  });

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

      //Randomly choose image of animal with speech bubble
      var randomNum = (Math.random() * 11);
      var randomImage = "";
      randomNum = Math.ceil(randomNum);

      switch (randomNum) {
        case 1:
          randomImage = "../images/animals/puffer.png";
          break;
        case 2:
          randomImage = "../images/animals/sealion.png";
          break;
        case 3:
          randomImage = "../images/animals/shark.png";
          break;
        case 4:
          randomImage = "../images/animals/beaver.png";
          break;
        case 5:
          randomImage = "../images/animals/cloudy.png";
          break;
        case 6:
          randomImage = "../images/animals/jellyfish.png";
          break;
        case 7:
          randomImage = "../images/animals/octopus.png";
          break;
        case 8:
          randomImage = "../images/animals/penguin.png";
          break;
        case 9:
          randomImage = "../images/animals/ray.png";
          break;
        case 10:
          randomImage = "../images/animals/seal.png";
          break;
        case 11:
          randomImage = "../images/animals/sun.png";
          break;
        default:

      }

      //Check for tags in the content and format accordingly
      sectionText = sectionText.replace(/<fun>/g, "<div class='content-fun-fact'>");
      sectionText = sectionText.replace(/<\/fun>/g, "<div class='content-fun-fact-image'><img src='" + randomImage + "'></div></div>");

      sectionText = sectionText.replace(/<highlight>/g, "<span class='span-red'>");
      sectionText = sectionText.replace(/<\/highlight>/g, "</span>");

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

        //Display Next Page button when there is no game
        $('.content-section').append(`

            <div class="no-game-next-button col-md-12">
               <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleId + 1) + `)">
                  <image src="` + staticAssetsURL + `images/button/Bold-nextpage.png">
               </button>
            </div>

        `);

      }
    }
  }

}

/* ------------------------------------------------ */
/* ADVENTURE QUIZ : BUILD QUIZ SECTION (HTML BLOCK) */
/* ------------------------------------------------ */
/* Appends the quiz question text to the quiz section */

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



/* ------------------------------------------------ */
/* ADVENTURE QUIZ : BUILD QUIZ ANSWERS (HTML BLOCK) */
/* ------------------------------------------------ */
/* Appends the quiz answers as HTML radio buttons */

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

/* ----------------------------------- */
/* ADVENTURE QUIZ : CHECK QUIZ ANSWERS */
/* ----------------------------------- */
/* Validates that all questions have been answered, sends the results to the controller and displays the appropriate navigation buttons */

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

      if (gameAPI) {

        //Display Play Button and Next Page Button when there is a game
        $('.quiz-section').append(`

            <div class="row">

               <div class="play-button-col col-md-6">
                   <button type="submit" class="play-button" onClick="startReward(` + articleId + `)">
                     <image src="` + staticAssetsURL + `images/button/Bold-playgame.png">
                   </button>
               </div>

               <div class="next-button-col col-md-6">
                   <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleId + 1) + `)">
                     <image src="` + staticAssetsURL + `images/button/Bold-nextpage.png">
                   </button>
               </div>

            </div>

        `);

      } else {

        $('.quiz-section').append(`

            <div class="no-game-next-button col-md-12">
               <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleId + 1) + `)">
                 <image src="` + staticAssetsURL + `images/button/Bold-nextpage.png">
               </button>
            </div>

        `);

      }


    } else {

      //Display End Journey button at end of last Article page
      $('.quiz-section').append(`

          <div class="row">
            <div class="end-journey-button col-md-12">
              <button type="submit" class="end-journey" onClick="endJourney()">
                <image src="` + staticAssetsURL + `images/button/end-yellow.png">
              </button>
            </div>
          </div>

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


/* ---------------------------------- */
/* ADVENTURE QUIZ : START REWARD GAME */
/* ---------------------------------- */
/* Navigates to an attached game (if available = true) or to the next quiz article */

function startReward(articleId) {

  console.log('Start Reward');
  console.log(available);

  // LAST ARTICLE IN DB - Navigate to quiz ending page
  if (lastArticle)  {
      window.open('/ending', '_self');
  }

  // NEXT ARTICLE EXISTS
  if (available) {

    var nextArticleID = (articleId + 1);

    // Check if there is a game attached to the article
    if (gameAPI) {
        //Load game if game exists and send article id (aid) of the next article
        window.open(gameAPI + '?aid=' + nextArticleID, '_self');
    } else {
        //Navigate to next article
        window.open(nextArticleID, '_self');
    }

  }

}


/* --------------------------------- */
/* ADVENTURE QUIZ : NEXT QUIZ BUTTON */
/* --------------------------------- */
/* Navigates to the next quiz article */

function nextQuiz(quizId) {

  var nextArticle = (contentURL + parseInt(quizId));

  //Redirect to next content page
  window.location.replace(nextArticle);

}

/* --------------------------------- */
/* ADVENTURE QUIZ : END JOURNEY BUTTON */
/* --------------------------------- */
/* Navigates to the ending page */

function endJourney() {
    //Redirect to end of adventure
    window.location.replace('/ending');
}

/* --------------------------------- */
/* ADVENTURE QUIZ : CLOSE SHARK GAME */
/* --------------------------------- */
/* Navigates to the next quiz article */


function closeSharkGame() {
  nextQuiz(parseInt(articleId) + 1);
}


/* ---------------------------- */
/* ADVENTURE QUIZ : SCROLL LOCK */
/* ---------------------------- */
/* Checks if the top of the quiz section div has reached the top of the window */

$(window).scroll(function() {

  distance = $('#quiz_section').offset().top;
  topPadding = -Math.abs(distance);

  if ( $(this).scrollTop() >= distance && $('#quiz_section').children().length > 1) {
      $('body').css('overflow', 'hidden');
      $('#quiz_section').addClass('scrollable');
  }

  if (!welcomeAnswered) {
      distance = $('#welcome_quiz_section').offset().top;
      topPadding = -Math.abs(distance);

      if ( $(this).scrollTop() >= distance && $('#welcome_quiz_section').children().length > 1) {
          $('body').css('overflow', 'hidden').offset('100vh').top;
          $('#welcome_quiz_section').addClass('scrollable');
      }
  }

});
