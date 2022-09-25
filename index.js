// // Get the placeholder attribute
// const placeholder = ele.getAttribute('data-placeholder');

// // Set the placeholder as initial content if it's empty
// ele.innerHTML === '' && (ele.innerHTML = placeholder);
// ele.innerHTML === placeholder && (ele.style.color = 'rgba(0,0,0,0.5)')

// ele.addEventListener('focus', function (e) {
//     ele.style = 'none'
//     const value = e.target.innerHTML;
//     value === placeholder && (e.target.innerHTML = '');
// });

// ele.addEventListener('blur', function (e) {
//     const value = e.target.innerHTML;
//     value === '' && (e.target.innerHTML = placeholder);
// });


// Selecting main text input area
const ele = document.querySelector(".text-content")

// selecting the list which contains note files
const noteList = document.getElementById("noteUL")


// array to store contents of all text files
let noteArray = []


// Pre emptively creating activeNote and newCreated for global scope (global scope allows access of variables within multiple scopes)
let activeNote
let newCreated = true

// selecting the '+' node
const noteAdder = document.querySelector(".add-note")
// giving the '+' new note adding functionality
noteAdder.addEventListener("click", addNote)


// note addition processing
function addNote() {
    // ensuring the text area isn't empty
  if (ele.innerHTML) {

    // ensuring that we are creating a new text file and not saving a previously existing one
    if (newCreated){

        // saving the new text data in the array 
        noteArray.push(ele.innerHTML)

        // creating a list element to provide access to newly created text file
        const noteElement = document.createElement("li")

        // Giving a class name to each list elements so that we can grab them with a querySelectorAll
        noteElement.classList.add('noteFile')

        // Default name of the file 
        noteElement.innerHTML = `Note ${noteArray.length}`

        // appending noteFile to the list
        noteList.appendChild(noteElement)

        // Adding click listener to the file name
        noteElement.addEventListener("click", () => {
            
            // Grabbing the noteFile number and displaying the data stored in the corresponding array index in the text area
            let noteIndex = noteElement.innerHTML.split(" ")[1]
            ele.innerHTML = noteArray[noteIndex - 1]

            // Clicking on an existing note file changes the "Create" button to act as "Save" button
            newCreated = false

            // The global variable is set so that we can edit the existing noteFile value in the array index where it exists
            activeNote = noteIndex-1

            // Grabbing all the noteFiles so that we can remove the .active class and add .active class appropriately
            let noteFiles = document.querySelectorAll('.noteFile')
            // Checking if the index matches the file number to give it an active class if so....
            noteFiles.forEach((item, index) =>  (index!=activeNote) ? item.classList.remove('active'): item.classList.add('active'))
    })
    }

    // this code runs if we are saving a previously existing note file
    else{
        noteArray[activeNote] = ele.innerHTML
        newCreated = true
    }

    ele.innerHTML = ""
  }
}

