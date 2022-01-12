// OBJETOS
// NO PRIMITIVO
// ESTÁN COMPUESTOS POR PROPIEDADES Y VALORES

const mexico = {
	comida: "Tacos"  // Propiedad "comida" y valor "Tacos"
}


//console.log(mexico)

// A. ACCEDER A LAS PROPIEDADES

// DOT NOTATION - NOTACIÓN DE PUNTO
//console.log(mexico.comida)

// BRACKET NOTATION - NOTACIÓN POR CORCHETES
//console.log(mexico["comida"])

const olympicRecords = {
	athletics100Men: "Justin Gatlin",
	athleticsLongJumpMen: "Mike Powel",
	swimming200Men: "Michael Phelps",
	"swimming 200 Women": "Ariarne Titmus"
}

//console.log(olympicRecords.athletics100Men)
//console.log(olympicRecords["athletics100Men"])

//console.log(olympicRecords["swimming 200 Women"])

// B. AGREGAR PROPIEDADES

const refresco = {
	nombre: "Coca cola",
	color: "Oscuro",
	precio: 12,
	tamanos: [600, 1000]
}

refresco.envase = "Plástico"

//console.log("Objeto de refresco:", refresco)

refresco["competidor"] = "Pepsi"

//console.log(refresco)


// C. PROPIEDADES Y CICLOS

// OBJECT.KEYS()
// Método que permite convertir las propiedades de un objeto en elementos de un arreglo.

const arrRefresco = Object.keys(refresco)

//console.log(arrRefresco)

// OBJECT.VALUES()
// Método que permite convertir los valores de un objeto en elementos de un arreglo.

const arrRefrescoValores = Object.values(refresco)

//console.log("arrRefrescoValores", arrRefrescoValores)

// for ... in

// for (VARIABLE KEY in OBJECT)
for (let key in refresco ) {
	//console.log(`La propiedad es: ${key}`)

	// if(key === "competidor") console.log("Encontré la prop competidor")

	//console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`)

}


// ARREGLOS CON OBJETOS

const mike = [
	{
		name: "Mike",
		age: 34
	}
]

//console.log(mike[0].age) // => 34


const estudiantesIH = [
	{
		name: "Leo",
		location: "Querétaro",
		weather: "Frijolito"
	},
	{
		name: "Joaquín",
		location: "Hidalgo",
		weather: "Frijolito duro"
	},
	{
		name: "Alan",
		location: "Atizapan",
		weather: "Frijolito poquito"
	},
	{
		name: "Alexis",
		location: "Aguascalientes",
		weather: "Frijolito poquito"
	}
]


//Ejercicio

const vehiculos= [
    {
        marca: "dodge",
        modelo: "2020",
        precio: "20,000usd"
    },
    {
        marca: "chevrolet",
        modelo: "2019",
        precio: "23,000usd"
    },
    {
        marca: "ford",
        modelo: "2021",
        precio: "27,000usd"
    },
    {
        marca: "bmw",
        modelo: "2017",
        precio: "16,700usd"
    },
    {
        marca: "audi",
        modelo: "2021",
        precio: "70,000usd"
    }

]
console.log(vehiculos[1].marca)
console.log(vehiculos[2].modelo)
console.log(`el precio del vehiculo ${vehiculos[3].marca} es ${vehiculos[3].precio}`)