/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Test */
/* DESCRIPTION : Test Javascript */
/* AUTHOR:     : Malcolm Malloy */

/* -------------------------------------- */
/* SIMULATED APIS */
/* -------------------------------------- */

var pipeData = {

  "levelPackId":1,

  "level":[
    {
      "levelID":1,
      "levelName":"Poppies Puzzle",
      "levelWidth":6,
      "levelheight":4,
      "levelDuration":60,

    }
  ],

  "pipeMap":[
    //1-1
    {
      "pipeID":1,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90
    },
    //1-2
    {
      "pipeID":2,
      "tileType":"Tee",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90,
      "pipeCorrectRotationB": 180
    },
    //1-3
    {
      "pipeID":3,
      "tileType":"Straight",
      "pipeMainPath":false
    },
    //1-4
    {
      "pipeID":4,
      "tileType":"Corner",
      "pipeMainPath":false
    },
    //1-5
    {
      "pipeID":5,
      "tileType":"Straight",
      "pipeMainPath":false
    },
    //1-6
    {
      "pipeID":6,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90
    },
    //2-1
    {
      "pipeID":7,
      "tileType":"Cross",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 0,
      "pipeCorrectRotationB": 90,
      "pipeCorrectRotationC": 180,
      "pipeCorrectRotationD": 270
    },
    //2-2
    {
      "pipeID":8,
      "tileType":"Straight",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90,
      "pipeCorrectRotationB": 270
    },
    //2-3
    {
      "pipeID":9,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90
    },
    //2-4
    {
      "pipeID":10,
      "tileType":"Straight",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 0,
      "pipeCorrectRotationB": 180
    },
    //2-5
    {
      "pipeID": 11,
      "tileType":"Cross",
      "pipeMainPath": true,
      "pipeCorrectRotationA": 0,
      "pipeCorrectRotationB": 90,
      "pipeCorrectRotationC": 180,
      "pipeCorrectRotationD": 270
    },
    //2-6
    {
      "pipeID":12,
      "tileType":"Tee",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 180,
      "pipeCorrectRotationB": 270
    },
    //3-1
    {
      "pipeID":13,
      "tileType":"Straight",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 90,
      "pipeCorrectRotationB": 270
    },
    //3-2
    {
      "pipeID":14,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 0
    },
    //3-3
    {
      "pipeID":15,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 270,
    },
    //3-4
    {
      "pipeID":16,
      "tileType":"Straight",
      "pipeMainPath":false,
    },
    //3-5
    {
      "pipeID":17,
      "tileType":"Corner",
      "pipeMainPath":false,
    },
    //3-6
    {
      "pipeID":18,
      "tileType": "Corner",
      "pipeMainPath":false,
    },
    //4-1
    {
      "pipeID":19,
      "tileType":"Corner",
      "pipeMainPath":true,
      "pipeCorrectRotationA": 270,
    },
    //4-2
    {
      "pipeID":20,
      "tileType":"Straight",
      "pipeMainPath":false,
    },
    //4-3
    {
      "pipeID":21,
      "tileType":"Straight",
      "pipeMainPath":false,
    },
    //4-4
    {
      "pipeID":22,
      "tileType":"Corner",
      "pipeMainPath":false,
    },
    //4-5
    {
      "pipeID":23,
      "tileType":"Straight",
      "pipeMainPath":false,
    },
    //4-6
    {
      "pipeID":24,
      "tileType":"Corner",
      "pipeMainPath":false,
    }
  ],

  "tiles":[
    {
      "tileID":1,
      "tileType":"Tee",
      "tileName":"T Shaped Pipe",
      "tileDescription":"T Shaped Pipe",
      "tileImageURL":"../images/pipe-game/t_pipe.png",
    },
    {
      "tileID":2,
      "tileType":"Straight",
      "tileName":"Straight Pipe",
      "tileDescription":"Straight Pipe",
      "tileImageURL":"../images/pipe-game/straight_pipe.png",
    },
    {
      "tileID":3,
      "tileType":"Corner",
      "tileName":"Corner Pipe",
      "tileDescription":"Corner Pipe",
      "tileImageURL":"../images/pipe-game/corner_pipe.png",
    },
    {
      "tileID":4,
      "tileType":"Cross",
      "tileName":"Cross Pipe",
      "tileDescription":"Cross Pipe",
      "tileImageURL":"../images/pipe-game/cross_pipe.png",
    }
  ]
}


