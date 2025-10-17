<<<<<<< HEAD:Program/About/mode.js
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeToggle.checked = false;
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

    darkModeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });

    darkModeMediaQuery.addEventListener('change', (event) => {
        if (localStorage.getItem('theme') === null) {
            setTheme(event.matches);
        }
    });
=======
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeToggle.checked = false;
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

    darkModeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });

    darkModeMediaQuery.addEventListener('change', (event) => {
        if (localStorage.getItem('theme') === null) {
            setTheme(event.matches);
        }
    });
>>>>>>> eb03ea3b3e6bf0255c71b0b3afa2554ac3a3210f:portfolio/Program/About/mode.js
});