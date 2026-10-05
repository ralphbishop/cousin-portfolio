import {useState} from 'react'

function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export default function ThemeToggle () {
    const [theme, setTheme] = useState(getCurrentTheme)

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        document.documentElement.setAttribute ('data-theme', next)
        try{
            localStorage.setItem('theme', next)
        } catch {
         //   
        } 
    }

    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

    return(
        <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        >
           <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
    )
}