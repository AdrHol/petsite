import { Suspense} from 'react'
import './App.css'
import { Outlet } from 'react-router'
import { ProgressSpinner } from 'primereact/progressspinner';
import Header from '@common/Header/Header.widget';
import Footer from '@common/Footer/Footer.widget';
         

function App() {

  return (
    <>
      <Header/>
      <Suspense fallback={<ProgressSpinner/>}>
        <main className='main'>
          <Outlet></Outlet>
        </main>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
