
/* >>>>>>>>>>>>>>>>>> Funciones // */

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
}


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

}


/* Calculando salarios top10%*/

function top10percent(lista)
{
	let listaOrdenada = lista.sort(comparar)

	const start = listaOrdenada.length*0.9
	const count = listaOrdenada.length - start

	const top10 = listaOrdenada.splice(start,count)

	return top10 
}


/* >>>>>>>>>>>>>>>>>>>>>> Interactuando con el HTML (botones) //*/


let nombres = ['Alan','Aaron','Benjamin','Carlos','Damian','Ernesto','Francisco','Gabriel',
			'Horacio','Ivan','Jaime','Kevin','Leonel','Manuel','Nahuel','Nerón','Omar','Pablo',
			'Quique','Rubén','Tobias','Ulises','Valentín','Walter','Xavier','Yago','Zacarías',
			'Ana','Beatriz','Carla','Daniela','Ernestina','Fiorela','Gabriela','Helga',
			'Irma','Juliana','Karen','Lorena','María','Noelia','Ofelia','Paula','Romina',
			'Sara','Tamara','Ursula','Vilma','Wendy','Ximena','Yanina','Zaira']

let apellidos = ['Acosta','Bernardez','Correa','Dominguez','Etcheverry','Figueroa', 'Hellmans',
			'Ibarra','Laurenti','Morales','Navarro','Ortigas','Perez','Quintana','Ramos',
			'Salamanca','Tavarez','Vasquez','Zaragoza','Aguirre','Narvaez','Bermudez',
			'Cabrera','Cuenca','Portales','Morrison','Ortega','Perea','Roldán','Ramirez',
			'Morán','Huerta','Fortis','Cuello','Avellaneda','Carrizo','Robinson']


let lista_li = [];
let counter = 0;

let lista_li_names = [];
let lista_li_l_names = [];

function addElement() 
{
	counter = lista_li.length + 1 ;
	const numero = document.getElementById('agregar').value;
	lista_li.push(numero);

	let ul = document.getElementById("list");
	let li = document.createElement("li");

	/*Generador de nombre aleatorio*/
	let random_n = Math.floor(Math.random()*nombres.length);
	let random_a = Math.floor(Math.random()*apellidos.length);
	let name   = nombres[random_n];
	let l_name = apellidos[random_a]

	/*guardando nombre y apellido en lista*/
	lista_li_names.push(name)
	lista_li_l_names.push(l_name)


	li.innerHTML = '<strong>'+counter+') </strong>'+name+' '+l_name+' <strong>$'+numero+'</strong>';
	ul.appendChild(li);

	document.getElementById('agregar').value = '';

}

function removeElement()
{

	const numero = document.getElementById('quitar').value;
	lista_li.splice(numero-1,1)

	/* quitar la misma posición en las listas nombre y apellido*/
	lista_li_names.splice(numero-1,1)
	lista_li_l_names.splice(numero-1,1)

	/* borrar lista en pantalla*/
	let ul = document.getElementById("list");
	let li;
	ul.innerHTML = '';

	for (let i=0; i<lista_li.length; i++)
	{
		li = document.createElement("li");
		li.innerHTML = '<strong>'+(i+1)+') </strong>'+lista_li_names[i]+' '+lista_li_l_names[i]+' <strong>$'+lista_li[i]+'</strong>';
		ul.appendChild(li);
	}

	document.getElementById('quitar').value = '';
	
}


function cargarLista()
{

	/* Considerando agregar apellidos en el archivo taller4-salarios.js, y traer los valores acá.*/

	const personas = argentina.map(
		function(persona)
		{
			return persona.name;
		})

	const salario = argentina.map(
		function(persona)
		{
			return persona.salary;
		})


	let ul = document.getElementById("list");

	for (let i=0;i<personas.length;i++)
	{
		let li = document.createElement("li");

		/*Generador de nombre aleatorio*/
		let random_n = Math.floor(Math.random()*nombres.length);
		let random_a = Math.floor(Math.random()*apellidos.length);
		let name   = nombres[random_n];
		let l_name = apellidos[random_a]

		li.innerHTML = '<strong>'+(lista_li.length+1)+') </strong>'+personas[i]+' '+l_name+' <strong>$'+salario[i]+'</strong>';
		ul.appendChild(li);

		lista_li.push(salario[i])

		/*guardando nombre y apellido en lista*/
		lista_li_names.push(personas[i])
		lista_li_l_names.push(l_name)
	}
	
}

function vaciarLista()
{
	lista_li.splice(0,lista_li.length);
	lista_li_names.splice(0,lista_li_names.length);
	lista_li_l_names.splice(0,lista_li_l_names.length);
	
	/* borrar lista en pantalla*/
	let ul = document.getElementById("list");
	let li;
	ul.innerHTML = '';
}


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Funciones a calcular con los botones*/

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

function calcularTop10()
{
	if (lista_li.length>0)
	{
		const top10 = top10percent(lista_li);
		const promTop10 = calcPromedio(top10)

		swal({
		  title: "Salario promedio del Top10%: $"+promTop10,
		  text: "",
		  icon: "success",
		  button: "Aceptar",
		});
	}

}

