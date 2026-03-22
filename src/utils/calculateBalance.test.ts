import { calculateBalance } from "./calculateBalance";

test("calculates balance correctly", () => {
  const data = [{ amount: 10 }, { amount: -5 }];
  expect(calculateBalance(data)).toBe(5);
});