document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('class1-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Class 1 Scheduled!');
    });

    document.getElementById('class2-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Class 2 Scheduled!');
    });
});
