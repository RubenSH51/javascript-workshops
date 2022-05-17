

function calcularPrecio(precio,desc_total)
{
	return ( parseInt(precio)*(100-parseInt(desc_total)) )/100;
}


/*>>>>>>>>>>>>>>> Interactuando con el HTML*/


function calcularPrecioFinal()
{
	let total;
	let total_desc;
	let desc_cupon;
	let cupon_estado;
	const cupones = ['promo10', 'promo20', 'promo50',''];

	const precio = document.getElementById('precio').value;
	let descuento = document.getElementById('descuento').value;
	const cupon = document.getElementById('cupon').value;


	if (descuento == '')
	{
		descuento = 0;
	}

	/* Verificando cupon*/
	if (cupones.includes(cupon))
	{
		if (cupon==cupones[0])
		{
			
			desc_cupon = 10;
			cupon_estado = 'aceptado'

		}
		else if (cupon==cupones[1])
		{
			
			desc_cupon = 20;
			cupon_estado = 'aceptado'

		}
		else if (cupon==cupones[2])
		{
			
			desc_cupon = 50;
			cupon_estado = 'aceptado'

		}
		else
		{
			
			desc_cupon = 0;
			cupon_estado = 'no hay'

		}

		total_desc = (parseInt(descuento)+parseInt(desc_cupon));
		
	}
	else /*cupon inválido*/
	{
		
		total_desc = descuento;
		cupon_estado = 'inválido'
		
	}	

	total = calcularPrecio(precio,total_desc);

	if (cupon_estado=='aceptado')
	{
		swal({
		  title: "Cupón aceptado",
		  text: "El precio final es $"+total,
		  icon: "success",
		  button: "Aceptar",
		});
	}
	else if (cupon_estado=='no hay')
	{
		swal({
		  title: "Sin cupón",
		  text: "El precio final es $"+total,
		  icon: "info",
		  button: "Aceptar",
		});
	}

	else
	{
		swal({
		  title: "Cupón inválido",
		  text: "El precio final es $"+total,
		  icon: "error",
		  button: "Aceptar",
		});
	}

} /*Cierre función*/