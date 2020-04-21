document.getElementById("menu").addEventListener("click", function() {
  document.getElementById("full-screen").classList.add("full-screen");
  document.getElementsByClassName("show-icon").style.display = "inline-block";
});
function myFunction() {
  document.getElementById("dropdown-menu").classList.toggle("show");
  document
    .getElementById("product-dropdown")
    .classList.toggle("dropdown-rotate");
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
  var $nav = $("#navbarCollapse");
  var brand = $(".brand__list li");
  var ele = $("#carouselExampleIndicators .carousel-indicators li.active");
  if (ele) {
    // $(".carousel-indicators-number li").addClass("active");
  }

  $win.on("click.Bts", function(e) {
    if ($win.has(e.target).length == 0 && !$nav.is(event.target)) {
    }
  });
  $(brand).click(function() {
    $(this).toggleClass("active");
  });

  if ($(window).width() < 576) {
    var widthSelect = $(".brand__select-color").width();
    $(".select-color").css({
      "min-width": widthSelect
    });
    $("#input-select-color").empty("");
  }

  $(window).resize(function() {
    var width = $(window).width();

    if (width < 576) {
      $("#input-select-color").empty("");
    } else {
      $("#input-select-color").text("Chọn màu");
    }
  });

  $("button.dropdown-toggle").on("click", function() {
    if (!$("#dropdown-color").hasClass("show")) {
      $(".dropdown-icon").addClass("rotate");
    } else {
      $(".dropdown-icon").removeClass("rotate");
    }
  });

  $(window).click(function() {
    if ($(".dropdown-icon").hasClass("rotate")) {
      $(".dropdown-icon").removeClass("rotate");
    }
  });

  // rotate icon filter product
  $(".products__sidenav-content").show();
  $(".products__sidenav-title > i").on("click", function() {
    $(this).toggleClass("rotate-180");
    // show content filter
    if (!$(this).hasClass("rotate-180")) {
      $(this)
        .parent()
        .next(".products__sidenav-content")
        .slideDown(300);
    } else {
      $(this)
        .parent()
        .next(".products__sidenav-content")
        .slideUp(300);
    }
  });

  // Product Sort by
  $(".products__sort-content").hide();
  $(".products__sort > i").on("click", function() {
    let widthSort = $(".products__sort").width();
    $(this).toggleClass("rotate-180");
    if ($(this).hasClass("rotate-180")) {
      $(".products__sort-content")
        .css({ "min-width": widthSort })
        .slideDown(200);
    } else {
      $(".products__sort-content").slideUp(300);
    }
  });
  // show product filter
  $(".products__sort .sort-icon").on("click", function() {
    $("#display-opacity").addClass("display-opacity");
    $("#product-filter").addClass("active");
  });
  // close product filter
  $("#display-opacity").click(function(event) {
    event.stopPropagation();
    $("#product-filter").removeClass("active");
    $(this).removeClass("display-opacity");
  });

  // carousel
  $(".floor__slide-carousel").owlCarousel({
    nav: true,
    navText: ["<img src='./img/next.png'>", "<img src='./img/prev.png'>"],
    loop: true,
    dots: false,
    margin: 33,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      380: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      768: {
        items: 2,
        nav: true,
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

  $(".product-detail__preview-mobile").owlCarousel({
    items: 1,
    margin: 10,
    dots: true
  });

  $(".product-related-carousel").owlCarousel({
    nav: true,
    dots: false,
    margin: 33,
    navText: ["<img src='./img/next.png'>", "<img src='./img/prev.png'>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      380: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      768: {
        items: 2,
        nav: true,
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
