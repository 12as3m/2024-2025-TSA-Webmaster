// Cache the header element outside of the scroll event
const header = document.querySelector("header");
let ticking = false;

// Add scroll event listener
window.addEventListener("scroll", function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            const distance = window.scrollY;

            // Convert vh to pixels
            const maxScrollVh = 100; // Set the max scroll in vh units (e.g., 100vh)
            const maxScrollPx = (window.innerHeight * maxScrollVh) / 100;

            // Apply transformations and styles
            header.style.transform = `translate3d(0, ${distance * 0.7}px, 0)`; // Use translate3d for hardware acceleration
            header.style.filter = `blur(${distance * 0.03}px)`; // If performance is impacted, consider reducing the blur effect

            // Calculate opacity based on scroll distance
            const opacity = Math.max(0, 1 - distance / maxScrollPx);
            header.style.opacity = opacity;

            // Reset ticking flag
            ticking = false;
        });

        ticking = true;
    }
});

////banner parallax
//window.addEventListener("scroll", function () {
//    const distance = window.scrollY;

//    // Convert vh to pixels
//    const maxScrollVh = 100; // Set the max scroll in vh units (e.g., 50vh)
//    const maxScrollPx = (window.innerHeight * maxScrollVh) / 100;

//    // Apply transformations and styles
//    const header = document.querySelector("header");
//    header.style.transform = `translateY(${distance * 0.7}px)`;
//    header.style.filter = `blur(${distance * 0.03}px)`;

//    // Calculate opacity based on scroll distance
//    const opacity = Math.max(0, 1 - distance / maxScrollPx);
//    header.style.opacity = opacity;
//});

//giant container box shadow
window.addEventListener('scroll', () => {
    const element = document.querySelector('.giant-container');
    if (window.scrollY > 0) {
        element.style.boxShadow = '0 0 100px hsl(0, 0%, 0%, 0.7)';
    } else {
        element.style.boxShadow = 'none';
    }
});

//small card perspective hover
let constrain = 15;

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.top - (box.height / 2)) / constrain;
    let calcY = (x - box.left - (box.width / 2)) / constrain;

    return "perspective(1000px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

document.querySelectorAll('.perspective-card-small').forEach(card => {
    card.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([card]);

        window.requestAnimationFrame(function () {
            transformElement(card, position);
        });
    };

    card.onmouseleave = function () {
        card.style.transform = 'rotateY(0) rotateX(0)'; // Reset transform on mouse leave
    };
});
