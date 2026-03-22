export const saveTransactions = (data: any) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

export const loadTransactions = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
};