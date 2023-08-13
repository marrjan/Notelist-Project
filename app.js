const addBox = document.querySelector(".add");
myBox = document.querySelector(".mybox");
Icon = myBox.querySelector("header i");
title = myBox.querySelector("input");
desC = myBox.querySelector("textarea");
addButton = myBox.querySelector("button");

const months = ["january","February","March","April","May","June","July","August","September","October","November","December"]

addBox.addEventListener("click" , () => {
    myBox.classList.add("show");
}
);
Icon.addEventListener("click" , () => {
    myBox.classList.remove("show");
}
);
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

        const notes = [];
        notes.push(noteInfo);
        localStorage.setItem("notes" , notes)
    }
   
}
);