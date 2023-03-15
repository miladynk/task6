const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click',() => {
alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click',() => {
alert('Служит для отображения предупреждения');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click',()=>{
    alert('Служит для вывода диалогого окна для ввода данных пользователем');
})

const consoleExample = document.querySelector('#consoleExample');
consoleExample.addEventListener('click',()=>{
    console.log('Пример использования команды console.log');
})

const alertExample = document.querySelector('#alertExample');
alertExample.addEventListener('click',()=>{
    console.log('Пример использования команды alert');
    alert('Пример использования команды alert');
})

const promptExample=document.querySelector('#promptExample');
promptExample.addEventListener('click',()=>{
    prompt('Вот сюда можно что-то ввести');
    console.log('Пример использования команды prompt')
})
