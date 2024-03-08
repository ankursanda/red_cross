import TerminalNav from './components/TerminalNav'
import { useEffect, useState } from 'react'


function Dashbord({id}){

    const [infoCard,setInfoCard] = useState('Medical History')

    useEffect(()=>{
        
    },[infoCard])

    useEffect(()=>{

    },[])
    let role = "doctor"
    return(
        <>
            <TerminalNav role={role} ></TerminalNav>
            <button onClick={()=>{setInfoCard('Personal Record')}}>Personal Records</button>
            <button onClick={()=>{setInfoCard('Medical History')}}>Medical History</button>
            <div>
                <h1>This is the dashbord page</h1>
            </div>
        </>
    )
}

export default Dashbord;