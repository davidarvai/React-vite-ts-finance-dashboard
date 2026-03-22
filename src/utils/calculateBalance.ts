type Transaction = {
  amount: number;
};

export const calculateBalance = (transactions: Transaction[]) => {
  return transactions.reduce((acc, t) => acc + t.amount, 0);
};