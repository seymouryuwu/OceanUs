/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Ending Page */
/* DESCRIPTION : JavaScript functions only applicable to the ending page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/ending.html */

/* --------------------------- */
/* ENDING : GO TO PROFILE PAGE */
/* --------------------------- */
/* Navigates to the profile page */

function goToProfile() {

 var win = window.open('../profile', '_self');

  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }

}

/* ---------------------------- */
/* ENDING : GO TO THE HOME PAGE */
/* ---------------------------- */
/* Navigates to the home page */

function goToHome() {

  var win = window.open('../', '_self');

  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }

}

/* ----------------------- */
/* ENDING : GET NAV BUTTON */
/* ----------------------- */
/* Chooses which nav button to display
   Appends a view profile button if the user is logged
   Appends the end journey button and navigates to the home page if the user is not logged in */

function getNavButton() {

  if (isLoggedIn) {

    $('.journey-complete').append(`

      
      <div>
        <button type="submit" class="profile-page-button" onClick="goToProfile()">
          <image src="../images/button/viewprofile.png"></image>
        </button>
      </div>

  `);

  } else {

    $('.journey-complete').append(`

       <!-- IF NOT LOGGED IN - Home button -->
          <div>
            <button type="submit" class="profile-page-button" onClick="goToHome()">
            <image src="../images/button/end-yellow.png"></image>
          </button>
       </div>

    `);

  }



}