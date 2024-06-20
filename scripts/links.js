const baseURL = "https://redheadinthepark.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const listContainer = document.getElementById('links-list'); 
  listContainer.innerHTML = '';

  weeks.lessons.forEach(lesson => {
    const lessonSection = document.createElement('section');
    lessonSection.classList.add('lesson-section');

    const lessonTitle = document.createElement('h2');
    lessonTitle.textContent = `Lesson ${lesson.lesson}`;
    lessonSection.appendChild(lessonTitle);

    const linkList = document.createElement('ul');
    lesson.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    lessonSection.appendChild(linkList);
    listContainer.appendChild(lessonSection);
  });
}

getLinks();
