// --- SESSION UTILITIES ---

// Get logged-in user object from localStorage
function getLoggedUser() {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  
  // Check if user is logged in
  function isLoggedIn() {
    return !!getLoggedUser();
  }
  
  // Logout: clear user and go to login page
  function logout() {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "login.html";
  }
  
  // Protect any page: call protectPage() at top of that page
  function protectPage() {
    if (!isLoggedIn()) {
      alert("Please login to continue.");
      window.location.href = "login.html";
    }
  }
  
  // On login/signup pages: call redirectIfLoggedIn()
  function redirectIfLoggedIn() {
    if (isLoggedIn()) {
      window.location.href = "index.html";
    }
  }
  
  // --- NAVBAR & WELCOME UI BINDING (runs on every page) ---
  document.addEventListener("DOMContentLoaded", () => {
    const user = getLoggedUser();
  
    const welcomeEl = document.getElementById("welcome-user");
    const authLinks = document.getElementById("auth-links");
    const logoutBtn = document.getElementById("logout-btn");
  
    if (user && welcomeEl) {
      welcomeEl.textContent = `Welcome, ${user.name} 👋`;
    }
  
    if (authLinks) {
      authLinks.style.display = user ? "none" : "flex";
    }
  
    if (logoutBtn) {
      logoutBtn.style.display = user ? "inline-flex" : "none";
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
      }
      
  });

  