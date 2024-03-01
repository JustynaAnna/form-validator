const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close");
// const form = document.querySelector("form");

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} should be at least ${min} letters long`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "The passwords don't match");
  }
};

const checkMail = (email) => {
  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (mailRegex.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "The email is invalid");
  }
};

//Symulacja wysyłania formularza

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};

const clearForm = () => {
  [username, pass, pass2, email].forEach((el) => {
    el.value = "";
    clearError(el);
  });
  requirementList.classList.remove("display-list");
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([username, pass2, email]);
  checkLength(username, 3);
  checkPassword(pass, pass2);
  checkMail(email);
  checkErrors();
});

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show-popup");
  clearForm();
});
//TUTAJ TESTUJE KOD

const eyeIcon = document.querySelector(".fa-eye");
const requirementList = document.querySelector(".requirement-list");
const list = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item
const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];

pass.addEventListener("keyup", (e) => {
  requirementList.classList.add("display-list");
  requirements.forEach((item) => {
    // Check if the password matches the requirement regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = list[item.index];

    // Updating class and icon of requirement item if requirement matched or not
    if (isValid) {
      requirementItem.classList.add("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
    }
  });
});

eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  pass.type = pass.type === "password" ? "text" : "password";
});
