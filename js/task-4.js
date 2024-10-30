const form = document.querySelector('.login-form');
const destroyButton = document.querySelector('.destroy-btn');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    console.log({ email, password });
    form.reset();
  }
});

destroyButton.addEventListener('click', () => {
  form.reset();
  console.clear();
});
