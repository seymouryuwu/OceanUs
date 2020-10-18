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
var contentURL      = "/content/";
var navHomeURL      = "/";
var navGamesURL     = "/games";
var navMapURL       = "/map";
var navContentURL   = "/content/1";
var navAboutURL     = "/about";
var navProfileURL   = "/profile";
var navLoginURL     = "/login";
var navLogoutURL     = "/logout";


/********** DEV MODE **********/
/* IMPORTANT NOTE : Remove before deployment!!! */
var devmode = false;
;

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
  navProfileURL   = "profile.html";
  navLoginURL     = "login.html";
  navLoginURL     = "index.html";

  console.log("DEV MODE : URLs modified for local development!");

  isLoggedIn = true;

  console.log("DEV MODE : user logged in!");

};
/********** DEV MODE **********/

/* ------------------------------------ */
/* TEMPLATE : BUILD HEADER (HTML BLOCK) */
/* ------------------------------------ */

function buildHeader() {

  if (isLoggedIn) {
    logText = "Logout";
    navLogURL = navLogoutURL
  } else {
    logText = "Login";
    navLogURL = navLoginURL
  }

  var header = `

  <div id="nav_container" class="nav-container">

    <a href="` + navHomeURL + `"><img src="` + staticAssetsURL + `images/oceanusLogo.png" class="logo"></a>

    <div class="nav-option-group">
      <ul>
        <li class="nav-option"><a href="` + navGamesURL + `">Games</a></li>
        <li class="nav-option"><a href="` + navContentURL + `">Adventure Quiz</a></li>
        <li class="nav-option"><a href="` + navMapURL + `">Explore</a></li>
        <li class="nav-option"><a href="` + navAboutURL + `">Our Story</a></li>
        <li class="nav-option"><a href="` + navProfileURL + `">Profile</a></li>
        <li class="nav-option"><a href="` + navLogURL + `">` + logText + `</a></li>
      </ul>
      <div class="hamburger-bars-container" onclick="hamburgerToCross(this)" style="display:none;">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>

  </div>

  <div id="hamburger_container" class="hamburger-container" style="display:none;">

    <div class="hamburger-option-group centered">
      <a href="` + navHomeURL + `"><img src="` + staticAssetsURL + `images/oceanusLogo.png" class="hamburger-logo"></a>
      <ul>
        <li class="hamburger-option"><a href="` + navGamesURL + `">Games</a></li>
        <li class="hamburger-option"><a href="` + navContentURL + `">Adventure Quiz</a></li>
        <li class="hamburger-option"><a href="` + navMapURL + `">Explore</a></li>
        <li class="hamburger-option"><a href="` + navAboutURL + `">Our Story</a></li>
        <li class="hamburger-option"><a href="` + navProfileURL + `">Profile</a></li>
        <li class="hamburger-option"><a href="` + navLoginURL + `">Login</a></li>
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


function hamburgerToCross(x) {
  x.classList.toggle("change");
  $('.hamburger-container').toggle();
}
