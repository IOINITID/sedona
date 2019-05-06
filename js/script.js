var searchButton = document.querySelector(".open-modal-button");
var modalField = document.querySelector(".search-form");
var form = modalField.querySelector("form");
var dateIn = modalField.querySelector("[name=date-in-field]");
var dateOut = modalField.querySelector("[name=date-out-field]");
var valueOfPeople = modalField.querySelector("[name=value-of-people]");
var valueOfChild = modalField.querySelector("[name=value-of-child]");
var mapField = document.querySelector(".map-background");

mapField.classList.add("map-index");
modalField.classList.add("hide-defafult");
searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalField.classList.remove("form-error");
  modalField.classList.toggle("hide-defafult");
  modalField.classList.toggle("show-modal");
  mapField.classList.toggle("map-index");
});
form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !valueOfPeople.value || !valueOfChild.value) {
    evt.preventDefault();
    modalField.classList.remove("form-error");
    modalField.offsetWidth = modalField.offsetWidth;
    modalField.classList.add("form-error");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalField.classList.contains("show-modal")) {
      modalField.classList.remove("show-modal");
      modalField.classList.remove("form-error");
    }
  }
});
