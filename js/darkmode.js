$(document).ready(function() {
    const darkmodeButton = document.querySelector(".darkmode-button");
    const body = document.body;

    // Load dark mode preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("darkmode");
        if (darkmodeButton) {
            darkmodeButton.textContent = "Light Mode";
        }
    }

    // Toggle dark mode
    if (darkmodeButton) {
        darkmodeButton.addEventListener("click", function() {
            body.classList.toggle("darkmode");
            const isDark = body.classList.contains("darkmode");
            
            // Save preference to localStorage
            localStorage.setItem("darkMode", isDark);
            
            // Update button text
            darkmodeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }
});