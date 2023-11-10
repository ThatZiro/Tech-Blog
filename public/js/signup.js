const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#Input-Username').value.trim();
  const email = document.querySelector('#Input-Email').value.trim();
  const password = document.querySelector('#Input-Password').value.trim();
  const confirm = document.querySelector('#Input-Confirm').value.trim();

  if (username && email && password && confirm && password === confirm) {
    const response = await fetch('/api/account', {
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

document.querySelector('#Register-Button').addEventListener('click', signupFormHandler);
