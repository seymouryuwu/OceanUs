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