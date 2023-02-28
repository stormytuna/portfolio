// Enables all tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

document.getElementById("dark-mode-switch").addEventListener("click", (e) => {
	const currentThemeIsDark = document.documentElement.getAttribute("data-bs-theme") === "dark";

	const newTheme = currentThemeIsDark ? "light" : "dark";
	const newBackground = currentThemeIsDark ? "assets/background-light.jpg" : "assets/background-dark.jpg";

	document.body.style.backgroundImage = `url(${newBackground})`;
	document.documentElement.setAttribute("data-bs-theme", newTheme);
  if (currentThemeIsDark) {
    document.documentElement.classList.remove("dark-mode")
  } else {
    document.documentElement.classList.add("dark-mode")
  }
});
