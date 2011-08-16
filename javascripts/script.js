function resizePages() {
  var h = $(window).height();
  var height  =  h < 600 ? 600 : h;
  $('.page').css('height',height);
  $('#about').css('height',height);
}

//resize
$(window).resize(function(e) {
  resizePages();
});
resizePages();
$('#my_background').backgrounder({element : '#page1'});

//keyboard nav
$(document).bind('keydown',function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 32) {
    e.preventDefault();
    $.scrollTo('#page2');
  }
});


