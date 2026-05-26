document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');

    const heading = document.querySelector('h1');

    heading.addEventListener('click', function() {
        alert('Hello from JavaScript!');
    });
});