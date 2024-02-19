import Header from './components/Header'
import Navbar from './components/Navbar'
import Orders from './components/Orders'

import './App.css'

const App = () => (
  <div>
    <Header />
    <div className="home-container">
      <Navbar />
      <Orders />
    </div>
  </div>
)

export default App
