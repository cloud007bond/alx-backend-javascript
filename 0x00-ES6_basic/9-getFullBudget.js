import getBudgetObject from "./7getBudgetObject";

export default function getFullObject(income, gdp, capital) {
	const budget = getBudgetObject(income,gdp,capital);
	const fullBudget = {
		...budget,
		getIncomeInEuros(income) {
			return '${imncome} euros';
		},
	};

	return fullBudget;
}
