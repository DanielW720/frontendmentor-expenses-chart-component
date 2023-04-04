import './App.css';
import Balance from './components/Balance';
import Spending from './components/SpendingCard';

function App() {
  const spendings = json;

  return (
    <main>
      <div className="App">
        <div className="balance-spending-container">
          <Balance />
          <Spending />
        </div>
      </div>
    </main>
  );
}

export default App;

const json = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];