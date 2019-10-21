let navbar = document.getElementById("navbar");
let stickyNavbar = navbar.offsetTop;
let navList = navbar.querySelector("#navbar-collapse");
let navButton = navbar.querySelector(".navbar-toggler");

/**
 * addSticky()
 * Add the class to the header when you reach its scroll position. Remove class when you leave the scroll position
 * @param {object} block -  fixed block
 * @param {string} classProp - class property
 */
const addSticky = (block, classProp) => {
  if (window.pageYOffset > stickyNavbar) {
    block.classList.add(classProp);
  } else {
    block.classList.remove(classProp);
  }
};

/**
 * toggleBlockOnClick()
 * Show/hide block on button click
 * @param {object} button -clicking button
 * @param {object} block - toggle block
 * @param {string} classProp - class property
 */
const toggleBlockOnClick = (button, block, classProp) => {
  button.addEventListener(
    "click",
    function() {
      if (block.classList.contains(classProp)) {
        block.classList.remove(classProp);
      } else {
        block.classList.add(classProp);
      }
    },
    false
  );
};

window.onscroll = function() {
  addSticky(navbar, "navbar--fixed");
};
toggleBlockOnClick(navButton, navList, "open");
