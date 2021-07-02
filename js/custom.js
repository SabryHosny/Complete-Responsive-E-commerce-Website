// coding with nick

// Js Documents

// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider


$(function () {
  /*=========================== SWIPPER ===========================*/
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 80,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  /*=========================== SWIPPER BEST SELLER ===========================*/
  var swiper = new Swiper(".best_seller_container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=========================== SHOW NAV LIST ===========================*/
  $(".show_nav_list_icon").on("click", function () {
    $(".nav__list").toggleClass("show");
  });
  $(".close_nav_list_icon").on("click", function () {
    $(".nav__list").toggleClass("show");
  });

  /*=========================== COUNTDOWN TIMER ===========================*/
  // Set the date we're counting down to
  var countDownDate = new Date("oct 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("timer_data-day").innerHTML = days;
    document.getElementById("timer_data-hour").innerHTML = hours;
    document.getElementById("timer_data-min").innerHTML = minutes;
    document.getElementById("timer_data-sec").innerHTML = seconds;

  }, 1000);


  /*================== Filtering With Isotope Liberary An Jquery ================*/
  // NOTE : i don't need to display my container as a grid because it will not work anymore with this isotope applied to, 
  // just specify a fixed height for the card 400px forexample and change the its width for responsive media queries
  // forexample 25%, 33.33% , 50%, 100% to change the columns number displayed.
  // Remember: don't use the main container as your container because its default padding :).


  // select your grid container
  let myGrid = $('.shuffelled-container').isotope({
    // options
    itemSelector: '.shuffelled-container .card', //select your item to filter
    layoutMode: 'fitRows',
    fitRows: {
      // gutter: 10  // if you want spaces between columns
    }
  });

  $("#filter-men").on('click', function () {
    myGrid.isotope({ filter: '.cat-men' });
  });
  $("#filter-all").on('click', function () {
    myGrid.isotope({ filter: '*' });
  });

  $("#filter-women").on('click', function () {
    myGrid.isotope({ filter: '.cat-women' });
  });

  $("#filter-acc").on('click', function () {
    myGrid.isotope({ filter: '.cat-acc' });
  });

  /*=========================== SHUFFLE BUTTONS ACTIVE ===========================*/
  $(".shuffle-btn").on('click', function () {
    $(".shuffle-btn").each(function (index, element) {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });


  /*=========================== TOGGLE SHOW SCROLLUP  ===========================*/
  $(window).on("scroll", function () {
    if (window.scrollY >= 200) {
      $("#scrollup").addClass("show-scrollup");
    } else {
      $("#scrollup").removeClass("show-scrollup");
    }
  });

});
