import styles from './WeeklySpending.module.css';

const WeeklySpendings = ({ weeksSpending, total }) => {
    const d = new Date();
    let day = d.getDay();

    const containerHeightPixels = 300;

    const calcBarHeight = (amount) => {
        const dayTotalRenderHeight = 130; // about how many pixels the "day" elements take up
        const proportion = amount / (total - dayTotalRenderHeight);
        return proportion * containerHeightPixels;
    }

    return (
        <div className={styles['bars-container']} style={{ "height": containerHeightPixels + 'px' }}>
            {
                weeksSpending.map((e, idx) => {
                    const barColor = idx + 1 === day ? 'var(--cyan)' : 'var(--softred)';
                    const barHeight = calcBarHeight(e.amount);

                    return (
                        <div className={styles['bar-and-day']} key={idx}>
                            <div className={styles['todays-spending']}>
                                ${e.amount}
                            </div>
                            <div
                                className={styles.bar}
                                style={
                                    {
                                        "height": barHeight + "px",
                                        "backgroundColor": barColor
                                    }
                                }>
                            </div>
                            <div
                                className={styles.day}>
                                {e.day}
                            </div>
                        </div>
                    )
                }
                )
            }

        </div>
    )
}

export default WeeklySpendings;