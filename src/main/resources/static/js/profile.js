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
      "username":"Seymour",
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
  loadBadges();

}

/* -------------------------------------------- */
/* PROFILE : LOAD WELCOME MESSAGE */
/* -------------------------------------------- */

function loadWelcomeMessage() {

  if (profileData.username) {
    $('.welcome-message').html("Hey, " + profileData.username + "!");
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
