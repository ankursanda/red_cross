import TerminalNav from "./components/TerminalNav";
import Biometric from "./components/Biometric"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Terminal({handleClick, valid, setId}){
    const navigate = useNavigate()

    useEffect(()=>{
        if(valid)(
            navigate('/Dashbord')
        )
    },[valid])
    //needs to change and move up the tree.

    const handleChange = (e) => {
        e.preventDefault();
        setId(e.target.value);
    }
    let role = "doctor"
    
    return(
        <>
            <TerminalNav role={role} />
            <Biometric handleClick = {handleClick} handleChange={handleChange} />
        </>
    )
}

export default Terminal;