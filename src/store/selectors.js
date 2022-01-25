export const selectIncomes = (state) => state.users[0].incomes;
export const selectCosts = (state) => state.users[0].costs;
export const selectDebts = (state) => state.users[0].debts;
export const selectSavings = (state) => state.users[0].savings;

export const selectUser = (state) => state.users[0];

export const selectAll = (state) => state;