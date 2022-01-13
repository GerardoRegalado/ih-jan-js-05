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
//console.log(vehiculos[1].marca)
//console.log(vehiculos[2].modelo)
//console.log(`el precio del vehiculo ${vehiculos[3].marca} es ${vehiculos[3].precio}`)

// Ejercicio 2 Nested data structuras


const schoolSystem = {  // este es el objeto
    schools: [          // esta es la primer propiedad con un arreglo,o sabemos por el corchete []
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };
  //console.log(schoolSystem.schools[2].classRooms[0].students[0].firstName) // => Christop


  //Ejercicio

  //1.-  - Retrieve the “Fake School 3” object

  //console.log(schoolSystem.schools[2].name);

  //2.-  - Retrieve the teacher with the first name of “Nathanael”

  console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName)

//3.- - Retrieve the student with the first name of "Saul"

console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName)

//4.- -Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.

schoolSystem.schools[1].classRooms[0].students.push({
    firstName: "Lucille",
    lastName: "D. Lozano",
    age: "unknown"
})

console.log(schoolSystem.schools[1].classRooms[0].students[5])