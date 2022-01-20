let footerEl = document.getElementById("currentYear");

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