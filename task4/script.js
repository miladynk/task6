const userLink = document.querySelector('#task');

userLink.addEventListener('click',() => {
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('#task');
    userTextField.textContent = userText;
    event.preventDefault();
})

