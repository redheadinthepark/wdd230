const currentYear = new Date().getFullYear();

const footerFirstParagraph = document.querySelector('footer p:first-of-type');
footerFirstParagraph.textContent = `©${currentYear} Leah Adair United States of America`;

const lastModified = document.lastModified;
const footerSecondParagraph = document.querySelector('footer p:last-of-type');
footerSecondParagraph.textContent = `lastModified ${lastModified}`;
