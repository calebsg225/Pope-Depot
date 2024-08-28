import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFount";

function App() {

  return (
    <>
      <HashRouter >
        <Navigation />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='*' element={ <PageNotFound /> }/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
