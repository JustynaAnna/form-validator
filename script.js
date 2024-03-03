const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pass2Input = document.querySelector("#password2");
const emailInput = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popupModal = document.querySelector(".popup");
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector("form");

const showError = (input, msg) => {
  const formBox = input.closest(".form-box");
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.closest(".form-box");
  formBox.classList.remove("error");
};

const validateNonEmptyFields = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, "This field is required");
    } else {
      clearError(el);
    }
  });
};

const validateFieldLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, `This field must be at least ${min} characters long`);
  }
};

const validatePasswordMatch = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Passwords do not match");
  } else {
    clearError(pass2);
  }
};

const validateEmail = (email) => {
  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (mailRegex.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "Invalid email format");
  }
};

//The function checkErrors checks for errors in the form and simulates submission

const checkErrors = () => {
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

const clearForm = () => {
  [usernameInput, passwordInput, pass2Input, emailInput].forEach((el) => {
    el.value = "";
    clearError(el);
  });
  requirementListItem.classList.remove("display-list");
};

// Funkcja obsługująca wysłanie formularza
const sendForm = () => {
  validatePasswordMatch(passwordInput, pass2Input);
  validateNonEmptyFields([
    usernameInput,
    passwordInput,
    pass2Input,
    emailInput,
  ]);
  validateFieldLength(usernameInput, 3);

  validateEmail(emailInput);
  checkErrors();
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendForm();
});

usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendForm();
  }
});

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
});

closeModalBtn.addEventListener("click", () => {
  popupModal.classList.remove("show-popup");
  clearForm();
});
//TUTAJ TESTUJE KOD

const passwordVisibilityIcons = document.querySelectorAll(".fa-eye");
const requirementListItem = document.querySelector(".requirement-list");
const list = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item

const checkPasswordRequirements = (password) => {
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

//Funkcja, która daje ptaszki do listy
const updatePasswordRequirements = (value) => {
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

passwordInput.addEventListener("keyup", (e) => {
  updatePasswordRequirements(e.target.value);
});

const togglePasswordVisibility = (inputField) => {
  inputField.type = inputField.type === "password" ? "text" : "password";
};

const switchEyeIcon = (item, input) => {
  const firstInput = input[0]; // Pobieramy pierwszy input z tablicy input
  item.className = `fa-solid fa-eye${
    firstInput.type === "password" ? "" : "-slash"
  }`;
};

passwordVisibilityIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passwordInput = icon.parentElement.querySelector("input");
    togglePasswordVisibility(passwordInput);
    switchEyeIcon(icon, [passwordInput, pass2Input]);
  });
});
