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

const ele = document.querySelector(".text-content");
const noteList = document.getElementById("noteUL");
const noteAdder = document.querySelector(".add-note");

let noteArray = [];
let selectedText = "";
let activeNoteIndex = 1;
let firstNote = true;

ele.addEventListener("mouseup", () => {
  selectedText = window.getSelection().toString();
});


noteAdder.addEventListener("click", addNote);

function addNote() {
  if (ele.innerHTML && (firstNote || activeNoteIndex > noteArray.length)) {
    firstNote = false;
    noteArray.push(ele.innerHTML);
    ele.innerHTML = "";

    const noteElement = document.createElement("li");

    noteElement.innerHTML = `Note ${noteArray.length}`;
    noteList.appendChild(noteElement);
    noteElement.addEventListener("click", () => {
      console.log(noteArray);
      let noteIndex = noteElement.innerHTML.split(" ")[1];
      ele.innerHTML = noteArray[noteIndex - 1];
      activeNoteIndex = noteIndex - 1;
      console.log(activeNoteIndex);
    });
  } else {
    ele.innerHTML = "";
  }
}

// function makeBold() {
//   if (ele.innerHTML) {
//     console.log(
//       ele.innerHTML.substring(0, ele.innerHTML.indexOf(selectedText))
//     );
//     ele.innerHTML =
//       ele.innerHTML.indexOf(selectedText) + selectedText.length <
//       ele.innerHTML.length
//         ? ele.innerHTML.substring(0, ele.innerHTML.indexOf(selectedText)) +
//           "<b>" +
//           selectedText +
//           "</b>" +
//           ele.innerHTML.substring(
//             ele.innerHTML.indexOf(selectedText) + selectedText.length
//           )
//         : ele.innerHTML.substring(0, ele.innerHTML.indexOf(selectedText)) +
//           "<b>" +
//           selectedText +
//           "</b>";
//   }
// }

// listElements.forEach(item => item.addEventListener('click', () => {
//     console.log(item.textContent)
// }))
