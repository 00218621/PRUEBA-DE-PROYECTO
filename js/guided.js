console.log("\n---------1---------\n");
/*const champs = [
    {
        id: 1,
        name: "Warwick",
        title: "The Blood Hunter",
    },
    {
        id: 2,
        name: "Ahri",
        title: "The Nine-Tailed Fox",
    },
    {
        id: 3,
        name: "Jhin",
        title: "The Virtuoso",
    },
];

const items = [
    {
        id: 1,
        name: "Sheen",
        cost: 700,
    },
    {
        id: 2,
        name: "Needlessly Large Rod",
        cost: 1300,
    },
];

const getChampById = (id, callback) => {
    const champ = champs.find((champ) => champ.id === id);
    if (!champ) {
        callback(`No champ with id ${id}`);
    }
    else {
        callback(null, champ);
    }
};

const getItemById = (id, done) => {
    const item = items.find((item) => item.id === id);
    if (!item) {
        done(`No item with id ${id}`);
    }
    else {
        done(null, item);
    }
};

const id = 2;

getChampById(id, (err, champ) => {
    if (err) {
        return console.log(`Warning: ${err}`);
    }
    getItemById(id, (err, item) => {
        if (err) {
            return console.log(`Warning: ${err}`);
        }
        console.log(
            `${champ.title} - ${champ.name} has a ${item.name} which costs ${item.cost} gold.`
        )
    });
});*/

console.log("\n---------2---------\n");
/*const heroes = [
    {
        id: 1,
        name: "Thor",
    },
    {
        id: 2,
        name: "Iron Man",
    },
    {
        id: 3,
        name: "Batman",
    },
];

const origins = [
    {
        id: 1,
        location: "Asgard",
    },
    {
        id: 2,
        location: "Earth",
    },
];

const getHeroe = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = heroes.find((h) => h.id === id)?.name;
        heroe ? resolve(heroe) : reject("Heroe not found");
    });
};

const getOrigin = (id) => {
    return new Promise((resolve, reject) => {
        const origin = origins.find((o) => o.id === id)?.location;
        origin ? resolve(origin) : reject("Origin not found");
    });
};

const id = 4;
let heroeName;

getHeroe(id).then((heroe) => {
    heroeName = heroe;
    return getOrigin(id);
}).then((origin) => console.log(`${heroeName} is from ${origin}`))
    .catch((err) => console.warn(err));*/


console.log("\n---------2---------\n");
/*{
    property: "property value";
}

console.log("\n---------Arreglo de Elementos a Usar:---------\n");

const itemsArray = [
    {
        name: "Fundamentos de Programación",
        semester: 1,
        price: 20.5,
    },
    {
        name: "Programación de Estructuras Dinámicas",
        semester: 2,
        price: 15.6,
    },
    {
        name: "Programación Orientada a Objetos",
        semester: 3,
        price: 45,
    },
    {
        name: "Programación WEB",
        semester: 4,
        price: 36,
    },
    {
        name: "Programación de Dispositivos Móviles",
        semester: 5,
        price: 50,
    },
    {
        name: "Análisis de Algoritmos",
        semester: 6,
        price: 43,
    },
    {
        name: "Técnicas de Simulación en Computadoras",
        semester: 7,
        price: 35,
    },
    {
        name: "Programación Declarativa",
        semester: 8,
        price: 30,
    },
    {
        name: "Aplicaciones Código Abierto",
        semester: 9,
        price: 47,
    },
    {
        name: "Teoría de Lenguajes de Programación",
        semester: 10,
        price: 25,
    },
];

console.log("Imprimiendo el Arreglo Original \n");
console.log(itemsArray);
console.log("\n------------------\n");

// Array Type for filter
const filteredItems = itemsArray.filter((item) => {
    return item.semester <= 5;
});

console.log("Usando Filter: \n");
console.log(filteredItems);

console.log("\n------------------\n");

// Array Type for find
const foundItem = itemsArray.find((item) => {
    return item.name === "Fundamentos de Programación";
});

console.log("Usando Find: \n", foundItem);

console.log("\n------------------\n");

// forEach
console.log("Usando forEach: ");
itemsArray.forEach((item) => {
    console.log(item.name);
});

console.log("\n------------------\n");

// some
const afterSixSemester = itemsArray.some((item) => {
    return item.semester > 6;
});

console.log("Usando Some:\n");

afterSixSemester
    ? console.log("Existe al menos una materia de sexto semestre")
    : console.log("Ninguna materia es de sexto semestre");

    console.log("\n------------------\n");

console.log("Usando Every:\n");
const bookPrice = itemsArray.every((item) => {
    return item.price <= 60;
});

bookPrice
  ? console.log("Todos los libros tienen un precio menor a 60")
  : console.log("Algunos libros tienen un precio mayor a 60");

console.log("\n------------------\n");

console.log("Usando Reduce:\n");

const total = itemsArray.reduce((previousValue, currentValue) => {
  return currentValue.price + previousValue;
}, 0);

console.log(`Total: $${total}`);

console.log("\n------------------\n");

console.log("Usando Includes:\n");
const yearsArr = [2022, 2023, 2024, 2025, 2026];

const includesYear = yearsArr.includes(2022);

includesYear
  ? console.log("El año 2022 está incluido en el arreglo")
  : console.log("El año 2022 no está incluido en el arreglo");

console.log("\n------------------\n");

console.log("Usando Map:\n");
const subjectAndSemester = itemsArray.map((item) => {
  return `La materia ${item.name} corresponde al semestre ${item.semester}`;
});

console.log(subjectAndSemester);
console.log("\n------------------\n");*/

