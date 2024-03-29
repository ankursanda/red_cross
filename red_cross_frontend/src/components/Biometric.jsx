import styles from '../styles/Biometric.module.css'

function Biometric({handleClick,handleChange}){
    return(
        <div className={styles.contain}>
            <input type="text" onChange={handleChange} className={styles.input}/>
            <button onClick={handleClick} className={styles.btn}>go ahead!</button>
        </div>
    )
}

export default Biometric;