/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Template */
/* DESCRIPTION : JavaScript functions accessable by all pages */
/* AUTHOR:     : Malcolm Malloy */

/* -------------------------------------- */
/* URLS */
/* -------------------------------------- */

var staticAssetsURL = "../";
var contentURL      = "https://oceanus.me/content/";
var navHomeURL      = "https://oceanus.me";
var navGamesURL     = "https://oceanus.me/games";
var navMapURL       = "https://oceanus.me/map";
var navContentURL   = "https://oceanus.me/content/1";
var navAboutURL     = "https://oceanus.me/about";


/********** DEV MODE **********/
/* IMPORTANT NOTE : Remove before deployment!!! */
var devmode = false;

if (devmode) {
  console.log("!! ----- DEV MODE ACTIVATED! -----!!");
  console.log("!! -- Remove before deployment! --!!");
  console.log("!! -------------------------------!!");

  staticAssetsURL = "../";
  contentURL      = "content.html";
  navHomeURL      = "index.html";
  navGamesURL     = "games.html";
  navMapURL       = "map.html";
  navContentURL   = "content.html";
  navAboutURL     = "about.html";

  console.log("DEV MODE : URLs modified for local development!");

};
/********** DEV MODE **********/

/* ------------------------------------ */
/* TEMPLATE : BUILD HEADER (HTML BLOCK) */
/* ------------------------------------ */

function buildHeader() {
  var header = `
  <div id="nav_container" class="nav-container">

    <a href="` + navHomeURL + `"><img src="` + staticAssetsURL + `images/oceanusLogo.png" class="logo"></a>

    <div class="nav-option-group">
      <ul>
        <li class="nav-option"><a href="` + navGamesURL + `">Games</a></li>
        <li class="nav-option"><a href="` + navContentURL + `">Adventure Quiz</a></li>
        <li class="nav-option"><a href="` + navMapURL + `">Explore</a></li>
      </ul>
    </div>

  </div>
  `;

  $('.header').append(header);

}

/* ------------------------------------ */
/* TEMPLATE : BUILD FOOTER (HTML BLOCK) */
/* ------------------------------------ */

function buildFooter() {

  var thisYear = new Date().getFullYear().toString();
  var footer = `
    <div class="footer-text">
      <p>The Oceanus Project was created by Sharks in Suits as a part of Monash University's FIT5120 Industrial Experience Program.</p>
      <p>(MA01) The Oceanus Project &copy; ` + thisYear + `</p>
    </div>
  `;

  $('.footer').append(footer);

}
