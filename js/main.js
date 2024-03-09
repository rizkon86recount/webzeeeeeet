// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const navLists = document.querySelector("nav");

//   burger.addEventListener("click", () => {
//     navLists.classList.toggle("nav-active");
//     burger.classList.toggle("toggle-burger");
//   });
// };
// navSlide();

// const navLink = document.querySelectorAll(".nav-link");
// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener("click", () => {
//     navbbar.classList.toggle("nav-active");
//   });
// }

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  const navLink = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
      navLists.classList.remove("nav-active"); // Menghapus class nav-active untuk menutup hamburger menu
      burger.classList.remove("toggle-burger"); // Juga menghapus class toggle-burger agar hamburger icon kembali ke keadaan semula
    });
  }
};

navSlide();
