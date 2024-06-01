$(function() {
// change-colorがクリックされたら
$('#change-color').on('click', function() {
  // 文字色を変更
  $('#target').css('color', 'red');
});

// change-textがクリックされたら
$('#change-text').on('click', function() {
  // 文字内容を変更
  $('#target').text('Hello!');
});

// fade-outがクリックされたら
$('#fade-out').on('click', function() {
  // フェードアウトする
  $('#target').fadeOut();
});

// fade-inがクリックされたら
$('#fade-in').on('click', function() {
  // フェードインする
  $('#target').fadeIn();
});
});