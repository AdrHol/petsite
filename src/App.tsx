import { Suspense} from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <div>This is App</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  )
}

export default App
