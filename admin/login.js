document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 🚨 VERY IMPORTANT

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // demo credentials
  if (email === "admin" && password === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    window.location.href = "accounts.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid email or password!";
  }
});
