const modeButton = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

modeButton.addEventListener("change", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
});
