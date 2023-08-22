const { helloNpm, initSocket, mainInit, emitSocket } = require("meta-insights");
mainInit();
initSocket(() => {
	console.log("object");
});
emitSocket("on", { data: "yash" });
console.log(helloNpm());
console.log(helloNpm());
