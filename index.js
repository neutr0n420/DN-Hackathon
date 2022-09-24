
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

const ele = document.querySelector('.text-content');
const noteList = document.getElementById('noteUL')

let noteArray = []

const noteAdder = document.querySelector('.add-note')

noteAdder.addEventListener('click', addNote)


function addNote(){
    if (ele.textContent){
        noteArray.push(ele.textContent)
        ele.textContent = ''

        const noteElement = document.createElement('li')
        
        noteElement.textContent = `Note ${noteArray.length + 1}`
        noteList.appendChild(noteElement)
        
    }
}



listElements.forEach(item => item.addEventListener('click', () => {
    console.log(item.textContent)
}))





