console.log('script.js connected');

// ****************************** part 1 ******************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();
  
  // 1: get the input from user related to the new task and the owner of the task
  const newTask = document.getElementById('task-input');
  const newOwner = document.getElementById('owner-input');

  // 2: append it to the DOM
  const listParent = document.getElementById('tasks-list');
  const newListItem = document.createElement('li');
  newListItem.innerHTML = `Task: ${newTask.value}. From: ${newOwner.value}`;

  listParent.appendChild(newListItem);
  
  // 3: clear the form after the submission
  
newTask.value = '';
newOwner.value = '';  
});

// ****************************** part 2 ******************************

// 1: get the DOM element that represents 'Update gif' button
const updateGifBtn = document.getElementById('update-button');

// 2: add to click handler to it
updateGifBtn.addEventListener('click', () => {

// 3: get the DOM element that represents 'iframe tag'
const gifFrame = document.querySelector('iframe');

// 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button
// gifFrame.src = 'https://giphy.com/embed/1MTLxzwvOnvmE';

// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

if (gifFrame.src == 'https://giphy.com/embed/1MTLxzwvOnvmE') {
  gifFrame.src = 'https://giphy.com/embed/MOWPkhRAUbR7i';    
}
else if (gifFrame.src == 'https://giphy.com/embed/MOWPkhRAUbR7i'){
  gifFrame.src = 'https://giphy.com/embed/1MTLxzwvOnvmE';
}


});