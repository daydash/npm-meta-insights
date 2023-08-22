function helloNpm() {
	return "hello-NPM";
}

// Imports
let io;

// const URL = "https://socket-io-server-mc3e.onrender.com/";

// Establishing socket connection to a server using the Socket.IO library.
let socket;
const mainInit = () => {
	io = require("socket.io-client");
	socket = io.connect("http://127.0.0.1:4000/", {
		transports: ["websocket"],
	});
};

// Initialize socket connection
const initSocket = (cb) => {
	console.log("here");
	socket.on("connect", () => {
		console.log("init");
		cb(true);
	});
	console.log("here2");
};

// Disconnect socket connection
const disconnectSocket = () => {
	socket.disconnect();
};

// Initialize message receive listener
const initMessageListener = (cb) => {
	socket.on("receive_message", (message) => {
		cb(message);
	});
};

/**
 * The `emitSocket` function is used to emit a socket event with a specified event name and data.
 * @param eventName - The eventName parameter is a string that represents the name of the event that
 * you want to emit.
 * @param data - The `data` parameter is the information or payload that you want to send along with
 * the event. It can be any valid JavaScript data type, such as a string, number, object, or array.
 */
const emitSocket = (eventName, data) => {
	socket.emit(eventName, data);
};

/**
 * The function "view" emits a socket event called "view" with the provided data.
 * @param data - The `data` parameter is the information that you want to send to the server or another
 * client. It can be any type of data, such as a string, number, object, or array. The purpose of the
 * `view` function is to emit a socket event called "view" and pass
 */
const view = (data) => {
	emitSocket("view", data);
};

/**
 * The function `onClickHandler` emits a socket event called "click" with the socket ID and the
 * provided event name as data.
 * @param eventName - The eventName parameter is a string that represents the name of the event that
 * occurred.
 */
const onClickHandler = (eventName) => {
	emitSocket("click", { sID: socket.id, eventName });
};

// Exports
module.exports = {
	helloNpm,
	mainInit,
	initSocket,
	emitSocket,
	initMessageListener,
	disconnectSocket,
	view,
	onClickHandler,
};
