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
    }
    else {
        element.style.boxShadow = 'none';
    }
});








//small card perspective hover

let constrain = 15; // The variable "constrain" equals 15, which is some constant meant to control the effect

function transforms(x, y, el) { // This is a function called "transforms" with parameters "x," "y," and "el." The function is meant to take in the cursor's horizontal and vertical positions based on the screen/viewport and the card HTML element as arguments for these parameters and return some CSS.
    let box = el.getBoundingClientRect(); // The variable "box" equals the bounding rectangle of the "el" variable, which is supposed to be an element. This means that "box" can be used to provide various details about the bounding rectangle
    let calcX = -(y - box.top - (box.height / 2)) / constrain; // The variable "calcX" is supposed to control the rotation of the element about the x-axis based on the cursor's vertical position. The variable is negative vertical mouse position based on screen/viewport minus the vertical position of the top edge of the element based on the screen/viewport minus half of the height of the element all divided by "constrain."
    let calcY = (x - box.left - (box.width / 2)) / constrain; // The variable "calcX" is supposed to control the rotation of the element about the y-axis based on the cursor's horizontal position. The variable is horizontal mouse position based on screen/viewport minus the vertical position of the top edge of the element based on the screen/viewport minus half of the height of the element all divided by "constrain."

    return "perspective(1000px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)"; // It returns some CSS with the rotateX and rotateY properties controlled by the variables "calcX" and "calcY."
};

function transformElement(el, xyEl) { // This is a function valled "transformElement", with the parameters "el" and "xyEl." The function is meant to take in the card HTML element and some array (with cursor x and y positions and the card HTML element) as arguments for these parameters and set the element's transform CSS property to what is returned by the "transforms" function with the stuff from the array as the arguments. ".apply" allows the array things as arguments.
    el.style.transform = transforms.apply(null, xyEl);
}

// The below says that for each element in the document with the class "perspective-card-small," have "card" equal those elements and for each of them, do the below
document.querySelectorAll('.perspective-card-small').forEach(card => {
    card.onmousemove = function (e) { // When the mouse moves do function(e). The parameter "e" is automatically defined as the card HTML element.
        let xy = [e.clientX, e.clientY]; // Have the "xy" array equal the horizontal and vertical positions of the cursor based on the screen/viewport.
        let position = xy.concat([card]); // Have "position" equal the "xy" array with the card HTML element added to it.

        window.requestAnimationFrame(function () { // window.requestAnimationFrame makes it so the function inside is executed before the screen is repainting, syncing the code with the browser refresh rate to make a smoother animation. The function inside just says to execute the "transforElement" function with the card HTML element and "position" as its arguments.
            transformElement(card, position);
        });
    };

    card.onmouseleave = function () { // When the mouse leaves the card, do the function, which sets the card's transform CSS property to what is shown.
        card.style.transform = 'rotateY(0) rotateX(0)';
    };
});

