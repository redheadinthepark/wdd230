const lastModified = document.lastModified;
const footerSecondParagraph = document.querySelector('footer p:last-of-type');
footerSecondParagraph.textContent = `Last modified ${lastModified}`;
