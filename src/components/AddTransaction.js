import React, { useState } from "react";

function AddTransaction({ onAdd, transactions }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please complete the fields ");
      return;
    }
    onAdd({ id: Math.floor(Math.random() * 100000000), text, amount: +amount });
    setText("");
    setAmount(0);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
