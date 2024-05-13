function processMatrix(matrix) {
	let minValue = Math.min(...matrix.flat());

	matrix.forEach((row, i) => {
		matrix[i] = row.map((value) => {
			return value % 2 ? value * minValue : value;
		});
	});

	return matrix;
}

console.log(
	processMatrix([
		[5, 3, 6],
		[7, 11, 2],
		[15, 9, 4],
	])
);
// [
//  [10, 6, 6],
//  [14, 22, 2],
//  [30, 18, 4]
// ]
