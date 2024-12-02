const container = document.getElementById('container');
const changeBgButton = document.getElementById('change-bg');

// Backgrounds array
const backgrounds = [
    'linear-gradient(to right, #1f4037, #99f2c8)',
    'linear-gradient(to right, #e96443, #904e95)',
    'linear-gradient(to right, #ff5f6d, #ffc371)',
    'white'
];
let currentBgIndex = 0;

// Pokemon sprites array
const pokemonSprites = [
    'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif'
];

// Change background logic
changeBgButton.addEventListener('click', () => {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.background = backgrounds[currentBgIndex];
});

// Logic for pokeball and pokemon display
container.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Remove existing elements
    const existingElements = document.querySelectorAll('.pokemon, .pokeball');
    existingElements.forEach(el => el.remove());

    // Create pokeball
    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball';
    pokeball.style.left = `${x - 25}px`;
    pokeball.style.top = `${y - 25}px`;
    container.appendChild(pokeball);

    // Replace pokeball with pokemon
    setTimeout(() => {
        const pokemon = document.createElement('div');
        pokemon.className = 'pokemon';
        pokemon.style.left = `${x - 50}px`;
        pokemon.style.top = `${y - 50}px`;
        pokemon.style.backgroundImage = `url('${pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)]}')`;
        container.appendChild(pokemon);
        pokeball.remove();
    }, 1000);
});
