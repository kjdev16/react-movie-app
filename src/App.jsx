import './css/App.css'
import Fav from './pages/Fav';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path="/fav" element= {<Fav />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
