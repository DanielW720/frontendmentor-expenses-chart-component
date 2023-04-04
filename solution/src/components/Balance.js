import Card from "./Card"
import styles from './Balance.module.css';
import circles from '../images/logo.svg';

const Balance = () => {
    return (
        <Card className={styles['balance-card']}>
            <div>
                <p>My balance</p>
                <p>$921.48</p>
            </div>
            <img src={circles} alt="circles" />
        </Card>
    )
}

export default Balance;