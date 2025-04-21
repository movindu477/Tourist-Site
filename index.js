/* home transition */
document.querySelector('button a').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(this.getAttribute('href')); // Get the target element
    target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
});




/* navigation scroll */
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navigationbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Adds background on scroll
        } else {
            navbar.classList.remove("scrolled"); // Transparent when at the top
        }
    });
});



/* navigation visible */
const navbar = document.querySelector(".navigationbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)"; // Hide navbar on scroll down
    } else {
        navbar.style.transform = "translateY(0)"; // Show navbar on scroll up
    }
    lastScrollY = window.scrollY;
});




/* top button scroll */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
    let topButton = document.getElementById("topButton");

    if (window.scrollY > 300) {
        topButton.classList.add("show"); // Make button visible
        topButton.style.display = "block"; 
    } else {
        topButton.classList.remove("show"); // Hide button smoothly
        setTimeout(() => {
            if (!topButton.classList.contains("show")) {
                topButton.style.display = "none";
            }
        }, 300); // Delay hiding for smooth effect
    }
});




/* homepageimg2 animate */
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".homepageimg2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Triggers when 30% of the section is visible

    observer.observe(section);
});



/* hompageimg3 animate */
document.addEventListener("DOMContentLoaded", function () {
    const section3 = document.querySelector(".homepageimg3");

    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section3.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer3.observe(section3);
});



/* hompageimg4 animate */
document.addEventListener("DOMContentLoaded", function () {
    const section4 = document.querySelector(".homepageimg4");

    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section4.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer4.observe(section4);
});
