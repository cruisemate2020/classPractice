console.log('script.js connected');

const paragraphNode = document.querySelector('#paragraph');

// console.log(paragraphNode.id);

const parId = paragraphNode.getAttribute('id');
console.log('---->', parId);

paragraphNode.setAttribute('id', 'info-paragraph');

paragraphNode.setAttribute('class', 'paragraphs');

paragraphNode.removeAttribute('id');

//add, update and remove dom elements

//add --> create an element
const mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'This is the main title';

const parent = document.querySelector('body');
parent.appendChild(mainTitle);

//insert before
const sibling = document.querySelector('p');
parent.insertBefore(mainTitle, sibling);

//update
const link = document.getElementById('google-link');
link.innerHTML = 'Go to Google';
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

//remove
parent.removeChild(paragraphNode);

//assign events to dom elements
const addCommentButton = document.querySelector('#add-comment-button');
// addCommentButton.addEventListener('click', () => console.log('clicked on the comments button'));

// addCommentButton.onclick = () => console.log('clicked on the comment button');

addCommentButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'this is some very funny comment ha ha ha';

    parent.appendChild(newParagraph);
});

//handle inputs (and forms)

const newItemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const deleteButtons = document.querySelectorAll('.delete-item-button');


addItemButton.addEventListener('click', () => {
    const listParent = document.getElementById('item-list');
    const newListItem = document.createElement('li');
    console.log(newItemInput.value);
    newListItem.innerHTML = newItemInput.value;

    listParent.appendChild(newListItem);
})

function deleteListItem(buttonUserClickedOn){
    buttonUserClickedOn.addEventListener('click', () => {
        const parentLiTag = buttonUserClickedOn.parentElement;
        parentLiTag.remove();
    })
}

deleteButtons.forEach(deleteListItem);