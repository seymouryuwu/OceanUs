/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Template */
/* DESCRIPTION : JavaScript functions accessible by all pages */
/* AUTHOR:     : Malcolm Malloy */


/* -------------------------------------- */
/* TEMPLATE : STORE HEADERS */
/* -------------------------------------- */

var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

/* -------------------------------------- */
/* TEMPLATE : URLS */
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

/* ------------------------------------ */
/* TEMPLATE : BUILD HEADER (HTML BLOCK) */
/* ------------------------------------ */
/* Builds the header HTML and displays the login/logout button based on isLoggedIn variable state */

function buildHeader() {

    if (typeof isLoggedIn !== 'undefined') {

      if (isLoggedIn) {
        logType = "Logout";
        disabledClass = '';
        logElement = '<div onClick="callLogout()" class="logout-button">Logout</div>'

      } else {
        logType = "Login";
        disabledClass = ' disabled';
        logElement = '<a href="' + navLoginURL + '">Login</a>';
      }

    } else {
        logType = "Login";
        disabledClass = ' disabled';
        logElement = '<a href="' + navLoginURL + '">Login</a>';
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
          <li class="nav-option` + disabledClass + `"><a href="` + navProfileURL + `" class="profile-button">Profile</a></li>
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
          <li class="hamburger-option"><a href="` + navProfileURL + `" class="profile-button">Profile</a></li>
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
/* Builds the footer HTML */

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


/* ----------------------------- */
/* TEMPLATE : HAMBURGER TO CROSS */
/* ----------------------------- */
/* Transitions the hamburger menu button into a cross shaped close button */

function hamburgerToCross(x) {
  x.classList.toggle("change");
  $('.hamburger-container').toggle();
}


/* ---------------------- */
/* TEMPLATE : CALL LOGOUT */
/* ---------------------- */
/* Logs the user out via controller API */

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
