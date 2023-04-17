export default function taskBlock(trueorfalse) {
	const task = false;
	const task2 = true;

	if (true0rfalse) {
		/* eslint-disable no-unsed-vars */
		const task = true;
		const task2 = false;
		/* eslint-enable no-unsed-vars */
	}

	return [task, task2];
}
