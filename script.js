

document.querySelector(".header__burger").addEventListener("click", function () {
    document.querySelector(".nav").classList.add("active");
  })

  document.querySelector(".nav-close").addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("active");
  })

  document.querySelectorAll(".nav-list-item").forEach(element => {
    element.addEventListener("click", function () {
      document.querySelector(".nav").classList.remove("active");

    })
  });