/* picture looping hotels */
document.addEventListener("DOMContentLoaded", function () {
    // Define images for each hotel
    const hotels = [
        { id: 0, images: ["img/cape1", "img/cape2", "img/cape3", "img/cape4"] },
        { id: 1, images: ["img/shang1", "img/shang2", "img/shang3", "img/shang4"] },
        { id: 2, images: ["img/ana1", "img/ana2", "img/ana3", "img/ana4"] },
        { id: 3, images: ["img/he1", "img/he2", "img/he3", "img/he4"] },
        { id: 4, images: ["img/san1", "img/san2", "img/san3", "img/san4"] },
        { id: 5, images: ["img/jet1", "img/jet2", "img/jet3", "img/jet4"] },
        { id: 6, images: ["img/ceylon1", "img/ceylon2", "img/ceylon3", "img/ceylon4"] },
        { id: 7, images: ["img/fo1", "img/fo2", "img/fo3", "img/fo4"] },
        { id: 8, images: ["img/taj1", "img/taj2", "img/taj3", "img/taj4"] },
        { id: 9, images: ["img/water1", "img/water2", "img/water3", "img/water4"] },
        { id: 10, images: ["img/weli1", "img/weli2", "img/weli3", "img/weli4"] },
        { id: 11, images: ["img/kar1", "img/kar2", "img/kar3", "img/kar4"] },
    ];

    function startSlideshow(hotelIndex) {
        let imageIndex = 0;
        const hotelCard = document.querySelectorAll(".hotel-image img")[hotelIndex];
        setInterval(() => {
            imageIndex = (imageIndex + 1) % hotels[hotelIndex].images.length;
            hotelCard.src = hotels[hotelIndex].images[imageIndex];
        }, 3000); // Change image every 3 seconds
    }
    // Apply slideshow to all hotel cards
    for (let i = 0; i < hotels.length; i++) {
        startSlideshow(i);
    }
});



/* hotels sliding main */
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".hotel-main");

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