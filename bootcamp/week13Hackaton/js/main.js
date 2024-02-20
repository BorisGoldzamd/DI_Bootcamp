// Crear una aplicación PIXI
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x00ff00 // Color de fondo verde para probar
});
document.body.appendChild(app.view);

// Cargar el fondo de pasto
const backgroundTexture = PIXI.Texture.from('assets/background/grass.jpg');
const backgroundSprite = new PIXI.TilingSprite(backgroundTexture, app.screen.width, app.screen.height);
backgroundSprite.tileScale.set(2); // Escalar la repetición del fondo
app.stage.addChild(backgroundSprite);

let playerWidth = 32;
let playerHeight = 32;
let characterDirection = { x: 0, y: 0}
let characterSpeed = 0.6
// Crear un objeto para almacenar las texturas
const characterTextures = {
    walk_down: [],
    walk_up: [],
    walk_left: [],
    walk_right: []
};

// Cargar las texturas para cada dirección de movimiento
for (let i = 1; i <= 3; i++) {
    characterTextures.walk_down.push(PIXI.Texture.from(`assets/characters/main/mainFrente${i}.png`));
    characterTextures.walk_up.push(PIXI.Texture.from(`assets/characters/main/mainEspalda${i}.png`));
    characterTextures.walk_left.push(PIXI.Texture.from(`assets/characters/main/mainIzquierda${i}.png`));
    characterTextures.walk_right.push(PIXI.Texture.from(`assets/characters/main/mainDerecha${i}.png`));
}

// Crear un sprite para el personaje principal
const mainSprite = new PIXI.AnimatedSprite(characterTextures.walk_down);

// Establecer la posición inicial del personaje
mainSprite.position.set(400, 300);

// Configurar la velocidad de animación
mainSprite.animationSpeed = 0.1;

// Variable para controlar si se está reproduciendo la animación
let isAnimating = false;

// Variable para contar las teclas presionadas
let keysPressed = {};

// Escuchar eventos de teclado
document.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;

    if (!isAnimating) {
        switch (e.key) {
            case 'ArrowUp':
                mainSprite.textures = characterTextures.walk_up;
                characterDirection.y = -1;
                break;
            case 'ArrowDown':
                mainSprite.textures = characterTextures.walk_down;
                characterDirection.y = 1;
                break;
            case 'ArrowLeft':
                mainSprite.textures = characterTextures.walk_left;
                characterDirection.x = -1;
                break;
            case 'ArrowRight':
                mainSprite.textures = characterTextures.walk_right;
                characterDirection.x = 1;
                break;
        }
        mainSprite.play();
        isAnimating = true;
    }
});

document.addEventListener('keyup', (e) => {
    delete keysPressed[e.key];

    if (Object.keys(keysPressed).length === 0) {
        mainSprite.stop();
        isAnimating = false;

        // Resetear la dirección del personaje
        characterDirection = { x: 0, y: 0 };
    }
});

// Actualizar la posición del personaje en cada fotograma
app.ticker.add(() => {
    mainSprite.x += characterDirection.x * characterSpeed;
    mainSprite.y += characterDirection.y * characterSpeed;
});

// Agregar el sprite del personaje al escenario
app.stage.addChild(mainSprite);




//npcs
const npcImagePaths = [
    ['assets/characters/npc/character1_1.png', 'assets/characters/npc/character1_2.png', 'assets/characters/npc/character1_3.png'],
    ['assets/characters/npc/character2_1.png', 'assets/characters/npc/character2_2.png', 'assets/characters/npc/character2_3.png'],
    ['assets/characters/npc/character3_1.png', 'assets/characters/npc/character3_2.png', 'assets/characters/npc/character3_3.png'],
    ['assets/characters/npc/character4_1.png', 'assets/characters/npc/character4_2.png', 'assets/characters/npc/character4_3.png'],
    ['assets/characters/npc/character5_1.png', 'assets/characters/npc/character5_2.png', 'assets/characters/npc/character5_3.png'],
    ['assets/characters/npc/character7_1.png', 'assets/characters/npc/character7_2.png', 'assets/characters/npc/character7_3.png'],
    ['assets/characters/npc/character8_1.png', 'assets/characters/npc/character8_2.png', 'assets/characters/npc/character8_3.png'],
    ['assets/characters/npc/character9.png'],
    ['assets/characters/npc/dj1.png','assets/characters/npc/dj2.png','assets/characters/npc/dj3.png','assets/characters/npc/dj4.png']
];



// Crear un array de arrays de texturas para los NPCs
const npcTexturesArray = npcImagePaths.map(paths => paths.map(path => PIXI.Texture.from(path)));

