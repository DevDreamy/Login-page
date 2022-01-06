const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g;
const validateEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var fakeLoginModal = new bootstrap.Modal(
  document.getElementById('fakeLoginModal'),
  {}
);

function isEmailValid(email) {
  if (!email.match(validateEmail)) {
    return emailInput.classList.add('is-invalid');
  }
  emailInput.classList.remove('is-invalid');
  return true;
}

function isPasswordValid(password) {
  if (!password.match(validatePassword)) {
    if (passwordInput.classList.contains('is-valid')) {
      passwordInput.classList.remove('is-valid');
      passwordInput.classList.add('is-invalid');
    }
    passwordInput.classList.add('is-invalid');
  } else {
    if (passwordInput.classList.contains('is-invalid')) {
      passwordInput.classList.remove('is-invalid');
      passwordInput.classList.add('is-valid');
    }

    passwordInput.classList.add('is-valid');
    return true;
  }
}

function handleKeyUp(event) {
  event.preventDefault();
  isPasswordValid(passwordInput.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (isEmailValid(emailInput.value) && isPasswordValid(passwordInput.value))
    return fakeLoginModal.show();

  return;
}

loginForm.addEventListener('keyup', handleKeyUp);
loginForm.addEventListener('submit', handleSubmit);
