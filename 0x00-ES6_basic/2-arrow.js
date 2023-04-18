export default function getNeighborhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union square'];

	const self = this;
	this.addNeighborhoods = (newNeighborhood) => {
		self.sanFranciscoNeighbporhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
