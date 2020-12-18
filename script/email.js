window.onload = function () {
  let email = document.querySelector('input[name="email"]');
  const btn = document.querySelector("button");
  let infoEmail = document.querySelector(".info");
  let errorEmail = document.querySelector(".error");
  let formErrorEmail = document.querySelector("form");

  btn.addEventListener("click", () => {
    if (!ValidateEmail(email)) {
      infoEmail.classList.add("active");
      errorEmail.classList.add("active");
      formErrorEmail.classList.add("formErrorEmail");
    } else {
      infoEmail.classList.remove("active");
      errorEmail.classList.remove("active");
      formErrorEmail.classList.remove("formErrorEmail");
    }
  });
  function ValidateEmail(inputText) {
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputText.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
};
