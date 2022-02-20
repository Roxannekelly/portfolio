
function menu(){
  var x= 
  document.getElementById("myLinks");
    if ( x.style.display === "block"){
      x.style.display = "none";
    } else {
      x.style.display = "block";    
  }
}

$(document).ready(function(){
  $(".homeLink").click(function(){
    $(this).show();
  })
})

$(document).ready(function(){
  $("#myLinks").click(function(){
  $(this).hide();
  })
})



$(document).ready(function(){
$(window).scroll(function() {
  $( ".main-menu" ).css( "background-color", "yellow" );
  });
});





$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("border", "1px solid yellow");
    }); 
    });
