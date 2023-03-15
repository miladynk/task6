let textbutton = document.querySelector('.btn');

let UserInput = document.querySelector('#UserInput');

let duplicateField = document.querySelector('#duplicateField');


UserInput.addEventListener('input',()=>{
  duplicateField.textContent = UserInput.value;
})

textbutton.addEventListener('click',()=>{
    console.log(UserInput.value);
    UserInput.value='';
    duplicateField.textContent = UserInput.value;
    event.preventDefault();
})