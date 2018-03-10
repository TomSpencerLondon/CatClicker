let clicks1 = 0;
let clicks2 = 0; 

function addClickListener(){
  $('.image1').click(function(event) {       
          addClicks1();
          event.preventDefault(); 
  });

  $('.image2').click(function(event) {       
    addClicks2();
    event.preventDefault(); 
  });
}


function addClicks1(){
  clicks1 += 1;
  $(".clicks1").html(clicks1)
}

function addClicks2(){
  clicks2 += 1;
  $(".clicks2").html(clicks2)
}

$(window).ready(function(){
  addClickListener();
});