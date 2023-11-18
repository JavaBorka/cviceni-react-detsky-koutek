import { Outlet, Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Cvičení router - dětský koutek</h1>
      </header>

      <nav>
        <Link to='/'>Úvod</Link> | 
        <Link to='/aboutus'>O nás</Link> | 
        <Link to='/contact'>Kontakt</Link> |
        <Link to='/centers'>Pobočky</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