// Función para animar automáticamente a un NPC
function animateNPC(npcSprite, npcTextures) {
    let currentFrameIndex = 0;
    let elapsedTime = 0;
    const animationSpeed = 70 / npcTextures.length; // Calcula el tiempo entre cada fotograma

    function updateAnimation(delta) {
        elapsedTime += delta;
        if (elapsedTime >= animationSpeed) {
            elapsedTime = 0;
            const nextTextureIndex = (currentFrameIndex + 1) % npcTextures.length;
            const nextTexture = npcTextures[nextTextureIndex];
            npcSprite.texture = nextTexture;
            currentFrameIndex = nextTextureIndex;
        }
    }

    return updateAnimation;
}

// Función para seleccionar NPCs aleatorios (excluyendo al DJ) y posicionarlos en la mitad superior de la pantalla
function selectRandomNPCs(npcTexturesArray, count) {
    const randomNPCs = [];
    const npcCount = npcTexturesArray.length;
    const djIndex = npcCount - 1; // Índice del DJ en el array de NPCs
    for (let i = 0; i < count; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * npcCount); // Elegir un índice aleatorio
        } while (randomIndex === djIndex); // Repetir si el índice es del DJ
        // Generar posiciones aleatorias en la mitad superior de la pantalla
        const x = Math.random() * app.screen.width;
        const y = Math.random() * (app.screen.height / 2);
        randomNPCs.push({ textures: npcTexturesArray[randomIndex], x, y });
    }
    return randomNPCs;
}

// Número de NPCs aleatorios (excluyendo al DJ) que deseas agregar (por ejemplo, el doble de la cantidad original)
const randomNPCCount = npcTexturesArray.length * 2;

// Seleccionar NPCs aleatorios (excluyendo al DJ) y posicionarlos en la mitad superior de la pantalla
const randomNPCs = selectRandomNPCs(npcTexturesArray.slice(0, -1), randomNPCCount);

// Crear y agregar sprites para cada NPC aleatorio
const randomNPCSprites = randomNPCs.map(({ textures, x, y }) => {
    const sprite = new PIXI.Sprite(textures[0]); // Usar la primera textura como inicial
    sprite.position.set(x, y);
    app.stage.addChild(sprite); // Agregar el sprite al escenario
    const npcAnimation = animateNPC(sprite, textures);
    app.ticker.add(npcAnimation);
    return sprite;
});


// Crear y agregar sprites para cada NPC
// Crear y agregar sprites para cada NPC con posiciones específicas
const npcSprites = npcTexturesArray.map((textures, index) => {
    const sprite = new PIXI.Sprite(textures[0]); // Usar la primera textura como inicial
    app.stage.addChild(sprite); // Agregar el sprite al escenario
    const npcAnimation = animateNPC(sprite, textures);
    app.ticker.add(npcAnimation);

    // Definir la posición del sprite según el índice del NPC
    switch (index) {
        case 9: // DJ
            sprite.position.set(400, 500); // Posición para el DJ
            break;
        default:
            // Distribuir los NPC restantes en la mitad superior del mapa
            const offsetX = 100 + (index * 100); // Espacio horizontal entre NPCs
            const offsetY = 100; // Espacio vertical fijo
            sprite.position.set(offsetX, offsetY);
            break;
    }

    return sprite;
});


// Definir el número de NPCs y sus dimensiones
const npcCount = 10; // Cambia este valor según la cantidad de NPCs que tengas
const npcWidth = 50; // Ancho de cada NPC
const npcHeight = 50; // Alto de cada NPC

// Array para almacenar los NPCs
const npcs = [];

// Crear los NPCs y definir sus áreas de colisión
for (let i = 0; i < npcCount; i++) {
    const x = Math.random() * (app.screen.width - npcWidth);
    const y = Math.random() * (app.screen.height - npcHeight);
    const npc = {
        sprite: new PIXI.Sprite(), // Agrega aquí la creación del sprite para cada NPC
        collisionArea: new PIXI.Rectangle(x, y, npcWidth, npcHeight)
    };
    npcs.push(npc);
}

// Función para verificar la colisión entre el jugador y los NPCs
function checkCollisions(playerSprite, npcs) {
    const playerBounds = playerSprite.getBounds();

    // Verificar colisión entre el jugador y cada área de colisión de los NPCs
    for (let i = 0; i < npcs.length; i++) {
        const npcBounds = npcs[i].collisionArea;

        // Verificar si hay colisión entre el jugador y el área de colisión del NPC actual
        if (playerBounds.intersects(npcBounds)) {
            // Colisión detectada, puedes realizar alguna acción aquí
            console.log(`Colisión con NPC ${i + 1}`);
        }
    }
}

// Llama a esta función en tu bucle de juego para verificar colisiones
app.ticker.add(() => {
    checkCollisions(mainSprite, npcs);
});
