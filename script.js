function saveNote() {
    const noteText = document.getElementById('noteText').value;
    localStorage.setItem('myNote', noteText);
    alert('Note saved successfully!');
}

function clearNote() {
    document.getElementById('noteText').value = '';
    localStorage.removeItem('myNote');
    alert('Note cleared!');
}

// Check if there is a saved note in localStorage
window.onload = function () {
    const savedNote = localStorage.getItem('myNote');
    if (savedNote) {
        document.getElementById('noteText').value = savedNote;
    }
};