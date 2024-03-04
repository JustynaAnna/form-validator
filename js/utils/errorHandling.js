//Adds the 'error' class to the form box and sets the error message text.
export const showError = (input, msg) => {
  const formBox = input.closest(".form-box");
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

//  Removes the 'error' class from the form box.
export const clearError = (input) => {
  const formBox = input.closest(".form-box");
  formBox.classList.remove("error");
};
