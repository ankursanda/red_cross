import Login_nav from "./components/Login_nav"
import Des_card from "./components/Des_card"
import styles from './styles/Landing.module.css'
import Policy_card from './components/Policy_card'


function Landing(){
    
    return(
        <div>
            <div className={styles.land}>
                <div >
                    <Login_nav />
                </div>
                <div className={styles.text}>
                    <div className={styles.text_head}>Welcome to Red <div style={{color:'red'}}>C</div> ross!</div>
                    <div className={styles.text_body}>A secure unified platform to retrive medical information in case of emergency</div>
                </div>
                
            </div>
            <div className={styles.head}>
                 <Des_card />
            </div>
            <div>
                    
            </div>
        </div>
        
    )

}

export default Landing;