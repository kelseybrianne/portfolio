let footerEl = document.getElementById("currentYear");
const scrollBtn = $('#scrollBtn')

// Mobile menu
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

// Use moment.js to get current year for copyright
var currentYear = moment().format("YYYY");
let copyrightEl = document.createElement("p");
copyrightEl.innerHTML = `&copy; Kelsey Mailau ${currentYear}`;
footerEl.appendChild(copyrightEl);

// Create scroll to top function when button is clicked
const scrollToTop = () => {
    console.log('clicked');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    scrollBtn.addClass("hide");
}

scrollBtn.click(scrollToTop);

// Show scroll to top button when you get to the bottom of the page
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        console.log('bottom');
        scrollBtn.removeClass("hide");
    }
};

// Hide button when you get to the top of the page
window.addEventListener('scroll', function(e) {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
        scrollBtn.addClass("hide");
    }
  })