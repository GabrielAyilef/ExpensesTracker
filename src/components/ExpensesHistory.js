import React from "react";

function moneyFormatter(num) {
  return `$ ${Math.abs(num).toFixed(2)}`;
}

function ExpensesHistory({ transaction, onDelete }) {
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          {moneyFormatter(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={() => onDelete(transaction.id)}>
          X
        </button>
      </li>
    </div>
  );
}

export default ExpensesHistory;
