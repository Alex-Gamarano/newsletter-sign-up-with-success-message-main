let hero = document.getElementById("hero");
let cards = document.querySelectorAll(".visible");
let btns = document.querySelectorAll(".button");
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

function cardSwap() {
  cards.forEach((card) => {
    card.classList.toggle("invisible");
  });
}

btns[0].addEventListener("click", () => {
  if (!mail.value) {
    err.innerHTML = "email field is empty";
  } else if (mail.value && err.innerHTML == "") setTimeout(cardSwap(), 1000);
});

btns[1].addEventListener("click", () => {
  window.location.reload();
});
