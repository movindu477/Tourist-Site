document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".form");
    const searchInput = document.querySelector(".input");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Dynamically select all destination sections (including newly added ones)
        const destinationSections = document.querySelectorAll("[class^='destisec']"); 

        const searchTerm = searchInput.value.trim().toLowerCase(); // Get user input
        let found = false;

        destinationSections.forEach(section => {
            const heading = section.querySelector("h1")?.textContent.toLowerCase(); // Get section heading safely

            if (heading && heading.includes(searchTerm)) {
                // Scroll smoothly to the matched section
                section.scrollIntoView({ behavior: "smooth", block: "start" });

                // Highlight the matched section
                section.style.transition = "all 0.5s ease";
                section.style.border = "4px solid #3498db";
                section.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";

                // Remove highlight after 2 seconds
                setTimeout(() => {
                    section.style.border = "none";
                    section.style.boxShadow = "none";
                }, 2000);

                found = true;
            }
        });

        if (!found) {
            alert("Sorry, this destination is not available on our website.");
        }

        searchInput.value = ""; // Clear search input field
    });
});



/* animation destisec1 */
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".destisec1");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        {
            threshold: 0.3, // 30% visibility triggers animation
        }
    );

    observer.observe(section);
});
