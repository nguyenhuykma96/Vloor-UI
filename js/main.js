document.getElementById("menu").addEventListener("click", function() {
  document.getElementById("display").classList.add("full-screen");
  document.getElementsByClassName("show-icon").style.display = "inline-block";
});
function myFunction() {
  document.getElementById("dropdown-menu").classList.toggle("show");
  document
    .getElementById("product-dropdown")
    .classList.toggle("dropdown-rotate");
  // document.getElementById("nav__product").style.display = "inline-block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches("#product-dropdown")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document
          .getElementById("product-dropdown")
          .classList.remove("dropdown-rotate");
      }
    }
  }
};

$(document).ready(function() {
  var $win = $(window);
  var $nav = $(".login");

  var brand = $(".brand__list li");
  var ele = $("#carouselExampleIndicators .carousel-indicators li.active");
  if (ele) {
    // console.log(ele.data("slide-to"));
    // $(".carousel-indicators-number li").addClass("active");
  }

  $win.on("click.Bts", function(e) {
    if ($win.has(e.target).length == 0 && !$nav.is(event.target)) {
      // alert("outside");
    }
  });
  $(brand).click(function() {
    $(this).toggleClass("active");
  });

  // carousel
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      nav: true,
      navText: ["<img src='./img/next.png'>", "<img src='./img/prev.png'>"],
      loop: true,
      dots: false,
      margin: 33,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        380: {
          items: 1,
          nav: false,
          autoWidth: true
        },
        768: {
          items: 2,
          nav: true,
          autoWidth: true,
          margin: 30
        },
        1000: {
          items: 3,
          nav: true
        },
        1400: {
          items: 4,
          nav: true
        },
        1900: {
          items: 5,
          nav: true
        }
      }
    });
  });
});
