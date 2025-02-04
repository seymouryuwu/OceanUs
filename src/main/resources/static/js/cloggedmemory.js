/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Clogged Memory Page */
/* DESCRIPTION : JavaScript functions only applicable to the clogged memory page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/cloggedmemory.html */

/* ------------------------------- */
/* CLOGGED MEMORY : SIMULATED APIS */
/* ------------------------------- */
/* A simulated API that can be set in the backend in future iterations */

var memoryData = {
  "levelPackId":1,
  "level":[
    {
      "levelID":1,
      "levelName":"Level 1",
      "levelWidth":4,
      "levelheight":4,
      "levelDuration":60
    },
    {
      "levelID":2,
      "levelName":"Level 2",
      "levelWidth":3,
      "levelheight":3,
      "levelDuration":60
    }
  ]
}

var deckData = {
  "cardBack":"Oceanus",
  "cardBackURL":"../images/memory/deck01/Back.png",
  "cards":[
    {
      "cardID":1,
      "cardMatchID":9,
      "cardName":"Baking Soda",
      "cardDescription":"Baking Soda",
      "cardImageURL":"../images/memory/deck01/BakingSoda.png",
    },
    {
      "cardID":2,
      "cardMatchID":10,
      "cardName":"Coffee",
      "cardDescription":"Coffee",
      "cardImageURL":"../images/memory/deck01/CoffeeGround.png",
    },
    {
      "cardID":3,
      "cardMatchID":11,
      "cardName":"Eggshell",
      "cardDescription":"Eggshell",
      "cardImageURL":"../images/memory/deck01/Eggshell.png",
    },
    {
      "cardID":4,
      "cardMatchID":12,
      "cardName":"Face Tissue",
      "cardDescription":"Face Tissue",
      "cardImageURL":"../images/memory/deck01/Facetissue.png",
    },
    {
      "cardID":5,
      "cardMatchID":13,
      "cardName":"Fruit Peels",
      "cardDescription":"Fruit Peels",
      "cardImageURL":"../images/memory/deck01/Fruitpeels.png",
    },
    {
      "cardID":6,
      "cardMatchID":14,
      "cardName":"Oil",
      "cardDescription":"Oil",
      "cardImageURL":"../images/memory/deck01/Oil.png",
    },
    {
      "cardID":7,
      "cardMatchID":15,
      "cardName":"Soup",
      "cardDescription":"Soup",
      "cardImageURL":"../images/memory/deck01/Soup.png",
    },
    {
      "cardID":8,
      "cardMatchID":16,
      "cardName":"Toilet Paper",
      "cardDescription":"Toilet Paper",
      "cardImageURL":"../images/memory/deck01/Toiletpaper.png",
    },
    {
      "cardID":9,
      "cardMatchID":1,
      "cardName":"Baking Soda",
      "cardDescription":"Baking Soda",
      "cardImageURL":"../images/memory/deck01/BakingSoda.png",
    },
    {
      "cardID":10,
      "cardMatchID":2,
      "cardName":"Coffee",
      "cardDescription":"Coffee",
      "cardImageURL":"../images/memory/deck01/CoffeeGround.png",
    },
    {
      "cardID":11,
      "cardMatchID":3,
      "cardName":"Eggshell",
      "cardDescription":"Eggshell",
      "cardImageURL":"../images/memory/deck01/Eggshell.png",
    },
    {
      "cardID":12,
      "cardMatchID":4,
      "cardName":"Face Tissue",
      "cardDescription":"Face Tissue",
      "cardImageURL":"../images/memory/deck01/Facetissue.png",
    },
    {
      "cardID":13,
      "cardMatchID":5,
      "cardName":"Fruit Peels",
      "cardDescription":"Fruit Peels",
      "cardImageURL":"../images/memory/deck01/Fruitpeels.png",
    },
    {
      "cardID":14,
      "cardMatchID":6,
      "cardName":"Oil",
      "cardDescription":"Oil",
      "cardImageURL":"../images/memory/deck01/Oil.png",
    },
    {
      "cardID":15,
      "cardMatchID":7,
      "cardName":"Soup",
      "cardDescription":"Soup",
      "cardImageURL":"../images/memory/deck01/Soup.png",
    },
    {
      "cardID":16,
      "cardMatchID":8,
      "cardName":"Toilet Paper",
      "cardDescription":"Toilet Paper",
      "cardImageURL":"../images/memory/deck01/Toiletpaper.png",
    }
  ]
}

/* --------------------------------- */
/* CLOGGED MEMORY : GLOBAL VARIABLES */
/* --------------------------------- */

