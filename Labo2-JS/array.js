const type = "fire";

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
  
  //Encontrando pokemon de tipo fuego
  const getPokemonType = (type, ownPokedex) => {
    const aPokemon  = pokemon.find((p) => p.type === type)
    if(!aPokemon)
        ownPokedex(`No pokemon with ${type} type`);
    else
        ownPokedex(null, aPokemon); 
  }

  getPokemonType(type, (err, apokemon)=>{
    if(err)
        return console.log(`Warning ${err}`);
        console.log(`¡Tienes un pokemon de tipo fuego! ${apokemon.name}`);
  })
  //Batalla Pokemon
  const pokemonBattle = (pokemonList, pokemonAvailable) =>{
    if(pokemonList.legth < 2)
        pokemonAvailable(`No tienes la cantidad necesaria para una batalla`);
    else{
      pokemonAvailable(null, pokemonList.slice(0,2));
    }
  }
  pokemonBattle(pokemon, (err, pokemon_available) =>{
    if(err)
      return console.log(`Warning ${err}`);
    console.log(`Pokemons available:`);
    let i= 1;
    pokemon_available.forEach(aPokemon => {
      console.log(`${i++}. ${aPokemon.name} - ${aPokemon.type} - ${aPokemon.attackPoints} - ${aPokemon.defensePoints}`);
    });
  })
  
  //Agregando a mewtwo
 const PokemonFound = (pokedex, pname, pktype, attack, defense, position) =>{
    const newPokemon = {
        name: pname,
        type: pktype,
        attackPoints: attack,
        defensePoints: defense,
      };
      pokedex.splice(position, 0, newPokemon); 
      return pokedex;
    };
    
    console.log(PokemonFound(pokemon, "Mewtwo", "phsychic", 110, 90, 2));
    
    //Borrando primer pokemon
  const deletePokemon = (pokemonList, position, callBack)=>{
    if(!(pokemonList.length > position))
      callBack(`No se puede remover pokemon en posicion:  ${position}`);
    pokemonList.splice(position, 1);
    callBack(null, pokemonList, position);
  }
deletePokemon(pokemon, 1, (err, newPokedex, position)=>{
  if(err)
    console.log(`Warning ${err}`);
  let i = 0;
  console.log(`Removiste el pokemon: ${position}, de tu equipo`);
  newPokedex.forEach(aPokemon => {
    console.log(`${++i}. ${aPokemon.name} - ${aPokemon.type} - ${aPokemon.attackPoints} - ${aPokemon.defensePoints}`);
  });
});

const team = (pokedex,callBack)=>{
  if(!pokedex)
    return callBack(`No tienes pokemons que mostrar`);
  callBack(null, pokedex.map((apokemon)=>{
    let {name: name, type: type, attackPoints: attack, defensePoints: defense} = apokemon;
    return `The pokemon ${name} is a ${type} with ${attack} attack points and ${defense} defense points`;
  }));
}
team(pokemon, (err, pokemonsInformation)=>{
  if(err)
    console.log(`Warning ${err}`);
    else 
    console.log(pokemonsInformation);
});


const teamInformation = (pokedex, callBack)=>{
  if(!pokedex)
    callBack(`No tienes suficientes pokemons para mostrar está información`);
  else{

    let defensePoints = 0;
    let attackPoints = 0;
    pokedex.forEach((apokemon)=>{
      defensePoints += apokemon.defensePoints;
      attackPoints += apokemon.attackPoints;
    });
    callBack(null, defensePoints, attackPoints);
  }
}
teamInformation(pokemon, (err, defensePoints, attackPoints)=>{
  if(err)
    console.log(`Warning ${err}`);
  else{
    if(defensePoints < attackPoints)
      console.log(`Tu equipo posee más puntos de ataque: ${attackPoints}, que de defensa ${defensePoints}`);
    else
      console.log(`Tu equipo posee más puntos de defensa: ${defensePoints}, que de ataque ${attackPoints}`);
  }
});