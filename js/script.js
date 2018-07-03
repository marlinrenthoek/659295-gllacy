var link = document.querySelector(".сontact-info__link");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form__close-button");
var login = popup.querySelector("[name=name]");
var display = document.querySelector(".display-dropdown");
var dropdown = document.querySelector(".site-navigation__dropdown-list");

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

display.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===32) {
    evt.preventDefault();
    dropdown.classList.add("display-dropdown-on");
  }
});
