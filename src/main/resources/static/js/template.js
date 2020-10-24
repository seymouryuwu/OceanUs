/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Template */
/* DESCRIPTION : JavaScript functions accessible by all pages */
/* AUTHOR:     : Malcolm Malloy */


/* -------------------------------------- */
/* STORE HEADERS */
/* -------------------------------------- */

var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

//$(document).ajaxSend(function(e, xhr, options) {
//    xhr.setRequestHeader(header, token);
//});

/* -------------------------------------- */
/* URLS */
/* -------------------------------------- */

var staticAssetsURL = "../";
var contentURL      = "/adventurequiz/";
var navHomeURL      = "/";
var navGamesURL     = "/games";
var navExploreURL   = "/explore";
var navContentURL   = "/adventurequiz";
var navAboutURL     = "/ourstory";
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
  contentURL      = "adventurequiz.html";
  navHomeURL      = "index.html";
  navGamesURL     = "games.html";
  navExploreURL   = "explore.html";
  navContentURL   = "adventurequiz.html";
  navAboutURL     = "ourstory.html";
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

    if (typeof isLoggedIn !== 'undefined') {

      if (isLoggedIn) {
        logType = "Logout";
        logElement = '<div onClick="callLogout()" class="logout-button">Logout</div>'

      } else {
        logType = "Login";
        logElement = '<input type="submit" value="login" class="logout-button"/>';
      }

    } else {
        logType = "Login";
        logElement = '<input type="submit" value="login" class="logout-button"/>';
    }


  var header = `

  <div id="nav_container" class="nav-container">

    <a href="` + navHomeURL + `"><img src="` + staticAssetsURL + `images/oceanusLogo.png" class="logo"></a>

    <div class="nav-option-group">
      <form th:action="@{/` + logType + `}" method="post">
        <ul>
          <li class="nav-option"><a href="` + navExploreURL + `">Explore</a></li>
          <li class="nav-option"><a href="` + navContentURL + `">Adventure Quiz</a></li>
          <li class="nav-option"><a href="` + navGamesURL + `">Games</a></li>
          <li class="nav-option"><a href="` + navAboutURL + `">Our Story</a></li>
          <li class="nav-option"><a href="` + navProfileURL + `">Profile</a></li>
          <li class="nav-option">` + logElement + `</li>
        </ul>
      </form>

      <div class="hamburger-bars-container" onclick="hamburgerToCross(this)" style="display:none;">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

    </div>

  </div>

  <div id="hamburger_container" class="hamburger-container" style="display:none;">

    <div class="hamburger-option-group centered">
      <form th:action="@{/` + logType + `}" method="post">

        <a href="` + navHomeURL + `"><img src="` + staticAssetsURL + `images/oceanusLogo.png" class="hamburger-logo"></a>
        <ul>
          <li class="hamburger-option"><a href="` + navExploreURL + `">Explore</a></li>
          <li class="hamburger-option"><a href="` + navContentURL + `">Adventure Quiz</a></li>
          <li class="hamburger-option"><a href="` + navGamesURL + `">Games</a></li>
          <li class="hamburger-option"><a href="` + navAboutURL + `">Our Story</a></li>
          <li class="hamburger-option"><a href="` + navProfileURL + `">Profile</a></li>
          <li class="hamburger-option">` + logElement + `</li>

        </ul>
      </form>
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

function callLogout() {
  console.log('Logout');

    $.ajax({
        type: "POST",
        url: "/logout",
        data: token,
        beforeSend:function(xhr){
          xhr.setRequestHeader(header, token);
        },
        success: function (data) {
            window.location ="/";
        },
        error: function (e) {
            console.log(data);
        }
    });
}
