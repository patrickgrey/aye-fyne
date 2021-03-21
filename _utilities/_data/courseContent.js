const dirTree = require("directory-tree");
require("dotenv").config();

const source = process.env.COURSE_INPUT_FOLDER || "course";
const filteredTree = dirTree(source, {
	extensions: /\.html/,
	exclude: /_data/,
});

const traverse = function (o, fn, scope = []) {
	for (let i in o) {
		fn.apply(this, [i, o[i], scope]);
		if (o[i] !== null && typeof o[i] === "object") {
			traverse(o[i], fn, scope.concat(i));
		}
	}
};

let pathArray = [];
let previousPath = "";

traverse(filteredTree, (key, value, scope) => {
	if (key === "path") {
		previousPath = value;
	}
	if (key === "extension" && value === ".html") {
		pathArray.push(previousPath);
	}
});

pathArray.pop();

const dataArray = pathArray.map((item) => {
	const splitPath = item.split("\\");
	// Remove index page
	splitPath.pop();
	// Remove course reference
	splitPath.shift();
	// Add full string to
	// splitPath.push(splitPath.join("/"));
	let data = {};
	data.url = splitPath.join("/");
	data.page = splitPath.pop();
	data.topics = [...splitPath];
	return data;
});

let addedTopics = [];

// I currently add topics that have been processed to a checking array
// to make sure they are not printed out again.
// This works for topis on the same level as their names can't conflict.
// However, sub-topics (directories) can so that breaks this approach.
// Instead of using the individual topic name, we concat all the
// topic names up to the current one to create something unique.
function getTopicHashID(topics, depth) {
	let topicHash = "";
	for (let index = 0; index < depth + 1; index++) {
		topicHash += topics[index];
	}
	return topicHash;
}

function parseData(data) {
	let contentsString = ``;
	for (let index = 0; index < data.length; index++) {
		const item = data[index];
		const topicsLength = item.topics.length;
		if (topicsLength === 0) {
			contentsString += `<p class="ians-content-level-root"><a href="${item.url}">${item.page}</a></p>`;
		} else {
			for (let index2 = 0; index2 < topicsLength; index2++) {
				const topicHeader = item.topics[index2];
				if (!addedTopics.includes(getTopicHashID(item.topics, index2))) {
					contentsString += `<h${index2 + 2}>${topicHeader}</h${index2 + 2}>`;
					addedTopics.push(getTopicHashID(item.topics, index2));
				}
			}
			contentsString += `<p class="ians-contents-level-${
				topicsLength + 1
			}"><a href="${item.url}">${item.page}</a></p>`;
		}
	}
	return contentsString;
}

const htmlString = parseData(dataArray);

module.exports = {
	tree: htmlString,
};