var blockXY = [];
var shuffledDeck = [];
var start = '';
var selectedCard1 = '';
var selectedCard2 = '';
var userAttempts = 0;
var userMatches = 0;
var maxMatches = 0;
var levelTimer = 0;
var timePassed = 0;
var timeRemaining = 0;

//Delay before cards flip face down (seconds)
var flipDelay = 1;

var aid = '';

/* ----------------------------- */
/* CLOGGED MEMORY : ON PAGE LOAD */
/* ----------------------------- */

$( document ).ready(function() {

  let searchParams = new URLSearchParams(window.location.search);
  aid = searchParams.get('aid');

  preloadImages();
  buildMemoryGame();
  dealCards();

});

/* ------------------------ */
/* CLOGGED MEMORY : GENERAL */
/* ------------------------ */

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

/* --------------------------------------------- */
/* CLOGGED MEMORY : BUILD MEMORY GAME HTML BLOCK */
/* --------------------------------------------- */
/* Builds the HTML structure of the board */

function buildMemoryGame() {

  var levelID = memoryData.level[0].levelID;
  var levelName = memoryData.level[0].levelName;
  var width = memoryData.level[0].levelWidth;
  var height = memoryData.level[0].levelheight;
  var levelDuration = memoryData.level[0].levelDuration;

  var firstRow = 0;

  $('#memory_game_section').append(`

    <div id="memory_game" class="memory-game">
    </div>

    <div id="game_over_modal" >
    </div>

  `);

  //Create grid of divs
  for(x = 0; x < height; x++) {

    //Add rows
    $('#memory_game').append(`
        <div class="row row-` + x + `">
        </div>
    `);

    //Spacer
    //TODO : Future iteration - calculate spacers dynamically based on the width
    $('.row-' + x).append(`
      <div class="col-1">
      </div>
    `);

    for(y = 0; y < width; y++) {
      //Add cols
      $('.row-' + x).append(`
        <div class="card-block col-2 col-` + x + `-` + y + `">
        </div>
      `);

      //Add card positions to blockXY array
      blockXY.push( {
        x : x,
        y : y,
      });

    }

    //Spacer
    //TODO : Future iteration - calculate spacers dynamically based on the width
    if (firstRow == 0) {
      $('.row-' + x).append(`
        <div class="col-2">
          <p id="memory_timer"><span class="span-red"> ` + levelDuration + `</span></p>
          <p id="memory_score"><span class="span-blue"></span></p>
        </div>
      `);

      firstRow++;
    } else if  (firstRow == 1) {
      $('.row-' + x).append(`
        <div class="col-2">
          <a class="start-game" onClick="dealCards();startLevel();">
            <img src="../images/start.png">
          </a>
          <a class="exit-game" onClick="exitGame();">
            <img src="../images/exit.png">
          </a>
        </div>
      `);

      firstRow++;
    } else {
      $('.row-' + x).append(`
        <div class="col-2">
        </div>
      `);
    }

    $('.row-' + x).append(`
      <div class="col-1">
      </div>
    `);

  }
}

/* --------------------------- */
/* CLOGGED MEMORY : DEAL CARDS */
/* --------------------------- */
/* Distribute the cards across the board */

function dealCards() {

  //Clear global variables
  shuffledDeck = [];
  selectedCard1 = "";
  selectedCard2 = "";
  userAttempts = 0;
  userMatches = 0;
  maxMatches = 0;
  levelTimer = 0;
  timePassed = 0;
  timeRemaining = 0;

  //Remove all cards from the board
  $('.memory-card').remove();

  //Shuffle the deck and store as global variable
  shuffledDeck = shuffle(deckData.cards);

  //Count the maximum amount of matches and store as a global variable
  maxMatches = shuffledDeck.length / 2;

  //Display the max amout of matches to user
  $('#memory_score .span-blue').text('Score 0/' + maxMatches)

  //Add a Card to each grid position
  for(i = 0; i < blockXY.length; i++) {

    var x = blockXY[i].x;
    var y = blockXY[i].y;
    var cardBack = deckData.cardBack;
    var cardBackURL = deckData.cardBackURL;
    var cardID = shuffledDeck[i].cardID;
    var cardMatchID = shuffledDeck[i].cardMatchID; //TODO: Remove Before release
    var cardName = shuffledDeck[i].cardName; //NOTE: Currently Unused
    var cardDescription = shuffledDeck[i].cardDescription;
    var cardImageURL = shuffledDeck[i].cardImageURL;
    var cardImages = new Image();image1.src = "image1.jpg";

    $('.col-' + x + '-' + y).append(`
      <div id="card-` + cardID + `" class="memory-card" onClick="selectCard(` + cardID + `)">
        <img id="card-image-` + cardID + `" class="memory-card-image memory-card-hover shadowfilter" src="` + cardBackURL + `" alt="` + cardDescription + `">
      </div>
    `);

  }

}


