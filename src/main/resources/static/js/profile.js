/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Profile Page */
/* DESCRIPTION : JavaScript functions only applicable to the profile page */
/* AUTHOR      : Malcolm Malloy */
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
/* Loads the users profile data via API */

$( document ).ready(function() {

  //API Request : Get achievement data from API
  $.ajax({url: (API_getachievements), success: function(achievementData, textStatus) {
      profileData = achievementData;
      loadProfileData();

    }, error: function(jqXHR, textStatus, errorThrown) {
      //TODO: Redirect to something went wrong page
      console.log("Error loading content!");
    }
  });

});


/* --------------------------- */
/* PROFILE : LOAD PROFILE DATA */
/* --------------------------- */
/* Checks if user is logged in and loads data accordingly */

function loadProfileData() {

  if (isLoggedIn) {
    loadWelcomeMessage();
    loadQuizResults();
    loadGameResults();
    loadBadges();
  } else {
    loadProfileMessage();
  }


}


/* ------------------------------ */
/* PROFILE : LOAD PROFILE MESSAGE */
/* ------------------------------ */
/* Displays the default message when user is not logged in */

function loadProfileMessage() {
   $('.quiz-results-section').hide();
   $('.high-scores-section').hide();
   $('.badges-section').hide();

   $('main').append(`

   <section class="profile-message-section">
     <div class="row">
        <div class="col12 full-block">
            <h2>Please login or signup to view your adventure quiz results, game scores and achievements!</h2>
        </div>
     </div>
   </section>

   `);
}

/* ------------------------------ */
/* PROFILE : LOAD WELCOME MESSAGE */
/* ------------------------------ */
/* Displays personalised welcome message to logged in user */

function loadWelcomeMessage() {

  if (profileData.username) {

    var username = profileData.username;
    var nickname = profileData.nickname;
    var totalCorrect = profileData.totalCorrect;
    var totalQuestion = profileData.totalQuestion;

    $('.quiz-results-border').html(`

      <input type="text" id="nickname_textbox" name="nickname" value="` + nickname + `" style="display: none;">
      <h2 class="update"><div class="save-button" onClick="postEditName();" style="display: none;">&#x2713;</div></h2>

      <h2 class="nickname"><span class="span-blue">` + nickname + `<div class="edit-pencil" onClick="showEditName();">&#x270E;</div></span></h2>
      <p class="username">Username:` + username + `</h2>
      <p>This is where you can check you quiz results, high scores and achievement badges!</p>

    `);
  }

}

/* -------------------------------- */
/* PROFILE : SHOW EDIT NAME TEXTBOX */
/* -------------------------------- */
/* Displays the edit name textbox */

function showEditName() {

  $('#nickname_textbox').show();
  $('.save-button').show();
  $('.nickname').hide();

}

/* -------------------------------- */
/* PROFILE : SHOW EDIT NAME TEXTBOX */
/* -------------------------------- */
/* Posts the users new nickname to the controller API */

function postEditName() {

  $('#nickname_textbox').hide();
  $('.save-button').hide();
  $('.nickname').show();

  //Game lost: No score
  var result = {
    nickname : $('#nickname_textbox').val()
  };

  //Post game results to API
  $.ajax({
    url: '/profile/setnickname',
    type: 'POST',
    data: JSON.stringify(result),
    dataType: 'json',
    contentType : "application/json",
    beforeSend:function(xhr){
      xhr.setRequestHeader(header, token);
    },
    success: function(response, textStatus, jqXHR) {
      console.log("Results posted!");
      //location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }

  });

  location.reload();

}

/* --------------------------- */
/* PROFILE : LOAD QUIZ RESULTS */
/* --------------------------- */
/* Displays the users quiz results */

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

/* --------------------------- */
/* PROFILE : LOAD GAME RESULTS */
/* --------------------------- */
/* Displays the users game scores */

function loadGameResults() {

  if (profileData.gameResultDTOList) {

    for (var i = 0; i < profileData.gameResultDTOList.length; i++) {

      var gameName = profileData.gameResultDTOList[i].gameName;
      var score = profileData.gameResultDTOList[i].score;
      var achieveDate = profileData.gameResultDTOList[i].achieveDate;

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

/* --------------------- */
/* PROFILE : LOAD BADGES */
/* --------------------- */
/* Displays the users achievement badges */

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
