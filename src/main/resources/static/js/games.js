/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Games Page */
/* DESCRIPTION : JavaScript functions only applicable to the games page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/games.html */

/* -------------------------- */
/* GAMES : API DECLARATIONS */
/* -------------------------- */

let API_getachievements = 'https://oceanus.me/game/getgameunlockstate';

/* -------------------------- */
/* GAMES : GLOBAL VARIABLES */
/* -------------------------- */

var unlockData = [];

/* ----------------- */
/* GAMES : PAGE LOAD */
/* ----------------- */
/* Checks which games the user has unlocked via API */

$( document ).ready(function() {

  if(isLoggedIn) {

      //API Request : Get achievement data  from API
      $.ajax({url: (API_getachievements), success: function(unlockStateData, textStatus) {
          unlockData = unlockStateData;
          loadUnlockData();

        }, error: function(jqXHR, textStatus, errorThrown) {

        }
      });

  } else {

    loadDefault()

  }

});

/* --------------------- */
/* GAMES : LOAD DEFAULT  */
/* --------------------- */
/* Loads the locked game symbols */

function loadDefault() {
  displayGameLock(1);
  displayGameLock(2);
  displayGameLock(3);
}

/* ------------------------ */
/* GAMES : LOAD UNLOCK DATA */
/* ------------------------ */
/* Chooses function to lock or unlock based on API data */

function loadUnlockData() {

  for (var i = 0; i < unlockData.length; i++) {

    var gameId = unlockData[i].gameId;
    var unlockState = unlockData[i].unlockState;

    if (unlockState == true) {
       displayGame(gameId);
    } else {
       displayGameLock(gameId);
    }

  }

}

/* -------------------- */
/* GAMES : DISPLAY GAME */
/* -------------------- */
/* Unlocks game based on unLockId variable */

function displayGame(unLockId) {

   console.log("Display game ID = " + unLockId);

   switch (unLockId) {
      case 1:

        $('.gameCircles .row').append(`
            <div onclick="openShark();" class="col-md-4">

               <div class="shark-logo">
               </div>

               <h3>Shark vs Rubbish</h3>

            </div>

        `);

        break;
      case 2:

        $('.gameCircles .row').append(`
            <div onclick="openPipe();" class="col-md-4">

               <div class="pipe-logo">
               </div>

               <h3>Suzies Toosies</h3>

            </div>

        `);

        break;
      case 3:

        $('.gameCircles .row').append(`
            <div onclick="openCard();" class="col-md-4">

               <div class="card-logo">
               </div>

               <h3>Clogged Memory</h3>

            </div>

        `);

        break;
      default:

     }

}

/* ------------------------- */
/* GAMES : DISPLAY GAME LOCK */
/* ------------------------- */
/* Locks game based on lockId variable */

function displayGameLock(lockId) {

   console.log("Leave game ID = " + lockId + " locked");

   switch (lockId) {
      case 1:

        $('.gameCircles .row').append(`
            <div class="col-md-4">

               <div class="shark-logo-locked">
               </div>

               <h3>Shark vs Rubbish</h3>

            </div>

        `);

        break;
      case 2:

        $('.gameCircles .row').append(`
            <div class="col-md-4">

               <div class="pipe-logo-locked">
               </div>

               <h3>Suzies Toosies</h3>

            </div>

        `);

        break;
      case 3:

        $('.gameCircles .row').append(`
            <div class="col-md-4">

               <div class="card-logo-locked">
               </div>

               <h3>Clogged Memory</h3>

            </div>

        `);

        break;
      default:

     }

}

/* ----------------------------- */
/* GAMES : OPEN SHARK VS RUBBISH */
/* ----------------------------- */
/* Navigates to the shark page */

function openShark() {
  var win = window.open('sharkvsrubbish', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }
}

/* ---------------------- */
/* GAMES : SUZIES TOOSIES */
/* ---------------------- */
/* Navigates to the Suzies Toosies page */

function openPipe() {
  var win = window.open('suziestoosies', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }
}

/* ---------------------- */
/* GAMES : CLOGGED MEMORY */
/* ---------------------- */
/* Navigates to the Clogged Memory page */

function openCard() {
  var win = window.open('cloggedmemory', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }
}

/* ------------------------ */
/* GAMES : CLOSE SHARK GAME */
/* ------------------------ */
/* Reloads the page */

function closeSharkGame() {
  location.reload();
}
