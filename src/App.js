import  { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

//function based component
function App() {
  const[theme,setTheme] = useState('primary');
  const[mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);
   const showTheme = (type) => {
    setTheme(type);
   }
  
//   const showTheme=()=> {
//     if(document.getElementById('inlineRadio1').checked) {
//        setTheme(document.getElementById('inlineRadio1').value);
//     }
//     else if(document.getElementById('inlineRadio2').checked) {
//       setTheme(document.getElementById('inlineRadio2').value);    
//     }
//     else if(document.getElementById('inlineRadio3').checked) {
//       setTheme(document.getElementById('inlineRadio2').value);
//     }
//     else {
//       alert("low key");
//     }
// }



  const showAlert = (message,type) =>{
    setAlert({msg: message,
       type: type})
    setTimeout(()=> {
      setAlert(null);
    },2000)

  }
  const toggleMode=()=> {
    if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light Mode is enabled','success');
    //setTitle
    // setInterval (()=> {
    //   document.title = 'TextUtils is amazing';},2000);
    // setInterval (()=> {
    //   document.title = 'Install lolu';},1000);
     }
   else{
      setMode('dark');
      document.body.style.backgroundColor='#202223';
      showAlert('Dark Mode is enabled','success');
      document.title='TextUtils - darkmode';
       
      }
  }
  return(
    <>
{/* <Router> */}
{/* <Navbar title="TextUs" aboutText = "About textUs"/> */}
<Navbar title="TestUtils" mode={mode} toggleMode={toggleMode} showTheme={showTheme} />
<Alert alert={alert}/>
<div className="container my-3">

{/* showAlert prop is passing function to the textform class */}
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} >
          
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below"  mode={mode} theme={theme} />} >
          
          </Route>
 </Routes> */}
 <TextForm heading="Enter the text to analyze below"  mode={mode} theme={theme} />
</div>
{/* </Router> */}
</>);
}
export default App;
