import {
  emailInput,
  pass2Input,
  passwordInput,
  requirementListItem,
  usernameInput,
} from "../components/domElements.js";

import { clearError } from "./errorHandling.js";

export const clearForm = () => {
  [usernameInput, passwordInput, pass2Input, emailInput].forEach((el) => {
    el.value = "";
    clearError(el);
  });
  requirementListItem.classList.remove("display-list");
};
