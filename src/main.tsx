import { StrictMode, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
// import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApplicationPaths } from './routes/ApplicationPaths.tsx'

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
// import store from './state/store.tsx'

const Home = lazy(() => import('@welcome/Welcome.widget.tsx'));
const MissingsView = lazy(() => import('@missings/Missings.widget.tsx'));
const ReportView = lazy(() => import('@report/Report.widget.tsx'));
const DetailedMissing = lazy(() => import('@detailedMissing/DetailedMissingView.widget.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  {/* <Provider store={store}> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path={ApplicationPaths.MISSINGS}>
            <Route index element={<MissingsView/>}></Route>
            <Route path={ApplicationPaths.DETAILED_MISSING} element={<DetailedMissing/>}></Route>
          </Route>
          <Route path={ApplicationPaths.REPORT} element={<ReportView/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  {/* </Provider> */}
  </StrictMode>,
)