/* ---------------------------- */
/* CLOGGED MEMORY : START LEVEL */
/* ---------------------------- */
/* Begins the timer and enables the cards to be clicked */

function startLevel() {

  //Hide start button
  $('.start-game').hide();

  //Enable tile blocks
  $('.card-block').css('pointer-events', 'auto').css('filter', 'brightness(100%)');

  //Hide game over feedback
  $('#memory_over_section').hide();

  //Show memory game
  $('#memory_game_section').show();

  var levelDuration = memoryData.level[0].levelDuration;
  startTimer(levelDuration);

}


/* ---------------------------- */
/* CLOGGED MEMORY : SELECT CARD */
/* ---------------------------- */
/* Sorts the card into first and second selection and flips the card */

function selectCard(id) {

  if (!selectedCard1) {

    //First Card Select
    selectedCard1 = parseInt(id);

    for(i = 0; i < shuffledDeck.length; i++) {
      if (selectedCard1 == shuffledDeck[i].cardID) {
        var cardID = shuffledDeck[i].cardID;
        var cardImageURL = shuffledDeck[i].cardImageURL;
        $('#card-image-' + cardID).attr('src', cardImageURL);
      }
    }


  } else if (!selectedCard2) {

    //Second Card Select
    selectedCard2 = parseInt(id);

    for(i = 0; i < shuffledDeck.length; i++) {
      if (selectedCard2 == shuffledDeck[i].cardID) {

        var cardID = shuffledDeck[i].cardID;
        var cardImageURL = shuffledDeck[i].cardImageURL;
        var cardMatchID = shuffledDeck[i].cardMatchID;

        //Flip card face up
        $('#card-image-' + cardID).attr('src', cardImageURL);

        checkSelection(cardImageURL);

      }
    }

    clearUserSelections();

  } else {

    clearUserSelections();
  }

}


/* --------------------------- */
/* CLOGGED MEMORY : COVER CARD */
/* --------------------------- */
/* Flips the card face down */

function coverCard(cardID) {
  var cardBackURL = deckData.cardBackURL;
  $('#card-image-' + cardID).attr('src', cardBackURL);
}


/* ------------------------------------- */
/* CLOGGED MEMORY : CLEAR USER SELECTION */
/* ------------------------------------- */
/* Clears the selected card variable */

function clearUserSelections() {
  selectedCard1 = '';
  selectedCard2 = '';
}


/* -------------------------------- */
/* CLOGGED MEMORY : CHECK SELECTION */
/* -------------------------------- */
/* Checks if the cards are a match and updates the score. Highlights matches green and Highlights mismatches red */

function checkSelection() {

  var card1 = selectedCard1;
  var card2 = selectedCard2;
  var match = false;

  //If the cards match
  for(i = 0; i < shuffledDeck.length; i++) {
    if (card1 == shuffledDeck[i].cardID) {
      var matchingCard = shuffledDeck[i].cardMatchID;
      if (card2 == matchingCard) {

        //Remove onclick function and ability to click
        $('#card-' + card1).prop("onclick", null).off("click").css('cursor', 'inherit').off('hover');
        $('#card-' + card2).prop("onclick", null).off("click").css('cursor', 'inherit').off('hover');

        //Add one to user matches and user attempts global variables
        userMatches++;
        userAttempts++;

        //User feedback that there has been a match and remove hover state
        $('#card-image-' + card1).addClass('green-highlight').removeClass('memory-card-hover');
        $('#card-image-' + card2).addClass('green-highlight').removeClass('memory-card-hover');


        match = true;

        if (userMatches == maxMatches) {
          winGame();
        }
      }
    }
  }

  //If the cards do not match
  if (!match) {

    //Add one to user attempts global variable
    userAttempts++;


    //Highlight cards red
    $('#card-image-' + card1).toggleClass('red-highlight');
    $('#card-image-' + card2).toggleClass('red-highlight');

    //Flip cards over and remove highlight
    setTimeout(function() {
      coverCard(card1);
      coverCard(card2);
      $('#card-image-' + card1).toggleClass('red-highlight');
      $('#card-image-' + card2).toggleClass('red-highlight');
    }, flipDelay * 1000);

  }

  //Update score
  $('#memory_score .span-blue').text('Score ' + userMatches + '/' + maxMatches)

  //Clear the global variables
  clearUserSelections();

}


