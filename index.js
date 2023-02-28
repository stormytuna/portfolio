// Enables all tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

// Toggles dark mode
document.getElementById("dark-mode-switch").addEventListener("click", (e) => {
	const currentThemeIsDark = document.documentElement.getAttribute("data-bs-theme") === "dark";

	const newTheme = currentThemeIsDark ? "light" : "dark";
	const newBackground = currentThemeIsDark ? "assets/background-light.jpg" : "assets/background-dark.jpg";

	document.body.style.backgroundImage = `url(${newBackground})`;
	document.documentElement.setAttribute("data-bs-theme", newTheme);
	if (currentThemeIsDark) {
		document.documentElement.classList.remove("dark-mode");
	} else {
		document.documentElement.classList.add("dark-mode");
	}
});

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.body.style.backgroundImage = `url(assets/background-dark.jpg)`;
	document.documentElement.setAttribute("data-bs-theme", "dark");
	document.documentElement.classList.add("dark-mode");
  document.getElementById("dark-mode-switch").checked = true
}
