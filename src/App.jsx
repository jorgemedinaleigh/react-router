import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Contact } from "./routes/Contact"

export const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  )
}
