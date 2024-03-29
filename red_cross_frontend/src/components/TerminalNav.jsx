import styles from '../styles/TerminalNav.module.css'

function TerminalNav({role}){
    return(
        <div className={styles.contain}>
            <div className={styles.logo}>
                RedCross
            </div>
            <div className={styles.role}>
                Dashbord for {role}
            </div>
        </div>
    )
}

export default TerminalNav;