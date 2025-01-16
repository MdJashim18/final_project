document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  console.log("Logged in status:", isLoggedIn);

  const registerButton = document.getElementById('registerButton');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const profileButton = document.getElementById('profileButton');

  if (isLoggedIn) {
      registerButton.style.display = 'none';
      loginButton.style.display = 'none';
      logoutButton.style.display = 'inline-block';
      profileButton.style.display = 'inline-block';
  } else {
      registerButton.style.display = 'inline-block';
      loginButton.style.display = 'inline-block';
      logoutButton.style.display = 'none';
      profileButton.style.display = 'none';
  }
});

function login(event) {
  console.log("Login button clicked");
  localStorage.setItem('isLoggedIn', 'true');
  window.location.reload();
}

function logout(event) {
  console.log("Logout button clicked");
  localStorage.setItem('isLoggedIn', 'false');
  window.location.reload();
}
