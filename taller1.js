console.log('Hello world!');

/*>>>>>>>>>>>>> Cuadrados*/
function perimetroCuadrado(lado)
{
	return "El perímetro del cuadrado es " + lado*4+"cm.";
}

function areaCuadrado(lado)
{
	return "El área del cuadrado es " + lado*lado +"cm2.";
}

/*>>>>>>>>>>>>> Rectángulos*/

function perimetroRectangulo(lado1,lado2)
{
	return "El perímetro del rectángulo es " + ((lado1*2)+(lado2*2))+"cm.";
}

function areaRectangulo(lado1,lado2)
{
	return "El área del rectángulo es " + lado1*lado2 +"cm2.";
}


/*>>>>>>>>>>>>> Círculo*/

function longitudCirculo(radio)
{
	return "La longitud del círculo es " + (3.14*2*radio).toFixed(2) + "cm.";
}


function areaCirculo(radio)
{
	return "El área del círculo es " + (3.14*radio*radio) + "cm2.";
}


/*>>>>>>>>>>>>> Triángulos*/


function perimetroTriangulo(lado1,lado2,base)
{
	return "El perímetro del triángulo es " +(parseInt(lado1)+parseInt(lado2)+parseInt(base))+"cm.";
}

function areaTriangulo(aa,bb,cc)
{

	const a = parseInt(aa);
	const b = parseInt(bb);
	const c = parseInt(cc);
	const sp = (a+b+c)/2;

	const area = (sp*(sp-a)*(sp-b)*(sp-c))**(1/2);

	return "El área del triángulo es " + area.toFixed(2) +"cm2.";
}





/*>>>>>>>>>>>>>>>>>>>>>>>>>> Interactuando con el HTML*/

		/*Cuadrado*/
function calcularPerimetroCuadrado()
{
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	/*swal(perimetro);*/
	swal(perimetro,'','success')
}

function calcularAreaCuadrado()
{
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const area = areaCuadrado(value);
	/*swal(area);*/
	swal(area,'','success')
}

		/*Rectángulo*/
function calcularPerimetroRectangulo()
{
	const input1 = document.getElementById('inputRectangulo1');
	const value1 = input1.value;
	const input2 = document.getElementById('inputRectangulo2');
	const value2 = input2.value;

	const perimetro = perimetroRectangulo(value1,value2);
	/*swal(perimetro);*/
	swal(perimetro,'','success')
}

function calcularAreaRectangulo()
{
	const input1 = document.getElementById('inputRectangulo1');
	const value1 = input1.value;
	const input2 = document.getElementById('inputRectangulo2');
	const value2 = input2.value;

	const area = areaRectangulo(value1,value2);
	/*swal(area);*/
	swal(area,'','success')
}

		/*Triangulo*/
function calcularPerimetroTriangulo()
{
	const input1 = document.getElementById('inputTriangulo1');
	const value1 = input1.value;
	const input2 = document.getElementById('inputTriangulo2');
	const value2 = input2.value;
	const input3 = document.getElementById('inputTriangulo3');
	const value3 = input3.value;

	const perimetro = perimetroTriangulo(value1,value2,value3);
	swal(perimetro,'','success')
}

function calcularAreaTriangulo()
{
	const input1 = document.getElementById('inputTriangulo1');
	const value1 = input1.value;
	const input2 = document.getElementById('inputTriangulo2');
	const value2 = input2.value;
	const input3 = document.getElementById('inputTriangulo3');
	const value3 = input3.value;

	const area = areaTriangulo(value1,value2,value3);
	swal(area,'','success')
}

		/*Círculo*/

function calcularLongitudCirculo()
{
	const input = document.getElementById('inputCirculo');
	const value = input.value;

	const longitud = longitudCirculo(value)
	swal(longitud,'','success')
}

function calcularAreaCirculo()
{
	const input = document.getElementById('inputCirculo');
	const value = input.value;

	const area = areaCirculo(value)
	swal(area,'','success')
}