//banner parallax
window.addEventListener("scroll", function () {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 0.7}px)`;
    document.querySelector("header").style.filter = `blur(${distance * 0.03}px)`;

    const maxScroll = 1000;
    const opacity = Math.max(0, 1 - distance / maxScroll);
    document.querySelector("header").style.opacity = opacity;
});

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


//big card perspective hover
//having two at once interferes with each other for some reason
//let constrainBig = 70;

//function transforms(x, y, el) {
//    let box = el.getBoundingClientRect();
//    let calcX = -(y - box.top - (box.height / 2)) / constrainBig;
//    let calcY = (x - box.left - (box.width / 2)) / constrainBig;

//    return "perspective(1000px) "
//        + "   rotateX(" + calcX + "deg) "
//        + "   rotateY(" + calcY + "deg) ";
//};

//function transformElement(el, xyEl) {
//    el.style.transform = transforms.apply(null, xyEl);
//}

//document.querySelectorAll('.perspective-card').forEach(card => {
//    card.onmousemove = function (e) {
//        let xy = [e.clientX, e.clientY];
//        let position = xy.concat([card]);

//        window.requestAnimationFrame(function () {
//            transformElement(card, position);
//        });
//    };

//    card.onmouseleave = function () {
//        card.style.transform = 'rotateY(0) rotateX(0)'; // Reset transform on mouse leave
//    };
//});
