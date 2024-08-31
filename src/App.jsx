import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ContextProvider } from './context/Theme'

function App() {
  const [ThemeMode, setUseThemeMode] = useState('light');

  const lightMode = () => {
    setUseThemeMode('light')
  };
  const darkMode = () => {
    setUseThemeMode('dark')
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode])

  return (
    <ContextProvider value={{ThemeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card />
        </div>
    </div>
   </div>
    </ContextProvider>
  
  )
}

export default App
