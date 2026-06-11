document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');

    const heading = document.querySelector('h1');
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    function updateTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            if (themeToggle) themeToggle.textContent = 'Switch to Light Mode';
        } else {
            document.body.classList.remove('dark');
            if (themeToggle) themeToggle.textContent = 'Switch to Dark Mode';
        }
    }

    updateTheme(initialTheme);
    if (!storedTheme) {
        localStorage.setItem('theme', initialTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
            updateTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    heading.addEventListener('click', function() {
        alert('Hello from JavaScript!');
    });
});