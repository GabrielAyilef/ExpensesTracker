import React from "react";

function IncomeExpenses({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((item) => {
    if (item.amount > 0) {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });
  function moneyFormatter(num) {
    return `$ ${Math.abs(num).toFixed(2)}`;
  }
  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
