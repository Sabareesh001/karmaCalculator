import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
      <Routes/>
     </Router>
  )
}

export default App;
