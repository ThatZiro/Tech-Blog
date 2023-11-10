const loginFormHandler = async (event) => {
  console.log('login clicked');
  event.preventDefault();
  const username = document.querySelector('#Input-Username').value.trim();
  const password = document.querySelector('#Input-Password').value.trim();

  if (username && password) {
    const response = await fetch('api/account/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  }
};

document.querySelector('#Login-Button').addEventListener('click', loginFormHandler);
