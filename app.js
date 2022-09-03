// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.querySelector(".myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// ***HAMBURGER MENU***

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}));


document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click", () => {
  menuList.classList.add("active-menu")
  menuList.classList.remove("active-menu");
}))

function getPartingCharges(){
  $(":button").removeClass("active-menu");
  $(this).addClass("active-menu");
 }


