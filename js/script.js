document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search");

    // Simple search functionality (logs to console for now)
    searchInput.addEventListener("input", (e) => {
        console.log("Searching for:", e.target.value);
    });
});
