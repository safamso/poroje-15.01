const $ = (id) => document.getElementById(id);
const horizontalLeftContactElement = $("horizontalLeftContact");
const horizontalRightContactElement = $("horizontalRightContact");

//Events//
const hideOffset = 200; // səhifənin sonuna neçə px qalmış gizlənsin

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom =
        documentHeight - (scrollTop + windowHeight);
    if (distanceFromBottom < hideOffset) {
        horizontalLeftContactElement.classList.add("hide");
        horizontalRightContactElement.classList.add("hide");
    } else {
        horizontalLeftContactElement.classList.remove("hide");
        horizontalRightContactElement.classList.remove("hide");
    }
});