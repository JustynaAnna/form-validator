import { popupModal } from "../components/domElements.js";
/**
 * Checks for errors in the form and displays a modal if there are no errors.
 * This function iterates through all form elements with the class 'form-box',
 * counts the elements with the 'error' class, and if no errors are found,
 * it displays a modal indicating that the form has been submitted successfully.
 * Note: This function serves as a simulation of form submission.
 */

export const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    popupModal.classList.add("show-popup");
  }
};
