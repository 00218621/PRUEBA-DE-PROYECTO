const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      attackPoints: 55,
      defensePoints: 40,
    },
    {
      name: "Bulbasaur",
      type: "grass",
      attackPoints: 49,
      defensePoints: 49,
    },
    {
      name: "Charmander",
      type: "fire",
      attackPoints: 52,
      defensePoints: 43,
    },
    {
      name: "Squirtle",
      type: "water",
      attackPoints: 48,
      defensePoints: 65,
    },
  ];

  const afterSixSemester = pokemon.some((item) => {
    return item.type ==="fire";
  });  
  
  console.log("1. El entrenador desea saber si existe algún pokemon tipo fuego en su equipo");
  console.log("\n-----------\n");
  afterSixSemester
    ? console.log("Si existe un Pokemon tipo fuego")
    : console.log("No hay Pokemon tipo fuego");

    
    console.log("\n-----------\n");
    console.log("2. El entrenador fue desafiado a una batalla pokemon, pero solo debe utilizar los dos primeros pokemon con los que cuenta en su equipo. Para ello debe hacer uso del método slice,y con dicho método crear un arreglo donde estén sus dos primeros pokemon");
    console.log("\n-----------\n");
    const twoArray=pokemon.slice(0,2);
    console.log(twoArray);
    console.log("\n-----------\n\n");

    console.log("3. Se agrega Mewtwo");
    console.log("\n\n");
    const Mewtwo={
    name: "Mewtwo",
    type: "psychic",
    attackPoints: 110,
    defensePoints: 90};
    pokemon.splice(2,0,Mewtwo);
    console.log(pokemon);
    console.log("\n-----------\n\n");


    console.log("4. Se elimina el pokemon de la posicion 1");
    console.log("\n\n\n");
    const DeletOne=pokemon.slice(2,5);
    const One=pokemon.slice(0,1);
    const New=[...One,...DeletOne]
    console.log(New);
    console.log("\n-----------\n\n");


    console.log("5. Mostrar info de los pokemon");
    console.log("\n\n\n");
    const [pikachu,mewtwo,charmander,squirtle]=New;
    const subjectPikachu=[pikachu].map((item)=>{
      return `The pokemon ${item.name} is a ${item.type} type with ${item.attackPoints} attack points and ${item.defensePoints} defense points`;  
    });
    const subjectMewtwo=[mewtwo].map((item)=>{
      return `The pokemon ${item.name} is a ${item.type} type with ${item.attackPoints} attack points and ${item.defensePoints} defense points`;  
    });
    const subjectCharmander=[charmander].map((item)=>{
      return `The pokemon ${item.name} is a ${item.type} type with ${item.attackPoints} attack points and ${item.defensePoints} defense points`;  
    });
    const subjectSquirtle=[squirtle].map((item)=>{
      return `The pokemon ${item.name} is a ${item.type} type with ${item.attackPoints} attack points and ${item.defensePoints} defense points`;
    });
    const subject=subjectPikachu.concat(subjectMewtwo,subjectCharmander,subjectSquirtle);
    console.log([subject]);
    console.log("\n-----------\n\n");


    console.log("6. Finalmente, el entrenador desea saber si su equipo posee más puntos de ataque o más puntos de defensa. Dicha información le será de suma importancia para proximas batallas");
    const SumAttack=New.map((item)=>{
      return `${[item.attackPoints]}`
    });
    const SumDefense=New.map((item)=>{
      return `${[item.defensePoints]}`
    });
    
    
    function esNumerico(dato) {
      return !isNaN(parseFloat(dato)) && isFinite(dato);
  }
  
  function sumarContenidoArreglo(contenido) {
      if (!Array.isArray(contenido)) {
          return null;
      }
  
      let suma = 0;
  
      for (let i = 0; i < contenido.length; i++) {
          const elemento = contenido[i];
          
          if (esNumerico(elemento)) {
              suma += parseFloat(elemento);
          }
      }
  
      return suma;
  }
  const TotalAttack=sumarContenidoArreglo(SumAttack);
  const TotalDefense=sumarContenidoArreglo(SumDefense);
  const Total=[{TotalAttack},{TotalDefense}
  ];

  const Comprobar = Total.some((item) => {
    return item.TotalAttack>item.TotalDefense;
  });
  console.log("Usando Some:\n");

Comprobar
  ? console.log("El equipo tiene + puntos de ataque")
  : console.log("El equipo tiene + puntos de defensa");
  








    /*
    
    console.log("Usando Map:\n");
const subjectAndSemester = itemsArray.map((item) => {
  return `La materia ${item.name} corresponde al semestre ${item.semester}`;
})  
    
    
    let [saludo, pronombre] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo" */




    

