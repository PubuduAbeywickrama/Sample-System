import './App.css';
//import CounterClass from './components/CounterClass';

import AddStudent from "./components/CreateStudent/AddStudent";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllStudent from './components/Home/AllStudent';
import UpdateStudent from './components/updateStudent/UpdateStudent'
import Header from './components/Heder/Header';


function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
        <Header></Header>
        
        <Routes>
            <Route path="/" element={<AllStudent/>}/>
            <Route path="/add" element={<AddStudent/>}></Route> 
            <Route path="/update/:id" element={<UpdateStudent></UpdateStudent>}></Route>
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
