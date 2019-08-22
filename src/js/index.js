import fonts from '../css/fonts.css';
import style from '../css/style.css';
import desktop from '../css/desktop.css';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
console.log(iAmJavascriptES6());
// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());