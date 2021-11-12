(function (window) {
	var helloSpeaker = {
	speak(name) {
	console.log(speakWord + " " + name);
}
};
window.helloSpeaker = helloSpeaker;
var speakWord = "Hello";
})(window);

var speakWord = "Hello";

