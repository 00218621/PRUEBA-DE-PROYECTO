console.log("\n---------Arreglo de Elementos a Usar:---------\n")

const stages = [
    {
      id: 1,
      name: "Ancho-V Games",
      ruleSet: "Turf War",
      ruleSetDescription:
        "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
      id: 7,
      name: "Inkblot Art Academy",
      ruleSet: "Turf War",
      ruleSetDescription:
        "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
      id: 12,
      name: "Scorch Gorge",
      ruleSet: "Turf War",
      ruleSetDescription:
        "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
      id: 16,
      name: "Hagglefish Market",
      ruleSet: "Turf War",
      ruleSetDescription:
        "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
      id: 19,
      name: "Sockeye Station",
      ruleSet: "Salmon Run",
      ruleSetDescription:
        "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
      id: 22,
      name: "Gone Fission Hydroplant",
      ruleSet: "Salmon Run",
      ruleSetDescription:
        "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
      id: 24,
      name: "Lost Outpost",
      ruleSet: "Salmon Run",
      ruleSetDescription:
        "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
      id: 26,
      name: "Ruins of Ark Polaris",
      ruleSet: "Salmon Run",
      ruleSetDescription:
        "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
  ];

  console.log("Imprimiendo el Arreglo Original \n");
console.log(stages);
console.log("\n------------------\n");


console.log("Imprimiendo Salmon Run \n");
console.log("\n------------------\n");


const filteredStage = stages.filter((stage)=>{
    return stage.ruleSet ==="Salmon Run";
});
console.log(filteredStage);




console.log("FIND \n");
console.log("\n------------------\n");

const a="Turf War";
const b="Salmon Run";
// El primero de la condicion
const foundStage = stages.find((stage) => {return stage.ruleSet===a;});
const foundStage1=stages.find((stage)=>{return stage.ruleSet===b;});
console.log("Usando Find: \n", foundStage,foundStage1);
  
 
  

/*const personas = [
    { nombre: 'Edu', edad: 25 },
    { nombre: 'Manuel', edad: 37 },
    { nombre: 'Marta', edad: 42 },
    { nombre: 'Edu', edad: 25 },
    { nombre: 'Edu', edad: 35 },
  ];
  
  const busqueda = personas.reduce((acc, persona) => {
  
    const clave = JSON.stringify(persona);
    acc[clave] = ++acc[clave] || 0;
    return acc;
  }, {});
  
  
  const duplicados = personas.filter( (persona) => {
      return busqueda[JSON.stringify(persona)];
  });
  
  console.log(duplicados);
  */
  
