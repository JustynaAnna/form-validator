import {
  emailInput,
  pass2Input,
  passwordInput,
  usernameInput,
} from "../components/domElements.js";
import {
  validateEmail,
  validateFieldLength,
  validateNonEmptyFields,
  validatePasswordMatch,
} from "../components/formValidation.js";
import { checkErrors } from "./formAction.js";

export const sendForm = () => {
  validateNonEmptyFields([
    usernameInput,
    passwordInput,
    pass2Input,
    emailInput,
  ]);
  validatePasswordMatch(passwordInput, pass2Input);
  validateFieldLength(usernameInput, 3);
  validateEmail(emailInput);
  checkErrors();
};
