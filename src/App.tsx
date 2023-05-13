
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='*' element={ <PageNotFound /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
