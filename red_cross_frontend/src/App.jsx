import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Terminal from './Terminal'
import Landing from './Landing'
import Dashbord from './Dashbord'
import axios from 'axios';

function App() {
  const [id,setId] = useState('');
  const [valid,setValid] = useState(false);

  const handleClick = (e) =>{
    e.preventDefault();

    axios.get(`http://localhost:3000/patientid/${id}`).then((response) => {
        if(response.data){
          setValid(true)
        }
        else{
          alert("Patient does not exist!");
        }
      })
      .catch((error)=>{
      console.error("Error",error)
    })
    
}

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='terminal' element={<Terminal handleClick={handleClick} valid={valid} setId={setId} />} />
        <Route path='dashbord' element={<Dashbord id={id} />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
