import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     
      <div className='container-fluid'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    <div/> 
      </BrowserRouter >
   
    </div>
  );
}

export default App;
