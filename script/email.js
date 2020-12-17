window.onload = function () {
  let email = document.querySelector('input[name="email"]');
  let btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    console.log(email.value);
  });
};
