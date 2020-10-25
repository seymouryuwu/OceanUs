function goToProfile() {

 var win = window.open('profile', '_self');

  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }

}

function goToHome() {

 var win = window.open('/', '_self');

  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      console.log('Please allow popups for this website');
  }

}