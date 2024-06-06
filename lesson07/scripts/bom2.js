const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

let chaptersArray = getChapterList();

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const checkMark = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '✖️';
    checkMark.textContent = 'Do';

    li.append(checkMark);
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    checkMark.addEventListener('click', function () {
        this.innerText = 'Done! 😊';
    });
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
