import styles from '../styles/Policy_card.module.css'


function Policy_card(){
    return(
        <>
            <div className={styles.outer_card}>
                <section className={styles.head}>Least Privilege Policy</section>
                <div className={styles.container_pan}>
                    <div className={styles.container}></div>
                    <div className={styles.container}></div>
                    <div className={styles.container}></div>
                </div>
            </div>
        </>
    )
}

export default Policy_card;