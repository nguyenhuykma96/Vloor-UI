$(document).ready(function() {
  var $win = $(window);
  var $nav = $("#navbarCollapse");
  var brand = $(".brand__list li");

  // show menu home
  $(".nav__icon--menu").on("click", function() {
    $("#display-opacity").addClass("display-opacity");
    $("body").css({ "margin-top": 0 });
    $(".header").css({ position: "inherit" });
  });

  // show cart popup
  $("#cart-icon").click(function(e) {
    e.stopPropagation();
    let popupCart = $(this).next(".cart-popup");
    $(".cart-popup").toggleClass("show-cart");
    $win.click(function() {
      popupCart.removeClass("show-cart");
    });
  });

  // dropdown menu product
  $("#product-dropdown").on("click", function() {
    $(this).toggleClass("rotate-90");
    if ($(this).hasClass("rotate-90")) {
      $(this)
        .parent()
        .next("#dropdown-menu")
        .slideDown(300);
    } else {
      $(this).removeClass("rotate-90");
      $(this)
        .parent()
        .next("#dropdown-menu")
        .slideUp(300);
    }
  });

  // toggle tag ol in slide home
  $(".carousel-indicators-number li").click(function() {
    console.log($(this).attr("data-slide-to"));
    $(".carousel-indicators-number li.active").removeClass("active");
    $(this).addClass("active");
  });

  $(".carousel-indicators li").click(function() {
    var index = $(".carousel-indicators-number li.active").attr(
      "data-slide-to",
      function() {
        console.log(index);
      }
    );
  });

  function toggleDots() {}

  $win.on("click.Bts", function(e) {
    if ($win.has(e.target).length == 0 && !$nav.is(event.target)) {
    }
  });
  $(brand).click(function() {
    $(this).toggleClass("active");
  });

  //select color brand
  if ($win.width() < 576) {
    var widthSelect = $(".brand__select-color").width();
    $(".select-color").css({
      "min-width": widthSelect
    });
    $("#input-select-color").empty("");
  }

  $win.resize(function() {
    var width = $win.width();

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

  $win.click(function() {
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
  // close  sidebar
  $("#display-opacity").click(function(e) {
    e.stopPropagation();
    // hide product filter
    $("#product-filter").removeClass("active");
    // hide menu header
    $(".navbar-collapse").removeClass("show");
    $(".header").css({ position: "fixed" });

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
      1280: {
        items: 4,
        nav: true
      },
      1400: {
        items: 5,
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
