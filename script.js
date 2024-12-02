const container = document.getElementById('container');
const changeBgButton = document.getElementById('change-bg');

// Список возможных фонов
const backgrounds = [
    'linear-gradient(to right, #74ebd5, #acb6e5)',
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #6a11cb, #2575fc)',
    'white'
];
let currentBgIndex = 0;

// Список спрайтов покемонов
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

// Логика смены фона
changeBgButton.addEventListener('click', () => {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.background = backgrounds[currentBgIndex];
});

// Логика появления покебола и покемона
container.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Удаляем все покемонов перед добавлением нового
    const existingPokemons = document.querySelectorAll('.pokemon');
    existingPokemons.forEach(pokemon => pokemon.remove());

    // Создание покебола
    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball';
    pokeball.style.left = `${x}px`;
    pokeball.style.top = `${y}px`;
    container.appendChild(pokeball);

    // Удаление покебола и добавление покемона
    setTimeout(() => {
        const pokemon = document.createElement('div');
        pokemon.className = 'pokemon';
        pokemon.style.left = `${x - 50}px`; // Центрируем покемона
        pokemon.style.top = `${y - 50}px`; // Над покеболом
        pokemon.style.backgroundImage = `url('${pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)]}')`;
        container.appendChild(pokemon);

        // Удаляем покебол
        pokeball.remove();
    }, 1000);
});
