let clicks = 0;


function addClickListener(){
  $('.image').click(function(event) {       
          addClicks();
          event.preventDefault(); 
  });
}

function addClicks(){
  clicks += 1;
  $(".clicks").html(clicks)
}

$(window).ready(function(){
  addClickListener();
});