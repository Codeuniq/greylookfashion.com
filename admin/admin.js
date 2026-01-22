/* SIDEBAR TOGGLE */
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
toggleBtn.onclick = () => {
  sidebar.classList.toggle("collapsed");
};


// 🔒 Page protection
if(localStorage.getItem("isLoggedIn") !== "true"){
  window.location.href = "login.html";
}

// logout (FIXED)
document.getElementById("logoutLink").addEventListener("click", function(e){
  e.preventDefault(); // 🚨 IMPORTANT
  localStorage.clear();
  window.location.href = "login.html";
});
document.getElementById("logoutLinks").addEventListener("click", function(e){
  e.preventDefault(); // 🚨 IMPORTANT
  localStorage.clear();
  window.location.href = "login.html";
});





const profileIcon = document.getElementById('profileIcon');
  const dropdownMenu = document.getElementById('dropdownMenu');

  profileIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', (e) => {
    if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });





