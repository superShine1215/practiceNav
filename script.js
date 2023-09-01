const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btn = document.querySelector(".btnlogin-popup");
const close = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn.addEventListener("click", () => {
  if (wrapper.classList.contains("active")) {
    wrapper.classList.remove("active");
    wrapper.classList.add("active-popup");
  } else {
    wrapper.classList.add("active-popup");
  }
});

close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
