const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development')); // должно распечатать 'JS is the most popular programming language for frontend web-development'