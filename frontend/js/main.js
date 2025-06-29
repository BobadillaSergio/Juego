const menu = document.getElementById('menu');
const charScreen = document.getElementById('character-select');
const stageScreen = document.getElementById('stage-select');
const charactersDiv = document.getElementById('characters');
const stagesList = document.getElementById('stages');
const nextStageBtn = document.getElementById('next-stage-btn');
const bgm = document.getElementById('bgm');

const characters = [
    {name: 'Fantasma Tuerto', img: 'Sprites/Imagenes perfil de los kabros/Fantasma tuerto.jpg'},
    {name: 'Pescao Humano', img: 'Sprites/Imagenes perfil de los kabros/Pescao Humano.jpg'},
    {name: 'Pino Negro', img: 'Sprites/Imagenes perfil de los kabros/Pino Negro.jpg'},
    {name: 'Presidente Democratico', img: 'Sprites/Imagenes perfil de los kabros/Presidente Democratico .jpg'},
    {name: 'Sabio Comediante', img: 'Sprites/Imagenes perfil de los kabros/Sabio Comediante.jpg'},
    {name: 'Troll Manco', img: 'Sprites/Imagenes perfil de los kabros/Troll Manco .jpg'}
];

const stages = [
    'Bosque de la Ira',
    'Ruinas del Orden',
    'Circo del Dolor',
    'Caverna Espinada'
];

let selections = [];
let currentPlayer = 1;

function startCharacterSelect() {
    menu.classList.add('hidden');
    charScreen.classList.remove('hidden');
    charactersDiv.innerHTML = '';
    selections = [];
    currentPlayer = 1;
    characters.forEach((c, index) => {
        const img = document.createElement('img');
        img.src = c.img;
        img.alt = c.name;
        img.addEventListener('click', () => selectCharacter(index, img));
        charactersDiv.appendChild(img);
    });
    nextStageBtn.disabled = true;
    bgm.play();
}

function selectCharacter(index, img) {
    if (img.classList.contains('selected')) return;
    img.classList.add('selected');
    selections.push(characters[index]);
    if (selections.length === 2) {
        nextStageBtn.disabled = false;
    }
}

nextStageBtn.addEventListener('click', () => {
    if (selections.length < 2) return;
    charScreen.classList.add('hidden');
    stageScreen.classList.remove('hidden');
    stagesList.innerHTML = '';
    stages.forEach(stage => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = stage;
        btn.addEventListener('click', () => selectStage(stage));
        li.appendChild(btn);
        stagesList.appendChild(li);
    });
});

function selectStage(stage) {
    alert('Combate entre ' + selections[0].name + ' y ' + selections[1].name + ' en ' + stage + '!');
    stageScreen.classList.add('hidden');
    menu.classList.remove('hidden');
    bgm.pause();
    bgm.currentTime = 0;
}

// Menu buttons
['play-btn','local-btn','ai-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', startCharacterSelect);
});

document.getElementById('options-btn').addEventListener('click', () => {
    alert('Opciones no disponibles');
});

document.getElementById('credits-btn').addEventListener('click', () => {
    alert('Creado por Kabros Studios');
});
