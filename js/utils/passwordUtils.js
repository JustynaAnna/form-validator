import { list, requirementListItem } from "../components/domElements.js";
/**
 * Checks if the provided password meets certain requirements.
 * Iterates through a list of requirements including minimum length,
 * presence of numbers, lowercase and uppercase letters, and special characters,
 * and returns an array of objects indicating whether each requirement is met.
 */

export const checkPasswordRequirements = (password) => {
  const requirements = [
    { label: "Minimum of 8 characters", regex: /.{8,}/ },
    { label: "At least one number", regex: /[0-9]/ },
    { label: "At least one lowercase letter", regex: /[a-z]/ },
    { label: "At least one special character", regex: /[^A-Za-z0-9]/ },
    { label: "At least one uppercase letter", regex: /[A-Z]/ },
  ];

  return requirements.map((requirement) => ({
    label: requirement.label,
    isValid: requirement.regex.test(password),
  }));
};

/**
 * Updates the password requirements list based on the input value.
 * Adds checkmarks or circles to each requirement item in the list
 * depending on whether the corresponding requirement is met.
 */

export const updatePasswordRequirements = (value) => {
  requirementListItem.classList.add("display-list");
  checkPasswordRequirements(value).forEach((requirement, index) => {
    const requirementItem = list[index];
    if (requirement.isValid) {
      requirementItem.classList.add("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
    }
  });
};

/**
 * Toggles the eye icon's appearance based on the input field's type.
 * Changes the class of the icon to display an open eye or a crossed-out eye,
 * depending on whether the input field's type is 'password' or not.
 */

export const switchEyeIcon = (item, input) => {
  const firstInput = input[0]; // Pobieramy pierwszy input z tablicy input
  item.className = `fa-solid fa-eye${
    firstInput.type === "password" ? "" : "-slash"
  }`;
};

/**
 * Toggles the visibility of the password input field.
 * allowing the user to show or hide the password characters.
 */

export const togglePasswordVisibility = (inputField) => {
  inputField.type = inputField.type === "password" ? "text" : "password";
};
