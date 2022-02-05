let footerEl = document.getElementById("currentYear");
let mouseCursor = document.querySelector('.cursor');
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

window.addEventListener('mousemove', cursor);

function cursor(e) {

    if ((window.innerHeight + window.scrollY) <= 1000) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
        mouseCursor.style.display = 'block'; 
    } else {
        mouseCursor.style.display = 'none';
    }
}

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

// Show scroll to top button when you scroll below 3500px and hide it again when you're above 3500px
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= 3500) {
        // you're at the bottom of the page
        console.log(document.body.offsetHeight);
        scrollBtn.removeClass("hide");
    } else {
        scrollBtn.addClass("hide");
    }
};
