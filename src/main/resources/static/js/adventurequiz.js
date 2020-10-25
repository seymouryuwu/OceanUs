/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Adventure Quiz Page */
/* DESCRIPTION : JavaScript functions only applicable to the adventure quiz page */
/* AUTHOR:     : Malcolm Malloy */
/* TARGET HTML : templates/adventurequiz.html */

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
//var articleId =  "";
var available = false;
var currentQuizIds = [];
var currentQuizAnswers = [];
var gameAPI = '';
var lastArticle = false;
var welcomeAnswered = false;

var distance = 0;

/* ------------------- */
/* CONTENT : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {

  var devmode = false;

  /********** DEV MODE **********/
  /* IMPORTANT NOTE : Remove before deployment!!! */
  if (devmode) {
    articleId = 2;
    gameAPI = '/sharkvsrubbish';
  }
  /********** DEV MODE **********/

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

function loadWelcomePage() {

   console.log("loadWelcomePage");

   $('.content-section').append(`
     <div class="row">
       <div class="col-md-12 full-block">

         <iframe width="560" height="315" src="https://www.youtube.com/embed/CTZNh7-Imd8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
         <p>Just to make you familiar with the functionality of scroll lock there is a training quiz right after this content. You will get an achievement badge if you answer correctly.</p>
         <p>Are you READYYYYYYYYYYYYYYYYYYYY??????</p>
       </div>
     </div>

   `);

   $('.welcome_quiz_section').append(`

     <div class="full-block col-md-12">
       <div class="quiz-title"><h3>TRAINING QUIZ</h3></div>
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

     </div>

     <form id="quiz_form" class="quiz-form" action="#">
     </form>

   `);

}

function answerTrue() {
    console.log("Oh No! You need to read/listen to the INSTRUCTIONS again!");

    welcomeAnswered = true;

    $('#quiz_feedback_1').text('Oh No! You need to read/listen to the INSTRUCTIONS again!');
    $('.start-journey').hide();
    $('body').css('position', 'inherit');
    $('#welcome_quiz_section').removeClass('scrollable');
}

function answerFalse() {
    welcomeAnswered = true;


    $('#quiz_feedback_1').text('False! Well done you answered correctly!');

    $('.start-journey').show();
    $('body').css('position', 'inherit');
    $('#welcome_quiz_section').removeClass('scrollable');

    //TODO: post result of answer to the backend via API
}

/* -------------------------------------------- */
/* CONTENT : BUILD CONTENT SECTION (HTML BLOCK) */
/* -------------------------------------------- */

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
         else return 0
  }
 })
 // return first n values from sortedList
  return sortedList.map(el=>el[0]).slice(0,n)
 }

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
                  <image src="` + staticAssetsURL + `images/button/Nextpage.png">
               </button>
            </div>

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

      if (gameAPI) {

        //Display Play Button and Next Page Button when there is a game
        $('.quiz-section').append(`

            <div class="row">

               <div class="play-button-col col-md-6">
                   <button type="submit" class="play-button" onClick="startReward(` + articleId + `)">
                     <image src="` + staticAssetsURL + `images/button/Playgame.png">
                   </button>
               </div>

               <div class="next-button-col col-md-6">
                   <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleId + 1) + `)">
                     <image src="` + staticAssetsURL + `images/button/Nextpage.png">
                   </button>
               </div>

            </div>

        `);

      } else {

        $('.quiz-section').append(`

            <div class="no-game-next-button col-md-12">
               <button type="submit" class="quiz-next" onClick="nextQuiz(` + (articleId + 1) + `)">
                 <image src="` + staticAssetsURL + `images/button/Nextpage.png">
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


/* -------------------------- */
/* CONTENT : START REWARD GAME */
/* -------------------------- */

function startReward(articleId) {

  console.log('Start Reward');
  console.log(available);

  // LAST ARTICLE IN DB - Navigate to quiz ending page
  if (lastArticle)  {
      //TODO: Navigate to the quiz ending page (CURRENTLY NAVIGATES TO PROFILE)
      window.open('/ending', '_self');
  }

  // NEXT ARTICLE EXISTS
  if (available) {

    var nextArticleID = (articleId + 1);

    // GAME EXISTS
    if (gameAPI) {

        console.log('LOAD SPECIFIED GAME');
        window.open(gameAPI + '?aid=' + nextArticleID, '_self');

    } else {

        console.log('NO GAME! LOAD NEXT QUIZ BUTTON');
        window.open(nextArticleID, '_self');

    }

  }

}


/* -------------------------- */
/* CONTENT : NEXT QUIZ BUTTON */
/* -------------------------- */

function nextQuiz(quizId) {

  var nextArticle = (contentURL + parseInt(quizId));

  //Redirect to next content page
  window.location.replace(nextArticle);

}
function endJourney() {
    //Redirect to end of adventure
    window.location.replace('/ending');
}

/* -------------------------- */
/* CONTENT : FIRES WHEN SHARK GAME CLOSES */
/* -------------------------- */

function closeSharkGame() {
  console.log('next quiz!');
  nextQuiz(parseInt(articleId) + 1);
}


/* -------------------------- */
/* CONTENT : SCROLL LOCK */
/* -------------------------- */

$(window).scroll(function() {

  distance = $('#quiz_section').offset().top;
  topPadding = -Math.abs(distance);

  if ( $(this).scrollTop() >= distance && $('#quiz_section').children().length > 1) {
      $('body').css('position', 'fixed');
      $('#quiz_section').addClass('scrollable');
  }

  if (!welcomeAnswered) {
      distance = $('#welcome_quiz_section').offset().top;
      topPadding = -Math.abs(distance);

      if ( $(this).scrollTop() >= distance && $('#welcome_quiz_section').children().length > 1) {
          $('body').css('position', 'fixed');
          $('#welcome_quiz_section').addClass('scrollable');
      }
  }

});
