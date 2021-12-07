//Q4) Step 3: Smart-ease - Back to the basics!
//NOnoN0nOYes (Note taking app)

//-->Save a note
let notes = [];
function saveNote(content, id) {
  if (typeof content === "string" && typeof id === "number") {
    let note = {
      // creating a single note object
      content: content,
      id: id,
    };
    notes.push(note);
  } else {
    console.log(
      "Your input is invalid. Content should be a string and the Id shold be a number"
    );
  }
}


function addNewNote() {
  const toDoNote = document.getElementById("todo");
  if (toDoNote.value !== "") {
    saveNote(toDoNote.value, notes.length + 1);
    toDoNote.value = null;
    listNotes();
    console.log(JSON.stringify(notes));
  }
}

document.getElementById("todo").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNewNote();
  }
});

const notesList = document.getElementById("notes");

function listNotes() {
  let noteItems = "";
  notes.map((note) => {
    noteItems += `<div class="note"><div class="item">${note.content}</div><img src="./delete-button.png" class="delete-btn" onclick="deleteNote(${note.id})"></div>`;
  });
  notesList.innerHTML = noteItems;
}

//-->Unique (delete a note when the id is specified)

function deleteNote(deleteId) {
  notes = notes.filter((note) => {
    return note.id != deleteId;
  });
  listNotes();
}
