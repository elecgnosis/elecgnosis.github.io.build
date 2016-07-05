require("./source/styles/index.scss");
document.write('<br>I have several wrinkles to iron out.');
document.write(require("./source/scripts/index.js"));
console.log('app loaded');
if(module.hot) {console.log("hot module replacement active")}
var path = require('path');
