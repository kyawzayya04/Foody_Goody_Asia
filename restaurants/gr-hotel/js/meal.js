// navbar starts

// burger menu starts
let burger = document.querySelector(".burger");
let bgmenu = document.querySelector(".burger-menu");
let close = document.getElementById("close");

burger.addEventListener("click", () => {
  bgmenu.style.display = "flex";
  bgmenu.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
  bgmenu.style.transform = "translateX(100%)";
});

const bmeal = document.getElementById("burger-meal");
const bbeverages = document.getElementById("burger-beverages");
const bbar = document.getElementById("burger-bar");

bmeal.addEventListener("click", (e) => {
  bgmenu.style.display = "none";
  bgmenu.style.transform = "translateX(100%)";
});

bbeverages.addEventListener("click", (e) => {
  bgmenu.style.display = "none";
  bgmenu.style.transform = "translateX(100%)";
});

bbar.addEventListener("click", (e) => {
  bgmenu.style.display = "none";
  bgmenu.style.transform = "translateX(100%)";
});

// burger menu ends

// navbar ends

// category starts
let categories = document.querySelectorAll(".category-btn");
let menuPages = document.querySelectorAll(".menu-container");

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    e.preventDefault();

    let page = category.getAttribute("data-page");
    // console.log(page);

    // Scroll to top of the page
    window.scrollTo(0, 0);

    // Hide all manuPages
    menuPages.forEach((menuPage) => {
      menuPage.style.display = "none";
    });

    // Show selected menuPage
    const selectedPage = document.getElementById(page);
    selectedPage.style.display = "flex";
    // console.log(selectedPage);

    // Update active link
    const activeLink = document.querySelector(".category-active");
    activeLink.classList.remove("category-active");
    category.classList.add("category-active");
    // console.log(activeLink);
  });
});
// category ends

// dummy data starts

// dummy data ends
