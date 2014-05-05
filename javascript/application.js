$( document ).ready(function() {
  $('.content').load("html/story.html")
  bindEvents();
});

function bindEvents() {
  $( ".story, .travels, .projects ").click( renderPartial )
}

function renderPartial(){
  $.ajax({
    type: "get",
    url: "html/" + this.className + ".html"
  }).done(function(data){
    $(".content").html(data);
  })
}
