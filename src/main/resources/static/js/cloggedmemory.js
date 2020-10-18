/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Test */
/* DESCRIPTION : Test Javascript */
/* AUTHOR:     : Malcolm Malloy */

/* -------------------------------------- */
/* SIMULATED APIS */
/* -------------------------------------- */

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

/* -------------------------------------- */
/* GLOBAL VARIABLES */
/* -------------------------------------- */

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

/* -------------------------------------- */
/* ON PAGE LOAD */
/* -------------------------------------- */

$( document ).ready(function() {

  let searchParams = new URLSearchParams(window.location.search);
  aid = searchParams.get('aid');

  buildMemoryGame();
  dealCards();
  // startLevel();
});

/* -------------------------------------- */
/* UTILITIES */
/* -------------------------------------- */

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

/* -------------------------------------- */
/* BUILD MEMORY GAME HTML BLOCK */
/* -------------------------------------- */

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
    //TODO : calculate spacers dynamically based on the width
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
    //TODO : calculate spacers dynamically based on the width
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

    $('.col-' + x + '-' + y).append(`
      <div id="card-` + cardID + `" class="memory-card" onClick="selectCard(` + cardID + `)">
        <img id="card-image-` + cardID + `" class="memory-card-image memory-card-hover shadowfilter" src="` + cardBackURL + `" alt="` + cardDescription + `">
      </div>
    `);

  }

}

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

function coverCard(cardID) {
  var cardBackURL = deckData.cardBackURL;
  $('#card-image-' + cardID).attr('src', cardBackURL);
}

function clearUserSelections() {
  selectedCard1 = '';
  selectedCard2 = '';
}

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


/* -------------------------------------- */
/* WIN GAME */
/* -------------------------------------- */

function winGame() {

  //Stop Timer
  clearInterval(levelTimer);

  //Show game over feedback
  $('#memory_over_section').show();

  //Hide memory game
  $('#memory_game_section').hide();

  $('#user_matches').text(userMatches + "/" + maxMatches);
  $('#user_message_1').text("You won!");
  $('#user_remaining').text(timeRemaining + " seconds to spare!");
  $('#user_attempts').text("You made " + userAttempts + " attempts to find a match!");

}


/* -------------------------------------- */
/* END GAME */
/* -------------------------------------- */


function endGame() {

  //Stop Timer
  clearInterval(levelTimer);

  //Show game over feedback
  $('#memory_over_section').show();

  //Hide memory game section
  $('#memory_game_section').hide();

  $('#user_matches').text(userMatches + " / " + maxMatches);
  $('#user_message_1').text("Oh no!");
  $('#user_message_2').text("You ran out of time!");
  $('#user_attempts').text("You made " + userAttempts + " attempts to find a match!");

}

/* -------------------------------------- */
/* EXIT GAME */
/* -------------------------------------- */

function exitGame() {
  console.log(aid);
  if (aid && aid != 0) {
    window.open('content/' + aid, '_self');
  } else {
    window.history.back();
  }
}


/* -------------------------------------- */
/* SHOW GAME */
/* -------------------------------------- */

function showGame() {

    //Show game over feedback
    $('#memory_game_section').show();

    //Hide pipe game section
    $('#instructions_section').hide();

}
