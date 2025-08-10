import { StrictMode, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import Welcome from '@welcome/MainPage.widget.tsx'
import './index.css'
import App from './App.tsx'
import { ApplicationPaths } from './routes/ApplicationPaths.tsx'
import store from './state/store.tsx'

const Home = lazy(() => import('@welcome/MainPage.widget.tsx'));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path={ApplicationPaths.ABOUT} element={<Welcome/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  </StrictMode>,
)
