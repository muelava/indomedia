// scroll windows for navbar
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("colornav");
}else {
  // navbar
  document.getElementById("navbar").classList.remove("colornav");
  }
}


// document effect if click href
 $(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 62,
          },
          1500,
          "easeInOutSine",
          function () {
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });

  
  // button to up
  $(window).scroll(function () {
    if (pageYOffset >= 500) {
      $("#btnTop").fadeIn("slow");
    } else {
      $("#btnTop").fadeOut("slow");
    }
  });

    // button to top onlclick and smooth scroll
    $('#btnTop').click(topFunction)
    function topFunction() {
      // $(document).scrollTop(0);
      // $('body').scrollTop = 0;
      $('html,body').animate({scrollTop:0},1500,'easeInOutExpo');
    }

// choice price
$('#list1').click(function(){
    $("#desclist1").removeClass("d-none");
    $("#desclist2").addClass("d-none");

    $("#list1").addClass("aktif");
    $("#list2").removeClass("aktif");
})

$('#list2').click(function(){
    $("#desclist1").addClass("d-none");
    $("#desclist2").removeClass("d-none");

    $("#list2").addClass("aktif");
    $("#list1").removeClass("aktif");
  })




//   effect price jasa
  $(".up").nextAll().css("opacity",".4");
  $("#pricelist").hover(function(){
      $("#basic,#standar,#premium").css("color","#4da0ff")},
      function(){
      $("#basic,#standar,#premium").css("color","#ffffff");
      })


// dapatkan url
    let url = "Home"+window.location.pathname;
    let url2 = url.replace("/"," > ")
    let url3 = url2.replace(".html","")
    let urlReplace = url3.replace(".php","")
    $(".url").html(urlReplace);