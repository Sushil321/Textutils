// import logo from './logo.svg';
import './App.css';
import Aboutus from './Aboutus';
import Navbar from './component/Navbar';
import PropTypes from 'prop-types';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  // const [modeone,setModeOne] = useState('light')

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);

    },2000);
  }

  function toggleMode(e){
    var el = e.target.id;
    console.log(el);
    
    if(mode === 'light' && el === 'two'){
      setMode('dark')
      document.body.style.backgroundColor = '#001861';
      showAlert("Dark mode enables","success");
      document.title = "Textutils - Dark Mode"
      setTimeout(()=>{
        document.title="TextUtils - Transform Text"

      },2000)

      
    }else if(mode === 'light' && el === 'one'){
      setMode('gray')
      document.body.style.backgroundColor = 'gray';
      showAlert("Gray mode enabled","success");
      document.title = "Textutils - Gray Mode"
      setTimeout(()=>{
        document.title="TextUtils - Transform Text"

      },2000)

  
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success");
      document.title = "Textutils - Light Mode"
      setTimeout(()=>{
        document.title="TextUtils - Transform Text"

      },2000)


    }
  }

  return (
    <>
    <Router>
    <Navbar title="Mirror" about="AboutUs" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
          <Route path="/about" element={<Aboutus />} />

          <Route path="/" element={<TextForm  heading={"Write to Analyze"} mode={mode} />} />
          
          
    </Routes>
    </Router>

    </>
    
    
    
  );
  
  }

  



 




export default App;

Navbar.defaultProps = {
     title: 'Name',
     about: 'ABBout',
     contact: 'none',

}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
}


