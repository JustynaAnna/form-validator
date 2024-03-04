import { clearError, showError } from "../utils/errorHandling.js";
/**
 * Validates if input fields are not empty.
 * Displays an error message if each field is empty,
 * otherwise clears any existing error.
 */
export const validateNonEmptyFields = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, "This field is required");
    } else {
      clearError(el);
    }
  });
};

/**
 * Validates the length of the input field.
 * Displays an error message if the input length is less than the specified minimum.
 */

export const validateFieldLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, `This field must be at least ${min} characters long`);
  }
};

//Validates if two password fields match.
export const validatePasswordMatch = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Passwords do not match");
  } else {
    clearError(pass2);
  }
};

/**
 * Validates if the given email address has a valid format.
 * Displays an error message if the email format is invalid.
 */

export const validateEmail = (email) => {
  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (mailRegex.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "Invalid email format");
  }
};