/* ---------------------------- */
/* CLOGGED MEMORY : START TIMER */
/* ---------------------------- */
/* Start the timer (duration is set in the API). Ends the game when the timer reaches zero */

function startTimer(levelDuration) {

  //Get start time
  start = new Date;

  //Stop Timer
  clearInterval(levelTimer);

  //Start timer
  levelTimer = setInterval(function() {

    timePassed = Math.round((new Date - start) / 1000, 0);
    timeRemaining = levelDuration - timePassed;

    if (timeRemaining > 0) {

      //Update timer text
      $('#memory_timer .span-red').text(timeRemaining);

    } else if (timeRemaining == 0) {

      //Update timer text
      $('#memory_timer .span-red').text(timeRemaining);

      //Stop Timer
      // clearInterval(levelTimer);

      //End the game
      endGame();

    } else {

      console.log("Error! timer variable out of range.");

    }

  }, 1000);



}


/* ------------------------- */
/* CLOGGED MEMORY : WIN GAME */
/* ------------------------- */
/* Stops the timer, shows feedback modal with a success message and posts the results to the controller */

function winGame() {

  //Stop Timer
  clearInterval(levelTimer);

  $('.exit-game').hide();

  //Game Won
  var result = {
    score : timeRemaining,
    gameId : 3
  };

  //Post game results to API
  $.ajax({
    url: '/game/postgameresult',
    type: 'POST',
    data: JSON.stringify(result),
    dataType: 'json',
    contentType : "application/json",
    beforeSend:function(xhr){
      xhr.setRequestHeader(header, token);
    },
    success: function(response, textStatus, jqXHR) {
      console.log("Results posted!");
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  });

  //Show game over feedback
  $('#memory_over_section').show();

  //Hide memory game
  $('#memory_game_section').hide();

  $('#user_matches').text(userMatches + "/" + maxMatches);
  $('#user_message_1').text("You won!");
  $('#user_remaining').text(timeRemaining + " seconds to spare!");
  $('#user_attempts').text("You made " + userAttempts + " attempts to find a match!");

}


/* ------------------------- */
/* CLOGGED MEMORY : END GAME */
/* ------------------------- */
/* Posts game results to the controller API and displays feedback */

function endGame() {

  //Stop Timer
  clearInterval(levelTimer);

  $('.exit-game').hide();

  //Game lost: No score
  var result = {
    score : 0,
    gameId : 3
  };

  //Post game results to API
  $.ajax({
    url: '/game/postgameresult',
    type: 'POST',
    data: JSON.stringify(result),
    dataType: 'json',
    contentType : "application/json",
    beforeSend:function(xhr){
      xhr.setRequestHeader(header, token);
    },
    success: function(response, textStatus, jqXHR) {
      console.log("Results posted!");
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  });

  //Show game over feedback
  $('#memory_over_section').show();

  //Hide memory game section
  $('#memory_game_section').hide();

  $('#user_matches').text(userMatches + " / " + maxMatches);
  $('#user_message_1').text("Oh no!");
  $('#user_message_2').text("You ran out of time!");
  $('#user_attempts').text("You made " + userAttempts + " attempts to find a match!");

}

/* -------------------------- */
/* CLOGGED MEMORY : EXIT GAME */
/* -------------------------- */
/* Post a zero score to the controller API and navigates to the appropriate page.
   Navigates to the next article if the aid variable is set in the URL.
   Navigates to the previous page if no aid is set */

function exitGame() {

    //Game lost: No score
    var result = {
      score : 0,
      gameId : 3
    };

    //Post game results to API
    $.ajax({
      url: '/game/postgameresult',
      type: 'POST',
      data: JSON.stringify(result),
      dataType: 'json',
      contentType : "application/json",
      beforeSend:function(xhr){
        xhr.setRequestHeader(header, token);
      },
      success: function(response, textStatus, jqXHR) {
        console.log("Results posted!");
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(textStatus, errorThrown);
      }
    });

  if (aid && aid != 0) {
    window.open('adventurequiz/' + aid, '_self');
  } else {
    window.history.back();
  }
}


/* -------------------------- */
/* CLOGGED MEMORY : SHOW GAME */
/* -------------------------- */
/* Hides the instructions and displays the game */

function showGame() {

    //Show game over feedback
    $('#memory_game_section').show();

    //Hide pipe game section
    $('#instructions_section').hide();

}
