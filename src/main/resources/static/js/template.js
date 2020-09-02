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
var navAboutURL     = "https://oceanus.me/about";
var navMapURL       = "https://oceanus.me/map";
var navContentURL   = "https://oceanus.me/content/1";


/********** DEV MODE **********/
/* IMPORTANT NOTE : Remove before deployment!!! */
var devmode = false;

if (devmode) {
  console.log("!! ----- DEV MODE ACTIVATED! -----!!");
  console.log("!! -- Remove before deployment! --!!");
  console.log("!! -------------------------------!!");

  staticAssetsURL = "../static/";
  contentURL      = "content.html";
  navHomeURL      = "index.html";
  navAboutURL     = "about.html";
  navMapURL       = "map.html";
  navContentURL   = "content.html";

  console.log("DEV MODE : URLs modified for local development!");

};
/********** DEV MODE **********/

/* ------------------------------------ */
/* TEMPLATE : BUILD HEADER (HTML BLOCK) */
/* ------------------------------------ */

function buildHeader() {
  var header = `
  <div id="nav_container" class="nav-container">

    <img src="` + staticAssetsURL + `images/oceanusLogo.png" class="logo">

    <div class="nav-option-group">
      <ul>
        <li class="nav-option"><a href="` + navHomeURL + `">Home</a></li>
        <li class="nav-option"><a href="` + navMapURL + `">Explore</a></li>
        <li class="nav-option"><a href="` + navContentURL + `">Quiz</a></li>
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