console.log("\n---------4---------\n");

/*const array1 = ["item1", "item2", "item3"];

const array2 = [...array1];

//First array
const bodyParts = ["head", "hair", "neck", "shoulder", "arm", "ear"];

//Second array
const clothes = ["t-shirt", "dress", "scarf", "blouse", "skirt", "sweater"];

console.log("Imprimiendo los arrelos originales \n");
console.log(bodyParts);
console.log(clothes);
console.log("\n------------------\n");

//Clone for bodyParts array
const partsCopy = bodyParts;

console.log("Arreglo original");
console.log(bodyParts);

console.log("\n Arreglo copiado");
console.log(partsCopy);

console.log("\n------------------\n");

//Modify the original array
bodyParts.push("eye");

console.log("\n Arreglo original modificado");
console.log(bodyParts);

console.log("Arreglo copiado");
console.log(partsCopy);

console.log("\n------------------\n");

//Clone for clothes array with spread
const clothesCopy = [...clothes];

//Modify the original array
clothes.push("shorts");

console.log("Arreglo original modificado");
console.log(clothes);

console.log("\n Arreglo copiado con spread");
console.log(clothesCopy);

console.log("\n------------------\n");

//Concat bodyParts array and clothes array
const concatArrays = [...bodyParts, ...clothes];

console.log("Concatenando arreglos");
console.log(concatArrays);

console.log("\n------------------\n");

//Concat bodyParts array, clothes array and add new elements
const newElements = [...bodyParts, ...clothes, "jacket", "hat"];

console.log("Concatenando arreglos");
console.log(newElements);

console.log("\n------------------\n");*/

console.log("\n---------5---------\n");
// Objects to use

/*const firstObject = {
    name: "Jose Eduardo",
    birthday: "17/09/2002",
    nationality: "Salvadoran",
    age: 20,
    parents: [
      { name: "Josefina", lastname: "Mendoza" },
      { name: "Pedro", lastaname: "Gonzales" },
    ],
  };
  
  const secondObject = {
    occupation: "Student",
    eduactionLevel: "University",
    university: "Universidad centroamericana José Simeón Cañas",
    hobbies: ["Soccer", "VideoGames", "Guitar", "Math"],
};

console.log("----Objetos a utilizar---- \n");
console.log(firstObject, "\n");
console.log(secondObject);

console.log("\n------------------\n");

// Clone an object

const objectClone = { ...firstObject };

// Modify a property of firstObject
firstObject.name = "Jose Jose";

console.log("Clonando objetos \n");
console.log("Objeto clon: \n");
console.log(objectClone);
console.log("\nObjeto modificado: \n");
console.log(firstObject);

console.log("\n------------------\n");

// Concat objects

const concatObject = { ...firstObject, ...secondObject };

console.log("Concatenando objetos \n");
console.log(concatObject);

console.log("\n------------------\n");

// Concat and add new properties

const propertiesObject = {
    favoriteColor: "Blue",
    cars: 1,
    ...firstObject,
    ...secondObject,
  };

  console.log("Concatenando objetos y propiedades \n");
console.log(propertiesObject);

console.log("\n------------------\n");

// Rest parameter in functions

function sumNumbers(...numbers){
    const sum = numbers.reduce((prev, value) => {
        return prev + value;
    }, 0);
      console.log(`La suma es ${sum}\n`);
}

console.log("Spread como Rest Parameter \n");
console.log("\nEnviando 3 números \n");
sumNumbers(1, 2, 3);
console.log("\nEnviando 5 números \n");
sumNumbers(1, 2, 3, 4, 5);
console.log("\nEnviando 7 números \n");
sumNumbers(1, 2, 3, 4, 5, 6, 7);

console.log("------------------\n");

// Send arguments to functions using spread

function multiplyNumbers(a, b, c){
    const mult = a * b * c;
    console.log(`La multiplicación es ${mult}\n`);
}

let args = [2, 4, 6];

console.log("Spread como argumentos de una función \n");
console.log("\nEnviando 3 números como argumentos \n");
multiplyNumbers(...args);

args = [2, 4, 6, 8, 10];
console.log("\nEnviando 5 números como argumentos \n");
multiplyNumbers(...args);

console.log("------------------\n");*/