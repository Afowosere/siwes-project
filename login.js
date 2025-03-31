document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.getElementById("form-title");
  const nameField = document.getElementById("name-field");
  const submitBtn = document.getElementById("submit-btn");
  const toggleText = document.getElementById("toggle-form");
  const authForm = document.getElementById("auth-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nameInput = document.getElementById("name");

  let isLogin = true; // Default mode is Login

  // Toggle between Login & Sign-Up
  toggleText.addEventListener("click", () => {
      isLogin = !isLogin;
      updateForm();
  });

  function updateForm() {
      if (isLogin) {
          formTitle.textContent = "Login";
          submitBtn.textContent = "Login";
          nameField.classList.add("hidden");
          toggleText.innerHTML = "<span>Sign Up</span>";
      } else {
          formTitle.textContent = "Sign Up";
          submitBtn.textContent = "Sign Up";
          nameField.classList.remove("hidden");
          toggleText.innerHTML = "<span>Login</span>";
      }
  }

  // Form Validation and Submission
  authForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const name = nameInput.value.trim();

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
      }

      if (!isLogin && name.length < 3) {
          alert("Full Name must be at least 3 characters.");
          return;
      }

      alert(isLogin ? "Login Successful!" : "Sign-Up Successful!");
      authForm.reset();
      updateForm(); // Ensure form resets properly
  });

  // Email Validation Function
  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

  // Ensure correct form state on page load
  updateForm();
});

document.getElementById("submit-btn").addEventListener("click", function () {
    // Redirect to dashboard.html (Change this to your actual dashboard file)
    window.location.href = "dash.html";
});