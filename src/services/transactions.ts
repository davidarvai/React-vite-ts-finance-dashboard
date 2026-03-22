export const getTransactions = async () => {
  const res = await fetch("https://mockapi.io/transactions");

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};