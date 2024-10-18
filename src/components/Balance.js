function Balance({ transactions }) {
  const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  function moneyFormatter(num) {
    return `$ ${num.toFixed(2)}`;
  }
  return (
    <div>
      <h4>YOUR BALANCE</h4>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  );
}

export default Balance;
