import Card from "./Card"
import WeeklySpendings from "./WeeklySpendings";

const Spending = () => {
    return (
        <Card>
            <h1>Spending - Last 7 days</h1>
            <WeeklySpendings />
            <hr />
            <div>
                <div>
                    <p>Total this month</p>
                    <p>$478.33</p>
                </div>
                <div>
                    <p>+2.4%</p>
                    <p>from last month</p>
                </div>
            </div>
        </Card>
    )
}

export default Spending;