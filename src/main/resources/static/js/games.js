/* JAVASCRIPT :  Games Page */
/* DESCRIPTION : JavaScript functions only applicable to the games page */
/* AUTHOR:     : Malcolm Malloy */
/* TARGET HTML : templates/games.html */

/* -------------------------- */
/* GAMES : API DECLARATIONS */
/* -------------------------- */

let API_getachievements = 'https://oceanus.me/game/getgameunlockstate';

/* -------------------------- */
/* GAMES : GLOBAL VARIABLES */
/* -------------------------- */

var unlockData = [];

/* ------------------- */
/* GAMES : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {

  var devmode = false;

  //API Request : Get achievement data  from API
  $.ajax({url: (API_getachievements), success: function(unlockStateData, textStatus) {
      unlockData = unlockStateData;
      loadUnlockData();

    }, error: function(jqXHR, textStatus, errorThrown) {
      //TODO: LOAD EMPTY PROFILE PAGE
      console.log("Error loading unlock data!");

    }
  });

    /********** DEV MODE **********/
    /* IMPORTANT NOTE : Remove before deployment!!! */
    if (devmode) {

      unlockData = JSON.parse(`
      [
        {"gameId":1,"unlockState":true},
        {"gameId":2,"unlockState":false},
        {"gameId":3,"unlockState":false}
      ]
      `);

      loadUnlockData();
    }

  });



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

function closeSharkGame() {
  location.reload();
}
