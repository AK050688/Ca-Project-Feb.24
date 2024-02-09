import logo from './logo.svg';
import './App.css';
import Parties from './pages/parties/Parties';
import Items from './pages/Items/Items';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Parties />}></Route>
        <Route path='/items' element={<Items />}></Route>
      </Routes>
      {/* <Parties /> */}
      {/* <Items /> */}
    </div>
  );
}

export default App;
