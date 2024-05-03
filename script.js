
const addRowToTable = (name, last, age) => {
const tableBody = document.querySelector(".table tbody");
tableBody.insertAdjacentHTML(
"beforeend",` 

        <tr>
            <td>${name}</td>
            <td>${last}</td>
            <td>${age}</td>
            <td>      
            <button onclick="deleteRow(event)" class="btn btn-warning delete-button">Delete row</button>
            </td>
        </tr> `

);
};
const newRowButton = document.querySelector(".add-new-button");

newRowButton.addEventListener("click", () => {

// get the input values
const nameInput = document.querySelector(".name");
const lastInput = document.querySelector(".last");
const ageInput = document.querySelector(".age");


// add the new row
addRowToTable(nameInput.value, lastInput.value, ageInput.value);
nameInput.value=" "
lastInput.value=" "
ageInput.value=" "
})

const deleteRow = (event) => {
event.target.parentElement.parentElement.remove();
};
