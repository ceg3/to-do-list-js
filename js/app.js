
// This app will display a to do list and append or delete from it

const form      = document.querySelector("form.add");
// contains item to add to to do list - in text form.
const itemToAdd = document.querySelector("#itemToAdd");
const ul        = document.querySelector(".todo");

form.addEventListener('submit',processForm);

function processForm(event){
    event.preventDefault();
    if(itemToAdd.value) {  // only add to list if user input is not empty
        const item = document.createElement('li');
        const delBtn = document.createElement('button');
        const span = document.createElement('span');
        span.textContent = itemToAdd.value;
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn-link');
        item.appendChild(span);
        item.appendChild(delBtn);
        ul.appendChild(item);

        delBtn.addEventListener('click',function(){
            item.parentNode.removeChild(item);
        });
    }
    itemToAdd.value = ""; // clear item to add
    itemToAdd.focus();    // focus on the item to add input box
    
}

