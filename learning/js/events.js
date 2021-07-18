const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler";
}

const button = document.querySelector('button');
button.addEventListener('click', changeText);
button.addEventListener('click', () => {alert('Anonymous function call')});
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});