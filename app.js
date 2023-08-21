// js code

// event load baraye local storage
window.addEventListener('load' , () => {
// select kardan
const addBox = document.querySelector(".add");
myBox = document.querySelector(".mybox");
Icon = myBox.querySelector("header i");
title = myBox.querySelector("input");
desC = myBox.querySelector("textarea");
addButton = myBox.querySelector("button");
// avordan month baraye tarikhe roye har bax not
const months = ["january","February","March","April","May","June","July","August","September","October","November","December"]
// zakhire sazi notes va tabdileshon ba method JSON be array
const notes = JSON.parse(localStorage.getItem("notes") || "[]");


// dont change the your name
const nameInput = document.querySelector(".myinput");
const username = localStorage.getItem('username') || '';
const removeBtn = document.querySelector(".fa-solid");

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})


// event show kardan modal
addBox.addEventListener("click", () => {
    myBox.classList.add("show");
}
);
// event delete kardane icone modal
Icon.addEventListener("click" , () => {
    myBox.classList.remove("show");
}
);

// function box note ha ba estefade az method foreach be soorate halghe tekrar
function showNote() {
    notes.forEach((note) => {
        let divTag = `<div class ="container"><div class="title-one">
        <p>${note.title}</p>
        <span>${note.descript}</span>
        <div class="settings">
            <p>${note.date}</p>
            <i class="fa-solid fa-ellipsis"></i>
            <ul class="menu">
                <li><i class="fa-solid fa-pen"></i>Edit</li>
                <li><i class="fa-solid fa-trash-can"></i>Delete</li>
            </ul>
        </div>
    </div>
    </div>`
    // method ezafe kardane element be qable divtag
    addBox.insertAdjacentHTML("afterend" , divTag)
    })
}
showNote();


// event click kr ba function title va description box note ro ok mikone
addButton.addEventListener("click" , (e) => {
    e.preventDefault();
    let noteTitle = title.value;
    noteDesc = desC.value;
    // age title ya desc ye new date bdim va maho salo rozo bgirim azash bemon tarikho be miladi mide
    if (noteTitle || noteDesc) {
        let date = new Date();
        month = months[date.getMonth()];
        day = date.getDate();
        year = date.getFullYear();

        let noteInfo = {
            title: noteTitle, descript: noteDesc,
            date : `${month} ${day} ${year}`
        }
        // ezafe krdn note jdid
        notes.push(noteInfo);
        // be soorate string dar localstorage zakhire mishe
        localStorage.setItem("notes" , JSON.stringify(notes));
        // farakhani function click bar roye icon zarbe dar
        Icon.click();
        // farakhani va show note haye zakhire shode
        showNote();
} 
}
)

});

// dark mood
function darkMood() {
    let setTheme = document.body;
    
    setTheme.classList.toggle("dark-mood");
}

