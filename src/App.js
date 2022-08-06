
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './Alert';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Action from './components/Action';
function App() {
 const [text, setText] = useState("dark")
 const [alert, setAlert] = useState(null)
 const showalert=(message,type)=>{
  setAlert({
   
    msg:message,
    type:type
  })
 }

  const [mode, setMode] = useState("light")
 const  togglechange= ()=>{
    if(mode === 'light'){
      setMode('dark') ;setText('light');
      document.body.style.backgroundColor='#10253a';
      showalert("dark mode is enabled","danger");
      document.title = "dark mode"
    }
    else{
      setMode('light');setText('dark');
      document.body.style.backgroundColor='white';
       document.title = "light-Mode"
    }
  }
  return (
  
  
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Textform/>}/>
        
        <Route path="/about" element={<About/>}/>
        
      <Route path='/action' element={<Action/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
