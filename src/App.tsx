import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <HashRouter >
        <Navigation />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
