// scroll windows for navbar
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("colornav");
}else {
  // navbar
  document.getElementById("navbar").classList.remove("colornav");
  }

  // scrolll view
  // console.log(document.documentElement.scrollTop);
}


// panduan pesan
document.querySelector("#cara1").addEventListener("click", function () {
  document.querySelector("#step").innerHTML = '<img src="assets/img/step1.png" alt="" />';
})
document.querySelector("#cara2").addEventListener("click", function () {
  document.querySelector("#step").innerHTML = '<img src="assets/img/step2.png" alt="" />';
})
document.querySelector("#cara3").addEventListener("click", function () {
  document.querySelector("#step").innerHTML = '<img src="assets/img/step3.png" alt="" />';
})
document.querySelector("#cara4").addEventListener("click", function () {
  document.querySelector("#step").innerHTML = '<img src="assets/img/step4.png" alt="" />';
})

// years
var day = new Date();
var year = day.getFullYear();
document.getElementById("years").innerHTML = year;


// animasi scroll break point

// button to up
$(window).scroll(function(){
  if(pageYOffset>=500){
    $('#btnTop').fadeIn("slow");    
  }else{
    $('#btnTop').fadeOut("slow");
  }
});

// section2 - kenapa pilih kami
$(window).scroll(function(){
  if(pageYOffset>650){
    $("#kenapa1").css({
      "transform":"translate(0%)",
      "transition":"1s",
      "opacity":"1"
    })
    $("#kenapa2").css({
      "transition":"1.5s",
      "opacity":"1"
    })
    $("#kenapa3").css({
      "transform":"translate(0%)",
      "transition":"1s",
      "opacity":"1"
    })
  }else{
    $("#kenapa2").css({
      "transition":"1.5s",
      "opacity":"0"
    })
    $("#kenapa1").css({
      "transform":"translate(-100%,0%)",
      "transition":"1s",
      "opacity":"0"
    })
    $("#kenapa3").css({
      "transform":"translate(-100%,0%)",
      "transition":"1s",
      "opacity":"0"
    })
  }
});

// section3 - penawaran
$(window).scroll(function(){
  if(pageYOffset>1120){
    $("#tawaran1").css({
      "transform":"rotateY(0)",
      "opacity":"1",
      "transition":".5s ease",
    });
    $("#tawaran2").css({
      "transform":"rotateY(0)",
      "opacity":"1",
      "transition":"1s ease",
    });
    $("#tawaran3").css({
      "transform":"rotateY(0)",
      "opacity":"1",
      "transition":"1.5s ease",
    });
    $("#tawaran4").css({
      "transform":"rotateY(0)",
      "opacity":"1",
      "transition":"2s ease",
    });
  }else{
    $("#tawaran1,#tawaran2,#tawaran3,#tawaran4").css({
      "transform":"rotateY(150deg)",
      "opacity":"0",
    });

  }
})

// section4 - panduan pemesanan
$(window).scroll(function(){
  if(pageYOffset>1400){
    $("#cara1").css({
      "transform":"translate(0%)",
      "opacity":"1",
      "transition":".5s ease",
    });
    $("#cara2").css({
      "transform":"translate(0%)",
      "opacity":"1",
      "transition":"1.5s ease",
    });
    $("#cara3").css({
      "transform":"translate(0%)",
      "opacity":"1",
      "transition":"2.5s ease",
    });
    $("#cara4").css({
      "transform":"translate(0%)",
      "opacity":"1",
      "transition":"3.5s ease",
    });
  }else{
    $("#cara1,#cara2,#cara3,#cara4").css({
      "transform":"translate(0%, -100%)",
      "opacity":"0",
    });
  }
})

// section5 - review & ulasan
$(window).scroll(function(){
  if(pageYOffset>2000){
    $("#review1").css({
      "transform":"scale(1)",
      "transition":".5s ease",
      "opacity":"1"
    });
    $("#review2").css({
      "transform":"scale(1)",
      "transition":"1s ease",
      "opacity":"1"
    });
    $("#review3").css({
      "transform":"scale(1)",
      "transition":"1.5s ease",
      "opacity":"1"
    });
  }else{
    $("#review1,#review2,#review3").css({
      "transform":"scale(0)",
      "opacity":"0"
    });
  }
})

  // button to top onlclick and smooth scroll
  $('#btnTop').click(topFunction)
  function topFunction() {
    // $(document).scrollTop(0);
    // $('body').scrollTop = 0;
    $('html,body').animate({scrollTop:0},1500,'easeInOutExpo');
  }


  // document effect if click href
  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 62
        }, 1500,"easeInOutSine", function(){
     
          window.location.hash = hash;
        },);
      } // End if
    });
  });