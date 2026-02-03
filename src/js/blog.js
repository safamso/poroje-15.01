//Elemets//

const $=(id)=>document.getElementById(id);
const horizontalLeftBlogElement = $("horizontalLeftBlog");
const horizontalRightBlogElement = $("horizontalRightBlog");

//Events//
const hideOffset = 200; // səhifənin sonuna neçə px qalmış gizlənsin

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const distanceFromBottom =
    documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom < hideOffset) {
    horizontalLeftBlogElement.classList.add("hide");
    horizontalRightBlogElement.classList.add("hide");
  } else {
    horizontalLeftBlogElement.classList.remove("hide");
    horizontalRightBlogElement.classList.remove("hide");
  }
});