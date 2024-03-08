import styles from "../styles/Login_nav.module.css"
import { useState,useRef, useEffect } from "react"

function Login_nav(){
    //const loginCardRef = useRef()
    const [username, setUsername] = useState("");
    const [pass,setPass] = useState("")
    const [card,setCard] = useState({
        visibility: 'hidden'
    })
    const [toggle, setToggle] = useState(0)
    useEffect(()=>{
        if(toggle === 0){
            setCard({visibility:'hidden'})
        }else{
            setCard({visibility: 'visible'})
        }
    },[toggle]);
  
    const changeHandlerUsername = (e)=>{
        e.preventDefault();
        setUsername(e.target.value)

    }

    const changeHandlerPass = (e) => {
        e.preventDefault()
        setPass(e.target.value)
    }

    const clickHandlerNavLogin = (e) =>{
        if (toggle === 0){
            setToggle(1)
        }else{
            setToggle(0)
        }
        
      //const element = loginCardRef.current;

    //   if(element){
    //     element.style.visibility = 'visible';
    //   }
    }

    const role = ["Registration","First Aid","Doctor"]

    const roleLogin = role.map((item)=>{
        return(
            <div>
                <section className={styles.role_head}>{item}:</section>
                <form action="submit" className={styles.form}>
                    <label htmlFor="username" className={styles.label}>username:</label>
                    <input className={styles.input} type="text" id="username" name="Username" value={username} onChange={changeHandlerUsername}/>
                    <label htmlFor="pass" className={styles.label}>password:</label>
                    <input className={styles.input} type="password" id="pass" name="Pass" value={pass} onChange={changeHandlerPass}/>
                    <button className="button">Login</button>
                </form>
            </div>
        )
    })

    
    return(
        <>
           <div className={styles.nav_bar}>
                <div className={styles.logo}>red Cross</div>
                <div className={styles.login}><button className={styles.login_button} onClick={clickHandlerNavLogin}>Login</button></div>
           </div>
           <div className={styles.login_card} style={card} >{roleLogin}</div>
        </>
    )
}

export default Login_nav;