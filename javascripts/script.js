var grid = document.getElementById("grid");
var context = grid.getContext('2d');
var rndmfillgrid = document.getElementById("rndmfillgrid");
var context2 = rndmfillgrid.getContext('2d');
var my_canvas3 = document.getElementById("card3");
var context3 = my_canvas3.getContext('2d');

function draw_grid(ancho, alto, periodo) {
	for (i = 0; i < parseInt(alto/periodo); i++) {
		for (j = 0; j < parseInt(ancho/periodo); j++) {
			context.beginPath();
			context.strokeRect(periodo * j, periodo * i, periodo, periodo);
			context.stroke();

		}
	}
}


function draw_rndmfillgrid(ancho, alto, periodo) {
	for (i = 0; i < parseInt(alto/periodo); i++) {
		for (j = 0; j < parseInt(ancho/periodo); j++) {
			if (Math.random() > 0.5) {
				context2.fillStyle = "black";
				context2.fillRect(periodo * i, periodo * j, periodo, periodo);
			} /*else {
				context2.strokeRect(size * i, size * j, size, size);
				context2.stroke();
			}*/
		}
	}
}



function random_matrix_filling_simetricalh(columns, lines, size) {
	my_canvas3.width = size * columns;
	my_canvas3.height = size * lines;
	for (j = 0; j < lines; j++) {

		for (i = 0; i <= columns / 2; i++) {
			var rand = Math.random();
			if (rand > 0.5) {
				context3.fillStyle = "black";
				context3.fillRect(size * i, size * j, size, size);
				context3.fillRect((columns * size) - size * i, size * j, size, size);
			}
		}
	}
}