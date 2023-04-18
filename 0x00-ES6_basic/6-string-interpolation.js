export default function getSanFranciscoDescription() {
	const year = 2017;
	const budget = {
		income: '$119,868'
		gdp: '$154.2 billion',
		capital: '$178,479',
	};
	// return 'As of ' + year +', it was the seven-highest income county in the united staes'
	//  / ', with aper capital personal income of ' + budget.income + '.As of 2015, san Francisco'
	//   / 'proper had a GDP of ' + budget.gdp +', and per capital of' + budget.capital + '.
	return 'As of ${year}, it was the sevent-highest income county in the united states, with a per capital income of ${budget.income}.As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and GDP per capital of ${budget.capital}.';
}
