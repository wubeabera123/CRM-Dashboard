document.addEventListener("DOMContentLoaded", () => {
    // Search input functionality
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener("input", (e) => {
        console.log("Searching for:", e.target.value);
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Optional: Close sidebar when clicking outside (for better UX)
    document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });
});
