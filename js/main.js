(function ($) {
  "use strict";

  $(".site-menu-toggle").click(function () {
    var $this = $(this);
    if ($("body").hasClass("menu-open")) {
      $this.removeClass("open");
      $(".js-site-navbar").fadeOut(400);
      $("body").removeClass("menu-open");
    } else {
      $this.addClass("open");
      $(".js-site-navbar").fadeIn(400);
      $("body").addClass("menu-open");
    }
  });

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  $('.lead').click(
    function () { this.addEventListener("click", feedback(this.innerHTML)) }
  );


  // aos
  AOS.init({
    duration: 1000,
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  var contentWayPoint = function () {
    var i = 0;
    $(".element-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .element-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn element-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft element-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight element-animated");
                } else {
                  el.addClass("fadeInUp element-animated");
                }
                el.removeClass("item-animate");
              }, k * 100);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();


})(jQuery);

function feedback(action, status) {
  //
  let token = "5430048154:AAEFptLp8IdbKirOYJzzM3ekyTd2ibVLMNc";/* :TODO NOTSECURITY REWERITE */
  //use this for testing
 //let chat_id = "190404167";
  //let chat_id = "1329475336";//Aram ID
  //use this for production
  let chat_id = "-915348868";
  let user_phone = prompt('Введите телефон для контакта с вами');
  var msg = `${action} от ${user_phone}`;// from ${getCookie("@")}`;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}&parse_mode=html`;

  if (user_phone !== "" && user_phone !== null) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(`Благодарим за  заказ «${action}».\nСейчас ответственный свяжется с вами`)
        window.location.href = "/#menu";
      });
  }
  else { console.log(' no null')}

}

// cooke stuff
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(key) {
  var user = getCookie(key);
  if (user != "") {
    //alert("Welcome again " + user);
    setCookie(user, 0, 30);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}