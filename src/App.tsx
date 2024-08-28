import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <BrowserRouter >
        <Navigation />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
