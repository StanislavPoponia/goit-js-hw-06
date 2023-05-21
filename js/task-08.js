const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Поля повинні бути заповнені!');
  }
  const formElements = { mail: email.value, password: password.value };

  console.log(formElements);

  event.currentTarget.reset;
}
