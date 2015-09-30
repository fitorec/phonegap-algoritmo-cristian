var app = {
	initialize: function() {
		var d=new Date();
		var hora = dosDigitos(d.getHours()) + ':' + dosDigitos(d.getMinutes()) + ':' + dosDigitos(d.getSeconds());
		$('h1').text(hora);
		app.cambiarSegundo();
		$("#actulizar").click(function() {
			app.correrAlgoritmo();
		});
	},
	correrAlgoritmo : function() {
		var tc0 = $('h1').text();
		var url = 'http://www.timeapi.org/utc/now';
		$.get(url, function( data ) {
			$( "h1" ).text( data );
		});
	},
	cambiarSegundo: function() {
		var horaParts = $('h1').text().split(':');
		var h = parseInt(horaParts[0]);
		var m = parseInt(horaParts[1]);
		var s = parseInt(horaParts[2]);
		s++;
		if (s>59) {
			s = 0;
			++m;
		}
		if (m>59) {
			m = 0;
			++h;
		}
		if (h>23) {
			h = 0;
		}
		$('h1').text(dosDigitos(h) + ':' + dosDigitos(m) + ':' + dosDigitos(s));
		setTimeout("app.cambiarSegundo()", 1000);
	},
};

app.initialize();


function dosDigitos(num) {
	if (num<10) {
		return '0' + num;
	}
	return num;
}
