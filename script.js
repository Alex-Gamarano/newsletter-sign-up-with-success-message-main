let hero = document.getElementById("hero");
let cards = document.querySelectorAll(".visible");
let btns = document.querySelectorAll("button");
let mail = document.getElementById("email");
let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
let err = document.createElement("span");
err.classList.add("danger");
mail.insertAdjacentElement("beforebegin", err);
mail.addEventListener("input", () => {
  if (!regEx.test(mail.value)) {
    err.innerHTML = "invalid email";
    mail.classList.add("error");
  } else {
    err.innerHTML = "";
    mail.classList.remove("error");
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.toggle("invisible");
    });
  });
});

window.addEventListener("load", () => {
  if (window.outerWidth > 767) {
    hero.attributes.src.value =
      "./assets/images/illustration-sign-up-desktop.svg";
  }
  if (window.outerWidth < 767) {
    hero.attributes.src.value =
      "./assets/images/illustration-sign-up-mobile.svg";
  }
});
window.addEventListener("resize", () => {
  if (window.outerWidth > 767) {
    hero.attributes.src.value =
      "./assets/images/illustration-sign-up-desktop.svg";
  }
  if (window.outerWidth < 767) {
    hero.attributes.src.value =
      "./assets/images/illustration-sign-up-mobile.svg";
  }
});
