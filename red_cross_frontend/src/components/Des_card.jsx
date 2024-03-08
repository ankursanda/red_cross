import img from '../assets/medicine.jpg'
import styles from '../styles/Des_card.module.css'

function Des_card(){
    return(
        <>
            <div className={styles.outer_card}>
                <div className={styles.inner_card} style={{backgroundImage: `url(${img})`}}></div>
            </div>
        </>
    )
}

export default Des_card