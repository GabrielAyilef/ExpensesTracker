import { useState } from "react";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

const initialState = [];

function App() {
  const [transactions, setTransactions] = useState(initialState);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <History transactions={transactions} onDelete={deleteTransaction} />
        <AddTransaction onAdd={addTransaction} transactions={transactions} />
      </div>
    </>
  );
}

export default App;
