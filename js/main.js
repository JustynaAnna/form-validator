import {
  clearBtn,
  closeModalBtn,
  form,
  pass2Input,
  passwordInput,
  passwordVisibilityIcons,
  popupModal,
  sendBtn,
  usernameInput,
} from "./components/domElements.js";

import {
  switchEyeIcon,
  togglePasswordVisibility,
  updatePasswordRequirements,
} from "./utils/passwordUtils.js";

import { clearForm } from "./utils/clearForm.js";
import { sendForm } from "./utils/formSubmit.js";
/**
 * Listens for clicks on password visibility icons.
 * Toggles the visibility of password fields, allowing users
 * to show or hide the password characters.
 */
passwordVisibilityIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passwordInput = icon.parentElement.querySelector("input");
    togglePasswordVisibility(passwordInput);
    switchEyeIcon(icon, [passwordInput, pass2Input]);
  });
});

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendForm();
});

const closePopupAndRedirect = () => {
  popupModal.classList.remove("show-popup");
  clearForm();
  const newPageUrl =
    "https://en.wikipedia.org/wiki/The_Groke#/media/File:Buka.jpg";
  window.location.href = newPageUrl;
};

closeModalBtn.addEventListener("click", closePopupAndRedirect);

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    closePopupAndRedirect();
    console.log("zegezet aaa");
  }
});

usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendForm();
  }
});

passwordInput.addEventListener("keyup", (e) => {
  updatePasswordRequirements(e.target.value);
});
