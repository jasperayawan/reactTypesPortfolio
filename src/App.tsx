import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col justify-between">
      <Header/>
      
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
