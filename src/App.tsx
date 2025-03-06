import { BrowserRouter, Route,Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import { Signup } from "./pages/Signup"
import { SignIn } from "./pages/Signin"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