/* -------------------------------------- */
/* GLOBAL VARIABLES */
/* -------------------------------------- */

var pipeBlockXY = [];
var pipeStart = '';
var pipeLevelTimer = 0;
var pipeTimePassed = 0;
var pipeTimeRemaining = 0;

var aid = '';

/* -------------------------------------- */
/* ON PAGE LOAD */
/* -------------------------------------- */

$( document ).ready(function() {

  let searchParams = new URLSearchParams(window.location.search);
  aid = searchParams.get('aid');

  buildPipeGame();
  dealtiles();

});

/* -------------------------------------- */
/* BUILD PIPE GAME HTML BLOCK */
/* -------------------------------------- */

function buildPipeGame() {

  var pipeLevelID = pipeData.level[0].levelID;
  var pipeLevelName = pipeData.level[0].levelName;
  var pipeWidth = pipeData.level[0].levelWidth;
  var pipeHeight = pipeData.level[0].levelheight;
  var pipeLevelDuration = pipeData.level[0].levelDuration;

  $('#pipe_game_section').append(`

    <div id="pipe_game">
    </div>

    <div id="game_over_modal" >
    </div>

  `);

  //Create grid of divs
  //TODO : make the grid dynamic
  for(x = 0; x < pipeHeight; x++) {

    //Add rows
    $('#pipe_game').append(`
        <div class="row pipe-row-` + x + `">
        </div>
    `);

    if (x == 3) {
      //Left Spacer with factory
      $('.pipe-row-' + x).append(`
        <div class="col-3">
          <div class="factory-image">
            <img src="../images/pipe-game/Factory.png">
          </div>
        </div>
      `);
    } else {
      //Left Spacer without factory
      $('.pipe-row-' + x).append(`
        <div class="col-3">
        </div>
      `);
    }


    for(y = 0; y < pipeWidth; y++) {

      //Add cols
      $('.pipe-row-' + x).append(`
        <div class="tile-block col-1 pipe-col-` + x + `-` + y + ` no-padding">
        </div>
      `);

      //Add tile positions to pipeBlockXY array
      pipeBlockXY.push( {
        x : x,
        y : y,
      });

    }

    //Game information
    if (x == 0) {

      //Display game controls
      // $('.pipe-row-' + x).append(`
      //   <div class="col-2">
      //     <p id="pipe_timer"> ` + pipeLevelDuration + `</p>
      //     <a class="start-game" onClick="pipeStartLevel();">START</a>
      //   </div>
      // `);

      //Right Spacer with girl image
      $('.pipe-row-' + x).append(`
        <div class="col-3">
          <div class="girl-image">
            <img src="../images/pipe-game/Girl.png">
          </div>
        </div>
      `);

    } else {

      //Right Spacer without girl image
      $('.pipe-row-' + x).append(`
        <div class="col-3">
        </div>
      `);

    }

  }

  //Add game menu
  $('#pipe_game').append(`
      <div class="row game-menu">
        <div class="col-12">
          <p id="pipe_timer"> ` + pipeLevelDuration + `</p>
          <a class="start-game" onClick="pipeStartLevel();">
            <img src="../images/start.png">
          </a>
          <a class="exit-game" onClick="pipeExitGame();">
            <img src="../images/exit.png">
          </a>
        </div>
      </div>
  `);

}


/* -------------------------------------- */
/* DISTRIBUTE TILES ACCROSS GRID */
/* -------------------------------------- */

