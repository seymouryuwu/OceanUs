/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Profile Page */
/* DESCRIPTION : JavaScript functions only applicable to the profile page */
/* AUTHOR:     : Malcolm Malloy */
/* TARGET HTML : templates/profile.html */

/* -------------------------- */
/* PROFILE : API DECLARATIONS */
/* -------------------------- */

let API_getachievements = 'https://oceanus.me/profile/getprofiledata';

/* -------------------------- */
/* PROFILE : GLOBAL VARIABLES */
/* -------------------------- */

var profileData = [];

/* ------------------- */
/* PROFILE : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {

  var devmode = false;

  //API Request : Get achievement data  from API
  $.ajax({url: (API_getachievements), success: function(achievementData, textStatus) {
      profileData = achievementData;
      loadProfileData();

    }, error: function(jqXHR, textStatus, errorThrown) {
      //TODO: Redirect to something went wrong page
      console.log("Error loading content!");
    }
  });


  /********** DEV MODE **********/
  /* IMPORTANT NOTE : Remove before deployment!!! */
  if (devmode) {
    profileData = JSON.parse(
    `{
      "username":"Malcolm",
      "nickname":"PlagueRat",
      "totalCorrect":"5",
      "totalQuestion":"22",

      "QuizResultDTO":[
        {
          "articleId":"1",
          "articleTitle":"Article Name 1",
          "correctAnswer":2,
          "questionNumber":2
        },
        {
          "articleId":"2",
          "articleTitle":"Article Name 2",
          "correctAnswer":3,
          "questionNumber":20
        }
      ],

      "achievementDTOList":[
        {
          "achievementTitle":"1 Correct",
          "achievementDescription":"Answer 1 quiz correctly",
          "badgeImageUrl":"../images/badges/quiz-1.png",
          "unlockDate":"2020-10-16"
        },
        {
          "achievementTitle":"7 Correct",
          "achievementDescription":"Answer 7 quizzes correctly",
          "badgeImageUrl":"../images/badges/quiz-2.png",
          "unlockDate":"2020-10-16"
        }
      ]
    }`);

  }

  loadProfileData();
  /********** DEV MODE **********/



});


/* -------------------------------------------- */
/* PROFILE : LOAD PROFILE DATA */
/* -------------------------------------------- */


function loadProfileData() {

  loadWelcomeMessage();
  loadQuizResults();
  loadBadges();

}

/* -------------------------------------------- */
/* PROFILE : LOAD WELCOME MESSAGE */
/* -------------------------------------------- */

function loadWelcomeMessage() {

  if (profileData.username) {

    var username = profileData.username;
    var nickname = profileData.nickname;
    var totalCorrect = profileData.totalCorrect;
    var totalQuestion = profileData.totalQuestion;

    $('.quiz-results-border').html(`

      <h2 class="nickname">` + nickname + `</h2>
      <p class="username">"` + username + `"</h2>
      <p>This is where you can check you quiz results, high scores and achievement badges!</p>

    `);

    // $('.welcome-message').html("Hey, " + profileData.username + "!");
  }

}

/* -------------------------------------------- */
/* PROFILE : LOAD QUIZ RESULTS */
/* -------------------------------------------- */

function loadQuizResults() {

  if (profileData.QuizResultDTO) {

    for (var i = 0; i < profileData.QuizResultDTO.length; i++) {

      var articleTitle = profileData.QuizResultDTO[i].articleTitle;
      var correctAnswer = profileData.QuizResultDTO[i].correctAnswer;
      var questionNumber = profileData.QuizResultDTO[i].questionNumber;

      $('.quiz-border').append(`
        <div class="col-3 high-score-block">
          <div class="high-score-border blue-border">
            <h4>` + articleTitle + `</h4>
            <p>` + correctAnswer + `/` + questionNumber + `</p>
          </div>
        </div>
      `);
    }


  }

}

/* -------------------------------------------- */
/* PROFILE : LOAD BADGES */
/* -------------------------------------------- */

function loadBadges() {

  if (profileData.achievementDTOList) {
    console.log(profileData.achievementDTOList);

    for (var i = 0; i < profileData.achievementDTOList.length; i++) {

      var achievementTitle = profileData.achievementDTOList[i].achievementTitle;
      var achievementDescription = profileData.achievementDTOList[i].achievementDescription;
      var badgeImageUrl = profileData.achievementDTOList[i].badgeImageUrl;
      var unlockDate = profileData.achievementDTOList[i].unlockDate;

      $('.badges-border').append(`
        <div class="row badge-row">
          <div class="col-md-5 badge-image">
            <img src="` + badgeImageUrl + `">
          </div>
          <div class="col-md-7 badge-data">
            <div class="badge-text vertical-center">
              <h4>` + achievementTitle + `</h4>
              <p>` + achievementDescription + `</p>
              <p>` + unlockDate + `</p>
            </div>
          </div>
        </div>
      `);
    }


  }

}
