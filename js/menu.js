const iconomenu = document.querySelector(".iconomenu");
const menu = document.querySelector(".menu_navegacion");
// const whatsapps = document.querySelectorAll(".social_media_icon");

iconomenu.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  // console.log(e.target);
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != iconomenu
  ) {
    menu.classList.toggle("spread");
  }
});

// whatsapp.addEventListener("click", ()=>{
//     whatsapp.classList.toggle("rojo");
// })

// whatsapps.forEach((what) => {
//   what.addEventListener("click", () => {
//     what.classList.toggle("rojo");
//   });
// });
