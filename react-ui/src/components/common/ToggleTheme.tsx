import { Moon, Sun } from "lucide-react"
import React, { useEffect, useState } from "react"

const ToggleTheme: React.FC = () => {

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.theme) {
                return localStorage.theme === 'dark'
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        const root = window.document.documentElement

        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    return (
        <button onClick={() => setIsDark(!isDark)} className="flex items-center p-2 gap-3 hover:bg-hover-l dark:hover:bg-hover-d  dark:text-white">
        {isDark ? <Sun size={24} /> : <Moon size={24}/>}{isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
  }

export default ToggleTheme