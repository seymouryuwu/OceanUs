
function buildHeader() {
  var header = `
  <div id="nav_container" class="nav-container">

    <img src="../static/images/oceanusLogo.png" class="logo">

    <div class="nav-option-group">
      <ul>
        <li class="nav-option"><a href="">Home</a></li>
        <li class="nav-option"><a href="http://100.26.172.161:8080/content">Quiz's &amp; Games</a></li>
        <li class="nav-option"><a href="http://100.26.172.161:8080/map">Map</a></li>
      </ul>
    </div>

  </div>
  `;

  $('.header').append(header);

}

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
