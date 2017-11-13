/*=============================================
EL OBJETO CON LAS PROPIEDADDES DEL SCROLL
=============================================*/

var p = {

	posicionScroll: 0,
	articulos: document.querySelectorAll("#scroll article"),
	cajaScroll: document.querySelector("#scroll"),
}



/*=============================================
EL OBJETO CON LOS METODOS DEL SCROLL
=============================================*/

var m = {
	inicioScroll: function() {

		document.addEventListener("scroll", m.efectoParallax)

	},

	efectoParallax: function() {

		p.posicionScroll = window.pageYOffset;

		if (p.posicionScroll > p.cajaScroll.offsetbottom - 200) {

			for (var i = 0; i < p.articulos.length; i++) {

				p.articulos[i].style.marginLeft = "0%";

			}

		} else {

			for (var i = 0; i < p.articulos.length; i++) {

				p.articulos[i].style.marginLeft = p.posicionScroll / 10 - 100 + "%";
			}

		}
	}

}
m.inicioScroll();