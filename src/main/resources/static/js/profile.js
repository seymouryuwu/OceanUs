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

let API_getachievements = 'https://www.oceanus.me/profile/getprofiledata';

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

      "quizResultDTOList":[
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

      "gameResultDTOList":[
        {
          "gameId":"1",
          "gameName":"Sharks Vs Rubish",
          "score":400,
          "achieveDate":"2020-10-16"
        },
        {
          "gameId":"2",
          "gameName":"Suzies Toosies",
          "score":200,
          "achieveDate":"2020-10-17"
        },
        {
          "gameId":"3",
          "gameName":"Clogged Memory",
          "score":600,
          "achieveDate":"2020-10-18"
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

//   https://oceanus.me/profile/setnickname
//   @PostMapping("/setnickname")
//       public ResponseEntity setNickname(@RequestBody String nickname) {
//           userService.setNickname(nickname);
//           return ResponseEntity.ok(HttpStatus.OK);
//       }


  /********** DEV MODE **********/



});


/* -------------------------------------------- */
/* PROFILE : LOAD PROFILE DATA */
/* -------------------------------------------- */


function loadProfileData() {

  loadWelcomeMessage();
  loadQuizResults();
  loadGameResults();
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
      <p class="username">Username:` + username + `</h2>
      <p>This is where you can check you quiz results, high scores and achievement badges!</p>

    `);

    // $('.welcome-message').html("Hey, " + profileData.username + "!");
  }

}

/* -------------------------------------------- */
/* PROFILE : LOAD QUIZ RESULTS */
/* -------------------------------------------- */

function loadQuizResults() {

  if (profileData.quizResultDTOList) {

     var totalCorrect = profileData.totalCorrect;
     var totalQuestion = profileData.totalQuestion;

     $('.quiz-results-header').append(`

     <div class="col-12">
        <div class="high-score-total">
          <h2>Quiz Results</h2>
          <h4>Total: ` + totalCorrect + `/` + totalQuestion + `</h4>
        </div>
      </div>

    `);

    for (var i = 0; i < profileData.quizResultDTOList.length; i++) {

      var articleTitle = profileData.quizResultDTOList[i].articleTitle;
      var correctAnswer = profileData.quizResultDTOList[i].correctAnswer;
      var questionNumber = profileData.quizResultDTOList[i].questionNumber;

      $('.quiz-border').append(`
        <div class="col-3 high-score-block">
          <div class="high-score-border">
            <h2>` + articleTitle + `</h2>
            <h4>` + correctAnswer + `/` + questionNumber + `</h4>
          </div>
        </div>
      `);
    }

  }

}

/* -------------------------------------------- */
/* PROFILE : LOAD GAME RESULTS */
/* -------------------------------------------- */

function loadGameResults() {

  if (profileData.gameResultDTOList) {

    for (var i = 0; i < profileData.gameResultDTOList.length; i++) {

      var gameName = profileData.gameResultDTOList[i].gameName;
      var score = profileData.gameResultDTOList[i].score;
      var achieveDate = profileData.gameResultDTOList[i].achieveDate;

      console.log(gameName);
      console.log(score);
      console.log(achieveDate);

//          <div class="col-4 high-score-block">
//            <div class="high-score-border green-border">
//              <h4>Suzies Toosies</h4>
//            </div>
//          </div>

      $('.high-scores').append(`

        <div class="col-4 high-score-block">
          <div class="high-score-border green-border">
            <h2>` + gameName + `</h2>
            <h4>` + score + `</h4>
            <p>` + achieveDate + `</p>
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
