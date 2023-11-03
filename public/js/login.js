const { use } = require('../../controllers');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#Email-Login').value.trim();
  const password = document.querySelector('#Password-Login').value.trim();

  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#Username-Signup').value.trim();
  const email = document.querySelector('#Email-Signup').value.trim();
  const password = document.querySelector('#Password-Signup').value.trim();
  const confirm = document.querySelector('#Confirm-Signup').value.trim();

  if (username && email && password && confirm && password === confirm) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
