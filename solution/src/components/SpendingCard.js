import Card from "./Card"
import WeeklySpendings from "./WeeklySpendings";
import styles from './SpendingCard.module.css';

const SpendingCard = ({ weeksSpending }) => {
    const total = weeksSpending.reduce((sum, e) => sum + e.amount, 0);

    return (
        <Card className={styles}>
            <article>
                <h1>Spending - Last 7 days</h1>
                <WeeklySpendings weeksSpending={weeksSpending} total={total} />
                <hr />
                <div className={styles['month-specifics']}>
                    <div className={styles.totals}>
                        <p>Total this month</p>
                        <p>${total}</p>
                    </div>
                    <div className={styles['percentage-difference']}>
                        <p>+2.4%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </article>
        </Card>
    )
}

export default SpendingCard;