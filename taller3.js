
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Medidas estadísticas >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/ 
function calcPromedio2(lista)
{
	let promedio = 0

	const sumaLista = lista.reduce
	(
		function(valorAcumulado = 0,nuevoelemento)
		{
			return valorAcumulado + parseInt(nuevoelemento);
		}
	)

	promedio = sumaLista/lista.length;
	console.log('El promedio es: '+sumaLista/lista.length);
	return promedio.toFixed(2)
}	// function



function calcPromedio(lista)
{
	
	let total = 0;
	let promedio = 0

	for (let i=0;i<lista.length; i++)
	{
		total += parseInt(lista[i]);
	}

	promedio = total/lista.length;
	console.log('El promedio es: '+total/lista.length);
	return promedio.toFixed(2)
}	// function


function comparar (a,b){return a-b;}

function calcMediana(lista)
{
	let mediana = 0;
	let mitad = parseInt(lista.length/2)
	let listaOrdenada = lista.sort(comparar)

	if (lista.length%2==0)
	{
		console.log('Cantidad de elementos PAR.');
		//mediana = (lista[(lista.length/2)-1] + lista[(lista.length/2)])/2;
		mediana = ((parseInt(lista[mitad-1])) + (parseInt(lista[mitad])))/2
	}
	else
	{
		console.log('Cantidad de elementos IMPAR.')
		//mediana = lista[((lista.length+1)/2)-1];
		mediana = lista[mitad]
	}

	console.log('La mediana es: '+mediana);
	return mediana

} // function


/* >>>>>>>>>>>>>>>>>>>>> MODA*/


function ordenarAsc(a,b) //a y b representan arrays. pos0 = valor, pos1 = cantidad
{
	return a[1] - b[1] // en las posiciones 1 están las cantidades
}

function ordenarDesc(a,b) //a y b representan arrays. pos0 = valor, pos1 = cantidad
{
	return -a[1] + b[1] // en las posiciones 1 están las cantidades
}


function calcModa(lista)
{
	lista_count = {}; // 1- Objecto vacío

	lista.map 					// 2- Llena el objeto con los valores
	(
		function(elemento)
		{
			if(lista_count[elemento])
			{
				lista_count[elemento] += 1;
			}
			else
			{
				lista_count[elemento] = 1;
			}
		}
	)

	// 3- convierto el objeto en un array de arrays 
	array_de_arrays = Object.entries(lista_count);

	// 4- Ordenar y buscar la moda

	moda = array_de_arrays.sort(ordenarAsc)[array_de_arrays.length-1]

	console.log('La moda es: '+moda[0]+'. Se repite '+moda[1]+' veces en la lista.')

	return moda

} // cierre función Moda

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> / Medidas estadísticas >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/ 

/*agregar elementos a la lista*/

let lista_li = [];
let counter = 0;

function addElement() 
{
	counter += 1;
	const numero = document.getElementById('agregar').value;
	lista_li.push(numero);

	let ul = document.getElementById("list");
	let li = document.createElement("li");

	li.innerHTML = '<strong>'+counter+'- </strong>'+numero;
	ul.appendChild(li);

	document.getElementById('agregar').value = '';

}

function removeElement()
{
	const numero = document.getElementById('quitar').value;
	lista_li.splice(numero-1,1)

	let ul = document.getElementById("list");
	let li;

	ul.innerHTML = '';

	counter = 0;

	for (let i=0; i<lista_li.length; i++)
	{
		counter += 1;
		li = document.createElement("li");
		li.innerHTML = '<strong>'+(i+1)+'- </strong>'+lista_li[i];
		ul.appendChild(li);
	}

	document.getElementById('quitar').value = '';
	
}


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Interactuando con el HTML >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

function calcularPromedio()
{
	const promedio = calcPromedio(lista_li)

	swal({
		  title: "El promedio es "+promedio,
		  text: "",
		  icon: "success",
		  button: "Aceptar",
		});
}

function calcularMediana()
{
	const mediana = calcMediana(lista_li)

	swal({
		  title: "La mediana es "+mediana,
		  text: "",
		  icon: "success",
		  button: "Aceptar",
		});
}

function calcularModa()
{
	const moda = calcModa(lista_li)

	swal({
		  title: "La moda es "+moda[0],
		  text: "Se repite "+moda[1]+" veces.",
		  icon: "success",
		  button: "Aceptar",
		});
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max +1 - min) + min);
}


function listaAleatoria()
{
	const cantidad = document.getElementById('cantidad').value;
	const minimo   = document.getElementById('minimo').value;
	const maximo   = document.getElementById('maximo').value;

	let ul = document.getElementById("list");
	let li = document.createElement("li");

	if (lista_li.length == 0)
	{
		for(let i=0;i<=cantidad;i++)
		{
			let num = numeroAleatorio(parseInt(minimo),parseInt(maximo));
			lista_li.push(num);
		}

		console.log('Lista completada!')

		document.getElementById('cantidad').value = '';
		document.getElementById('minimo').value = '';
		document.getElementById('maximo').value = '';

		removeElement()
	}
	else
	{
		for (let i=0;i<lista_li.length;i++)
		{
			lista_li.splice(0,1);
			console.log('Array vaciado');
		}
		listaAleatoria();
	}
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> / Interactuando con el HTML >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */