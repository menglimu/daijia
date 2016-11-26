let lmConfig = function({
	popMask=true,
	toast=true,
}={}) {
	popMask&&require('./popMask/popMask.js');
	toast&&require('./toast/toast.js');
}
export default lmConfig