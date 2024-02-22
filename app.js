function censor() {
	const pairs = [];
	return function (str1, str2 = '') {
		if (str2) {
			pairs.push([str1, str2]);
		} else {
			console.log(pairs);
			for (let pair of pairs) {
				str1 = str1.replace(new RegExp(pair[0], 'ig'), pair[1]);
			}
		}
		return str1;
	};
}
const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

changeScene('most', 'tower');

console.log(changeScene('PHP is the most popular programming language for backend web-development')); // должно распечатать 'JS is the most popular programming language for frontend web-development'
