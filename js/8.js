String.prototype.removeDuplicate = function () {
	const words = this.split(" ");
	const uniqueWords = new Set(words);
	return [...uniqueWords].join(" ");
};

console.log(
	"Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double".removeDuplicate()
);
