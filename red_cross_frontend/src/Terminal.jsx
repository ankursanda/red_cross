import TerminalNav from "./components/TerminalNav";
import Biometric from "./components/Biometric";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from './styles/Terminal.module.css';
import img from './assets/doctor_ready.jpg'
import Des_card from './components/Des_card'

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
        <div className={styles.bodcard} >
            <div className={styles.navbar}>
                <TerminalNav role={role} />
            </div>
            <div className={styles.picture} style={{background: `url(${img})`,backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}></div>
            <div className={styles.head}>
                 <Des_card  />
            </div>
            <div className={styles.hooktext}>Always Ready for an emergency.</div>
            <div className={styles.login} >
                <Biometric handleClick = {handleClick} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default Terminal;