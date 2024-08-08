document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.add('show');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.remove('show');
});


window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').classList.remove('show');
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('myModal').classList.remove('show');
    }
});
