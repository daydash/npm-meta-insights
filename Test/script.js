const { helloNpm, initSocket, mainInit } = require("meta-insights");
mainInit();
initSocket(() => {
	console.log("object");
});
console.log(helloNpm());
console.log(helloNpm());
