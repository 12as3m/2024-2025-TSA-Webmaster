window.addEventListener("scroll", function () {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 0.7}px)`;
});