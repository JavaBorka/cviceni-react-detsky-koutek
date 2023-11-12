import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <h1>Cvičení router - dětský koutek</h1>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