function dealtiles() {

  //Clear global variables
  pipeLevelTimer = 0;
  pipeTimePassed = 0;
  pipeTimeRemaining = 0;

  //Remove all tiles from the board
  $('.pipe-tile').remove();

  //Add a tile to each grid position
  for(i = 0; i < pipeBlockXY.length; i++) {

    var x = pipeBlockXY[i].x;
    var y = pipeBlockXY[i].y;

    var pipeID = pipeData.pipeMap[i].pipeID;
    var tileType = pipeData.pipeMap[i].tileType;
    var pipeMainPath = pipeData.pipeMap[i].pipeMainPath;

    var randDeg = 0;

    switch ( Math.round(Math.random() * 3) ) {
      case 0:
        randDeg = 0;
        break;
      case 1:
        randDeg = 90;
        break;
      case 2:
        randDeg = 180;
        break;
      case 3:
        randDeg = 270;
        break;
      default:

    }

    var tileImageURL = '';
    var tileDescription = '';

    //Get correct pipe image
    for(o = 0; o < pipeData.tiles.length; o++) {
      if (tileType == pipeData.tiles[o].tileType) {
        tileImageURL = pipeData.tiles[o].tileImageURL;
        tileDescription = pipeData.tiles[o].tileDescription;
      }
    }

    //Create tile
    $('.pipe-col-' + x + '-' + y).append(`
      <div id="tile-` + pipeID + `" class="pipe-tile" data-deg="` + randDeg + `" data-revolution="0" onClick="selectTile(` + pipeID + `)" style="transform: rotate(` + randDeg + `deg)">
        <img class="pipe-tile-image shadowfilter" src="` + tileImageURL + `" alt="` + tileDescription + `">
      </div>
    `);


  }

}


/* -------------------------------------- */
/* START LEVEL */
/* -------------------------------------- */

function pipeStartLevel() {

  //Hide start button
  $('.start-game').hide();

  //Enable tile blocks
  $('.tile-block').css('pointer-events', 'auto').css('filter', 'brightness(100%)');

  //Hide game over feedback
  $('#pipe_over_section').hide();

  //Show pipe game
  $('#pipe_game_section').show();

  var pipeLevelDuration = pipeData.level[0].levelDuration;
  pipeStartTimer(pipeLevelDuration);

}


/* -------------------------------------- */
/* START TIMER */
/* -------------------------------------- */

function pipeStartTimer(pipeLevelDuration) {

  //Get start time
  pipeStart = new Date;

  //Stop Timer
  clearInterval(pipeLevelTimer);

  //Start timer
  pipeLevelTimer = setInterval(function() {

    pipeTimePassed = Math.round((new Date - pipeStart) / 1000, 0);
    pipeTimeRemaining = pipeLevelDuration - pipeTimePassed;

    if (pipeTimeRemaining > 0) {

      //Update timer text
      $('#pipe_timer').text(pipeTimeRemaining);

    } else if (pipeTimeRemaining == 0) {

      //Update timer text
      $('#pipe_timer').text(pipeTimeRemaining);

      //End the game
      pipeEndGame();

    } else {

      console.log("Error! timer variable out of range.");

    }

  }, 1000);



}


/* -------------------------------------- */
/* SELECT TILE */
/* -------------------------------------- */

function selectTile(id) {

  //Get current degrees of rotation from data attribute
  var currentDeg = parseInt($('#tile-' + id).attr('data-deg'));

  //Get current count of how many rotations have passed
  var rotation = parseInt($('#tile-' + id).attr('data-revolution'));

  //Calculate how much to rotate the tile
  switch (currentDeg) {
    case 0:
      $('#tile-' + id).css('transition', 'transform 0.3s ease-in-out');
      $('#tile-' + id).css('transform', 'rotate(' + ((rotation * 360) + 90) + 'deg)');
      $('#tile-' + id).attr('data-deg', 90);
      break;
    case 90:
      $('#tile-' + id).css('transition', 'transform 0.3s ease-in-out');
      $('#tile-' + id).css('transform', 'rotate(' + ((rotation * 360) + 180) + 'deg)');
      $('#tile-' + id).attr('data-deg', 180);
      break;
    case 180:
      $('#tile-' + id).css('transition', 'transform 0.3s ease-in-out');
      $('#tile-' + id).css('transform', 'rotate(' + ((rotation * 360) + 270) + 'deg)');
      $('#tile-' + id).attr('data-deg', 270);
      break;
    case 270:
      rotation++;
      $('#tile-' + id).css('transition', 'transform 0.3s ease-in-out');
      $('#tile-' + id).css('transform', 'rotate(' + ((rotation * 360) + 0) + 'deg)');
      $('#tile-' + id).attr('data-deg', 0);
      break;
    default:
      $('#tile-' + id).css('transition', 'transform 0.3s ease-in-out');
      $('#tile-' + id).css('transform', 'rotate(' + ((rotation * 360) + 0) + 'deg)');
      $('#tile-' + id).attr('data-deg', 0);
  }

  //Update the revolution data attribute
  $('#tile-' + id).attr('data-revolution', rotation);

  for(i = 0; i < pipeData.pipeMap.length; i++) {

    if(pipeData.pipeMap[i].pipeID == id) {

      var pipeMainPath = pipeData.pipeMap[i].pipeMainPath;

      //Check if tile is critical path
      if(pipeMainPath) {

        currentDeg = parseInt($('#tile-' + id).attr('data-deg'));

        var rotationA = pipeData.pipeMap[i].pipeCorrectRotationA;
        var rotationB = pipeData.pipeMap[i].pipeCorrectRotationB;

        //TESTING : Highlights bricks background to red if its part of the solution
        // $('#tile-' + id).css('background-color', 'red');

        if (currentDeg == rotationA || currentDeg == rotationB) {
          //TESTING : Highlights brick background to green if correct location
          // $('#tile-' + id).css('background-color', 'green');
          checkSolution();
        }

      }
    }
  }



}


