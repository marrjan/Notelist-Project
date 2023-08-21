// js code
window.addEventListener('load' , () => {
const addBox = document.querySelector(".add");
myBox = document.querySelector(".mybox");
Icon = myBox.querySelector("header i");
title = myBox.querySelector("input");
desC = myBox.querySelector("textarea");
addButton = myBox.querySelector("button");

const months = ["january","February","March","April","May","June","July","August","September","October","November","December"]

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

let isUpdate = false, updateId;

// dont change the name
const nameInput = document.querySelector(".myinput");
const username = localStorage.getItem('username') || '';
const removeBtn = document.querySelector(".fa-solid");

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})



addBox.addEventListener("click", () => {
    myBox.classList.add("show");
}
);
Icon.addEventListener("click" , () => {
    myBox.classList.remove("show");
}
);

function showNote(params) {
    notes.forEach((note) => {
        let divTag = `<div class ="container"><div class="title-one">
        <p>${note.title}</p>
        <span>${note.descript}</span>
        <div class="settings">
            <p>${note.date}</p>
            <i class="fa-solid fa-ellipsis"></i>
            <ul class="menu">
                <li"><i class="fa-solid fa-pen"></i>Edit</li>
                <li"><i class="fa-solid fa-trash-can"></i>Delete</li>
            </ul>
        </div>
    </div>
    </div>`
    addBox.insertAdjacentHTML("afterend" , divTag)
    })
}
showNote();



addButton.addEventListener("click" , (e) => {
    e.preventDefault();
    let noteTitle = title.value;
    noteDesc = desC.value;
    if (noteTitle || noteDesc) {
        let date = new Date();
        month = months[date.getMonth()];
        day = date.getDate();
        year = date.getFullYear();

        let noteInfo = {
            title: noteTitle, descript: noteDesc,
            date : `${month} ${day} ${year}`
        }

        notes.push(noteInfo);
        localStorage.setItem("notes" , JSON.stringify(notes));
        Icon.click();
        showNote();




    } 
}
)
});
