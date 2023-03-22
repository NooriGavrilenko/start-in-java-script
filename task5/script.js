let buttonEvent = document.getElementById('myButton');
buttonEvent.addEventListener('click', myClick);

let duplicate = document.getElementById('duplicateField');

let inputIn = document.getElementById('myInput');
inputIn.addEventListener('input', changeText)

function changeText(event) {
    duplicate.textContent = this.value;
}

function myClick(obj) {


    //duplicate.textContent = inputIn.value;
    console.log(inputIn.value);
    inputIn.value = "";
    duplicate.textContent = "";
    obj.preventDefault();

}

buttonEvent.style.background = 'blue ';
buttonEvent.style.color = 'white';
console.log(buttonEvent);