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

let API_getachievements = 'https://oceanus.me/achievement/getachievements';

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
              "badgeImageUrl":null,
              "unlockDate":"2020-10-16"
            },
            {
              "achievementTitle":"5 Correct",
              "achievementDescription":"Answer 5 quizzes correctly",
              "badgeImageUrl":null,
              "unlockDate":"2020-10-16"
            }
          ]
        }`);

      }
      /********** DEV MODE **********/

      loadProfileData();

    }, error: function(jqXHR, textStatus, errorThrown) {
      //TODO: Redirect to something went wrong page
      console.log("Error loading content!");
    }
  });


});


/* -------------------------------------------- */
/* PROFILE : LOAD PROFILE DATA */
/* -------------------------------------------- */


function loadProfileData() {

  if (profileData.achievementDTOList) {
    console.log(profileData.achievementDTOList);

    for (var i = 0; i < profileData.achievementDTOList.length; i++) {

      var achievementTitle = profileData.achievementDTOList[i].achievementTitle;
      var achievementDescription = profileData.achievementDTOList[i].achievementDescription;
      var badgeImageUrl = profileData.achievementDTOList[i].badgeImageUrl;
      var unlockDate = profileData.achievementDTOList[i].unlockDate;

      $('.badges-border').append(`
        <p>` + achievementTitle + `</p>
        <p>` + achievementDescription + `</p>
        <img src="` + badgeImageUrl + `">
        <p>` + unlockDate + `</p>

      `);
    }


  }




}