/* -------------------------------------- */
/* SELECT TILE */
/* -------------------------------------- */

function checkSolution() {

  var criticaPathCount = 0;
  var criticalTiles = [];
  var matches = 0;

  for(i = 0; i < pipeData.pipeMap.length; i++) {
    if (pipeData.pipeMap[i].pipeMainPath) {
      criticaPathCount++;
    }
  }


  //Checks if the critical path bricks are rotated to the correct direction to complete the quiz
  for(i = 0; i < pipeData.pipeMap.length; i++) {

    var pipeMainPath = pipeData.pipeMap[i].pipeMainPath;



    //Check if tile is critical path
    if(pipeMainPath) {

      var id = pipeData.pipeMap[i].pipeID;

      criticalTiles.push(id);
      //TESTING: Highlights entire critical path
      // $('#tile-' + id).css('background-color', 'blue');

      var rotationA = pipeData.pipeMap[i].pipeCorrectRotationA;
      var rotationB = pipeData.pipeMap[i].pipeCorrectRotationB;
      var rotationC = pipeData.pipeMap[i].pipeCorrectRotationC;
      var rotationD = pipeData.pipeMap[i].pipeCorrectRotationD;

      var currentDeg = parseInt($('#tile-' + id).attr('data-deg'));

      if (currentDeg == rotationA || currentDeg == rotationB || currentDeg == rotationC || currentDeg == rotationD) {
        matches++;
      }

      if (matches == criticaPathCount) {
        console.log("You win!");

        //Highlight Critical path
        for(x = 0; x < criticalTiles.length; x++) {
          console.log(criticalTiles[x]);
          $('#tile-' + criticalTiles[x]).addClass('green-highlight');
        }

        //Stop Timer
        clearInterval(pipeLevelTimer);

        //Enable tile blocks
        $('.tile-block').css('pointer-events', 'none');

        //TODO: Highlight finished critical path with .green-highlight
        setTimeout(function() {
          pipeEndGame();
        }, 5000);

      }

    }

  }

}

/* -------------------------------------- */
/* END GAME */
/* -------------------------------------- */

function pipeEndGame() {

  //Stop Timer
  clearInterval(pipeLevelTimer);

  //Show game over feedback
  $('#pipe_over_section').show();

  //Hide pipe game section
  $('#pipe_game_section').hide();

  console.log(pipeTimeRemaining);

  $('#user_remaining').text(pipeTimeRemaining + " seconds to spare!");

}

/* -------------------------------------- */
/* EXIT GAME */
/* -------------------------------------- */

function pipeExitGame() {

  if (aid && aid != 0) {
    window.open('content/' + aid, '_self');
  } else {
    window.history.back();
  }

}


/* -------------------------------------- */
/* SHOW GAME */
/* -------------------------------------- */

function showPipeGame() {

    //Show game over feedback
    $('#pipe_game_section').show();

    //Hide pipe game section
    $('#pipe_instructions_section').hide();

}
