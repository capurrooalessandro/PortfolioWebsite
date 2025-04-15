import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Portfolio from './components/portfolioMain.jsx'
import "./main.css"

createRoot(document.getElementById('root')).render(<Portfolio/>)
