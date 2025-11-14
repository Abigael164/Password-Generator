import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Clock from './Clock.jsx'
//import App from './App.jsx'
//import Calculate from './Calculate.jsx'
//import Myprop from './Myprop.jsx'
//import Reactlist from './Reactlist.jsx'
import Password from './Password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Password />
  </StrictMode>,
);
