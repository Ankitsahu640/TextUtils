//rfce - import react function component export shortcut
import './App.css';
import Navbar from "./componenet/Navbar";
import Textform from './componenet/Textform';
import {useState} from 'react'
import Alert from './componenet/Alert';

function App() {
const [mode,setMode] = useState("info");
const [alert,setAlert] = useState({
  type:null,
  msg:null
});

const showAlert=(typ,mssg)=>{
    setAlert({
      type:typ,
      msg:mssg
    })
    setTimeout(()=>{
      setAlert({
        type:null,
        msg:null
      })
    },1500)
}

const toggleMode=()=>{
  if(mode!=="dark"){
    setMode("dark");
    document.body.style.backgroundColor="rgb(0, 37, 76)";
    showAlert("success","Dark mode is enabled");
  }
  else{
    setMode("info");
    document.body.style.backgroundColor="rgb(201, 218, 241)";
    showAlert("success","Light mode is enabled");
  }
}
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
