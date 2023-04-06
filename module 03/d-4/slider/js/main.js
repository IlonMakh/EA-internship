document.addEventListener("DOMContentLoaded", function () {
    const viewers = document.querySelectorAll(".image-compare");
    const splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        drag: false,
        focus: "center",
        start: 2,
    });

    viewers.forEach((element) => {
        let view = new ImageCompare(element, {
            controlColor: "transparent",
        }).mount();
    });

    splide.mount();
});
