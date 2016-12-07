let lmConfig = function({
	popMask=true,
	toast=true,
	messageBox=true,
}={}) {
	popMask&&require('./popMask/popMask.js');
	toast&&require('./toast/toast.js');
	messageBox&&require('./messageBox/messageBox.js');
}
export default lmConfig