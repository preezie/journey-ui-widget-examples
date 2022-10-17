import './App.css'

import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Cta from './widgets/Cta'
import ExitIntent from './widgets/Exit-intent'
import Popup from './widgets/Popup'
import Workflow from './widgets/Workflow'

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Workflow />} />
        <Route path="cta" element={<Cta />} />
        <Route path="popup" element={<Popup />} />
        <Route path="exit-intent" element={<ExitIntent />} />
        <Route path="*" element={<Workflow />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Widget</Link>
          </li>
          <li>
            <Link to="/cta">Cta</Link>
          </li>
          <li>
            <Link to="/popup">Popup</Link>
          </li>
          <li>
            <Link to="/exit-intent">Exit intent</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default App;
