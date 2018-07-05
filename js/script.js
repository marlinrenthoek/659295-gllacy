var link = document.querySelector(".contact-info__link");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form__close-button");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-feedback-form");
  login.focus();
}); 

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-feedback-form");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (popup.classList.contains("show-feedback-form")) {
      evt.preventDefault();
      popup.classList.remove("show-feedback-form");
    }
  }
});