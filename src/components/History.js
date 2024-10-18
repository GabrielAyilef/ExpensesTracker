import React from "react";
import ExpensesHistory from "./ExpensesHistory";

function History({ transactions, onDelete }) {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <ExpensesHistory
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default History;
