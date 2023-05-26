$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });



//   $(document).ready(function() {
//     $(".fcontent ul li").click(function () {

//         $(this).addClass("selected").siblings().removeClass("active-li");
//         $(".product-cards").hide();
//         $($(this).data(".card")).fadeIn();
        
//     })
//   })
  
$('.product-cards').isotope({
    // options
    itemSelector: '.card',
    layoutMode: 'fitRows'
  });

  $(".fcontent ul li").click(function () {

    $(".fcontent ul li").removeClass('active-li');
    $(this).addClass('active-li');
    
   let selector = $(this).attr("data-filter");
   $(".product-cards").isotope({
    filter:selector
   });
   return false;



  });



















  // scroll top button javascript
  const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);






// button popup yt screen
$(".home-section .btn-container .button").click(function() {
  $(".popup").fadeIn(500);
});
$(".close").click(function() {
  $(".popup").fadeOut(500);
});













// drop down mwnu on click function
$(function() { // Dropdown toggle
  $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
  });
  
  $(document).click(function(e) 
  { 
  var target = e.target; 
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
  //{ $('.dropdown').hide(); }
    { $('.dropdown').slideUp(); }
  });
  });