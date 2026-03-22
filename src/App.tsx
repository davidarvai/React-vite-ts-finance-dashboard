import { useTransactions } from "./hooks/useTransactions";
import { calculateBalance } from "./utils/calculateBalance";

function App() {
  const transactions = useTransactions();
  const balance = calculateBalance(transactions);

  return (
    <div>
      <h1>Balance: {balance}</h1>
    </div>
  );
}

export default App;