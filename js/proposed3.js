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

console.log("\n---------1---------\n");
const foundPokemon = pokemon.find((poke) => {
    return poke.type === "fire";
});

console.log(foundPokemon);

console.log("\n--------2----------\n");

console.log(pokemon.slice(0, 2));

console.log("\n--------3----------\n");

var Mewtwo = [
    {
        name: "Mewtwo",
        type: "psychic",
        attackPoints: 110,
        defensePoints: 90,
    }];
pokemon.splice(2, 0, Mewtwo);
pokemon.pop(Mewtwo);

console.log(pokemon);

console.log("\n--------4----------\n");

console.log(pokemon.slice(0,1));
console.log(pokemon.slice(2,5));



console.log("\n--------5----------\n");

const Stadistic = pokemon.map((poke) => {
    let Pikachu;
    Pikachu =[poke.name];
    return `The pokemon ${Pikachu.name} is a ${Pikachu.type} type with ${Pikachu.attackPoints} attack points and ${Pikachu.defensePoints} defense points`;
});

console.log(Stadistic);
