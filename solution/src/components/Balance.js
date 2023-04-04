import Card from "./Card"
import styles from './Balance.module.css';
import circles from '../images/logo.svg';

const Balance = ({ balance }) => {
    return (
        <Card className={styles['balance-card']}>
            <div>
                <p>My balance</p>
                <p>${balance}</p>
            </div>
            <img src={circles} alt="circles" />
        </Card>
    )
}

export default Balance;