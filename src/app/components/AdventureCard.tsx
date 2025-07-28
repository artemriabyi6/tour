import styles from './adventures.module.scss'


const AdventureCard = ({ title, description, price, img}) => {
    return ( 
        
         <div className={styles.adventureCard}>
            <div className={styles.imgBlock} style={{backgroundImage: `url(${img})`}}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardPrice}>{price}$</p>
            </div>
            <p className={styles.cardDesc}>{description}</p>
        </div>
        
       
     );
}
 
export default AdventureCard;