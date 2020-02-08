
var letter = document.querySelector(".letter");
var sendLetter = document.querySelector(".letter__button");
var letterForm = document.querySelector(".letter__form");
var userName = letter.querySelector("[name=name]");
var userEmail = letter.querySelector("[name=email]");
var animation_duration = 4000;


sendLetter.addEventListener("click", function (evt) {
  if (userName.value == "" || userEmail.value == "") {
    evt.preventDefault();
    letterForm.classList.add("letter__form--sent-error");
    userName.classList.add("letter__input--name-required");
    userEmail.classList.add("letter__input--email-required");
    // alert ('Все поля должны быть заполнены!');
    return false;
  } else {
      evt.preventDefault();
      letter.classList.add("letter--sent");
      setTimeout("letterForm.submit()", animation_duration);
      return true;
}
});

