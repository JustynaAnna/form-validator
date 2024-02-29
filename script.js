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
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([username, pass, pass2, email]);
  checkLength(username, 3);
  checkLength(pass, 8);
  checkPassword(pass, pass2);
  checkMail(email);
  checkErrors();
});

// clearBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const arrForm = Array.from(form);
//   arrForm.forEach((input) => {
//     input.value = "";
//   });
// });
clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show-popup");
  clearForm();
});
