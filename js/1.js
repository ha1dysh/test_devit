function nodeChildCount(node, deep = Infinity) {
	let count = 0;
	function countChildren(node, level) {
		if (level > deep) return;
		const children = node.childNodes;
		count += children.length;
		for (let i = 0; i < children.length; i++) {
			countChildren(children[i], level + 1);
		}
	}
	countChildren(node, 1);
	return count;
}

const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div)); // 2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2
