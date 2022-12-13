import './App.css';
//import CounterClass from './components/CounterClass';
import Header from './components/Header';
import AddStudent from "./components/AddStudent";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllStudent from './components/AllStudent';



function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
        <Header></Header>
        
        <Routes>
            <Route path="/" element={<AllStudent/>}/>
            <Route path="/add" element={<AddStudent/>}></Route> 
          
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
