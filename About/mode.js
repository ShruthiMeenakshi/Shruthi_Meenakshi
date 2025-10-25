document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            if (darkModeToggle) darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            if (darkModeToggle) darkModeToggle.checked = false;
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else if (darkModeMediaQuery.matches) {
        setTheme(true);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            setTheme(this.checked);
        });
    }

    darkModeMediaQuery.addEventListener('change', (event) => {
        if (localStorage.getItem('theme') === null) {
            setTheme(event.matches);
        }
    });
});