function openShark() {
  $('#shark_section').show();

  //Disable Scroll
  $('body').css('position', 'fixed');
}

function openPipe() {
  $('#pipe_game_section').show();

  //Disable Scroll
  $('body').css('position', 'fixed');
}

function openCard() {
  $('#memory_game_section').show();

  //Disable Scroll
  $('body').css('position', 'fixed');
}

function closeSharkGame() {
  location.reload();
}
