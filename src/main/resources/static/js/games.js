function openShark() {
  var win = window.open('sharkvsrubbish.html', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
  }
}

function openPipe() {
  var win = window.open('suziestoosies.html', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
  }
}

function openCard() {
  var win = window.open('cloggedmemory.html', '_self');
  if (win) {
      //Browser has allowed it to be opened
      win.focus();
  } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
  }
}

function closeSharkGame() {
  location.reload();
}
