/*=============================================
EL OBJETO CON LAS PROPIEDADDES DEL SCROLL
=============================================*/

var p = {


}



/*=============================================
EL OBJETO CON LOS METODOS DEL SCROLL
=============================================*/

var m = {
	inicioScroll: function(){

		document.addEventListener("scroll", m.efectoParallax)
	
	},
		efectoParallax: function(){

			console.log(window.pageYOffset)
		}

}
m.inicioScroll();