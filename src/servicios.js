var Servicios = {
	server: 'http://google.cl',
	getSuma: function(a,b){
		return a+b;
	},
	setValor: setValorfn
};
function setValorfn(valor){
	console.log(valor);
}
module.exports = Servicios;