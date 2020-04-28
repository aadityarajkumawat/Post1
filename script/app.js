const textField = document.querySelector('.input-section input');
const addTaskButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.list');

addTaskButton.addEventListener('click', () => {
    // User Input
    let textInput = textField.value;
    // New Element creation and adding CSS class
    let newTaskElement = document.createElement('P');
    newTaskElement.classList.add('list-elem');
    // Appending to document and adding user-text
    let textValue = document.createTextNode(textInput);
    newTaskElement.appendChild(textValue);
    taskList.appendChild(newTaskElement);
});

textField.addEventListener('focus', () => {
    textField.value = "";
});
