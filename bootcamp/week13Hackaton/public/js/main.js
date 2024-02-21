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
let characterSpeed = 1
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

//variable para que el main se detenga
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
function movePlayer() {
    if (playerCanMove) {
        // Lógica para mover al personaje principal

        // Restablecer la bandera alertShown para permitir mostrar otra alerta
        alertShown = false;
    }
}
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

//npc 1
class NPC {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el primer NPC
const npc1X = 100;
const npc1Y = 100;

// Texturas para el primer NPC
const npc1Textures = [
    PIXI.Texture.from('assets/characters/npc/character1_1.png'),
    PIXI.Texture.from('assets/characters/npc/character1_2.png'),
    PIXI.Texture.from('assets/characters/npc/character1_3.png')
];

// Crear instancia del primer NPC
const npc1 = new NPC(npc1Textures, npc1X, npc1Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc1.animate();
});

// Agregar los sprites del NPC al escenario
npc1.sprites.forEach(sprite => app.stage.addChild(sprite));

//npc2
class NPC2 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el segundo NPC
const npc2X = 200;
const npc2Y = 200;

// Texturas para el segundo NPC
const npc2Textures = [
    PIXI.Texture.from('assets/characters/npc/character2_1.png'),
    PIXI.Texture.from('assets/characters/npc/character2_2.png'),
    PIXI.Texture.from('assets/characters/npc/character2_3.png')
];

// Crear instancia del segundo NPC (usando la clase NPC2)
const npc2 = new NPC2(npc2Textures, npc2X, npc2Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc2.animate();
});
npc2.sprites.forEach(sprite => app.stage.addChild(sprite));

//npc3
//npc3
class NPC3 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el tercer NPC
const npc3X = 300;
const npc3Y = 150;

// Texturas para el tercer NPC
const npc3Textures = [
    PIXI.Texture.from('assets/characters/npc/character3_1.png'),
    PIXI.Texture.from('assets/characters/npc/character3_2.png'),
    PIXI.Texture.from('assets/characters/npc/character3_3.png')
];

// Crear instancia del tercer NPC (usando la clase NPC3)
const npc3 = new NPC3(npc3Textures, npc3X, npc3Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc3.animate();
});
npc3.sprites.forEach(sprite => app.stage.addChild(sprite));


//npc4
//npc4
class NPC4 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el cuarto NPC
const npc4X = 500;
const npc4Y = 200;

// Texturas para el cuarto NPC
const npc4Textures = [
    PIXI.Texture.from('assets/characters/npc/character4_1.png'),
    PIXI.Texture.from('assets/characters/npc/character4_2.png'),
    PIXI.Texture.from('assets/characters/npc/character4_3.png')
];

// Crear instancia del cuarto NPC (usando la clase NPC4)
const npc4 = new NPC4(npc4Textures, npc4X, npc4Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc4.animate();
});
npc4.sprites.forEach(sprite => app.stage.addChild(sprite));

//npc5
class NPC5 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el quinto NPC
const npc5X = 500;
const npc5Y = 100;

// Texturas para el quinto NPC
const npc5Textures = [
    PIXI.Texture.from('assets/characters/npc/character5_1.png'),
    PIXI.Texture.from('assets/characters/npc/character5_2.png'),
    PIXI.Texture.from('assets/characters/npc/character5_3.png')
];

// Crear instancia del quinto NPC (usando la clase NPC5)
const npc5 = new NPC5(npc5Textures, npc5X, npc5Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc5.animate();
});
npc5.sprites.forEach(sprite => app.stage.addChild(sprite));

//npc6
class NPC6 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el sexto NPC
const npc6X = 600;
const npc6Y = 180;

// Texturas para el sexto NPC
const npc6Textures = [
    PIXI.Texture.from('assets/characters/npc/character7_1.png'),
    PIXI.Texture.from('assets/characters/npc/character7_2.png'),
    PIXI.Texture.from('assets/characters/npc/character7_3.png')
];

// Crear instancia del sexto NPC (usando la clase NPC6)
const npc6 = new NPC6(npc6Textures, npc6X, npc6Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc6.animate();
});
npc6.sprites.forEach(sprite => app.stage.addChild(sprite));

//npc7
class NPC7 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el séptimo NPC
const npc7X = 400;
const npc7Y = 200;

// Texturas para el séptimo NPC
const npc7Textures = [
    PIXI.Texture.from('assets/characters/npc/character8_1.png'),
    PIXI.Texture.from('assets/characters/npc/character8_2.png'),
    PIXI.Texture.from('assets/characters/npc/character8_3.png')
];

// Crear instancia del séptimo NPC (usando la clase NPC7)
const npc7 = new NPC7(npc7Textures, npc7X, npc7Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc7.animate();
});
npc7.sprites.forEach(sprite => app.stage.addChild(sprite));


//npc9
class NPC9 {
    constructor(texture, x, y) {
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.position.set(x, y);
        this.currentFrameIndex = 0;
    }
}

// Coordenadas para el noveno NPC
const npc9X = 670;
const npc9Y = 200;

// Textura para el noveno NPC
const npc9Texture = PIXI.Texture.from('assets/characters/npc/character9.png');

// Crear instancia del noveno NPC (usando la clase NPC9)
const npc9 = new NPC9(npc9Texture, npc9X, npc9Y);

// Agregar el sprite del noveno NPC al escenario
app.stage.addChild(npc9.sprite);


//npc10
class NPC10 {
    constructor(textures, x, y) {
        this.sprites = textures.map(texture => {
            const sprite = new PIXI.Sprite(texture);
            sprite.position.set(x, y);
            return sprite;
        });

        this.currentFrameIndex = 0;
        this.textures = textures;
        this.animationSpeed = 150; 
        this.lastFrameTime = Date.now();
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime >= this.animationSpeed) {
            this.lastFrameTime = now;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.sprites.length;
            this.sprites.forEach(sprite => sprite.texture = this.textures[this.currentFrameIndex]);
        }
    }
}

// Coordenadas para el décimo NPC (DJ)
const npc10X = 360;
const npc10Y = 500;

// Texturas para el décimo NPC (DJ)
const npc10Textures = [
    PIXI.Texture.from('assets/characters/npc/dj1.png'),
    PIXI.Texture.from('assets/characters/npc/dj2.png'),
    PIXI.Texture.from('assets/characters/npc/dj3.png'),
    PIXI.Texture.from('assets/characters/npc/dj4.png')
];

// Crear instancia del décimo NPC (DJ)
const npc10 = new NPC10(npc10Textures, npc10X, npc10Y);

// Agregar la animación al bucle de juego
app.ticker.add(() => {
    npc10.animate();
});

// Agregar los sprites del NPC al escenario
npc10.sprites.forEach(sprite => app.stage.addChild(sprite));

// Cargar la textura de la mesa de DJ
const tableTexture = PIXI.Texture.from('assets/characters/objets/tabledj.png');

// Coordenadas para la mesa de DJ
const tableX = 340;
const tableY = 430;

// Crear el sprite para la mesa de DJ
const tableSprite = new PIXI.Sprite(tableTexture);
tableSprite.position.set(tableX, tableY);

// Establecer el nuevo ancho y alto de la mesa de DJ
const newWidth = 100; // Ancho deseado
const newHeight = 100; // Alto deseado
tableSprite.width = newWidth;
tableSprite.height = newHeight;

// Agregar la mesa de DJ al escenario
app.stage.addChild(tableSprite);


// Cargar la textura de la mesa de DJ
const tentTexture = PIXI.Texture.from('assets/characters/objets/tent.png');

// Coordenadas para la mesa de DJ
const tentX = 300;
const tentY = 0;

// Crear el sprite para la mesa de DJ
const tentSprite = new PIXI.Sprite(tentTexture);
tentSprite.position.set(tentX, tentY);

// Establecer el nuevo ancho y alto de la mesa de DJ
const TentnewWidth = 200; // Ancho deseado
const TentnewHeight = 150; // Alto deseado
tentSprite.width = TentnewWidth;
tentSprite.height = TentnewHeight;

// Agregar la mesa de DJ al escenario
app.stage.addChild(tentSprite);

// Cargar la música
const music = PIXI.sound.Sound.from({
    url: './assets/characters/music/backgroundMusic.mp3',
    preload: true,
    loaded: function(err, sound) {
        // Reproducir la música cuando se haya cargado
        if (!err) {
            sound.play({
                volume: 0.1, // Ajusta el volumen según sea necesario
                loop: true, // Repetir la música
            });
        } else {
            console.error('Error al cargar la música:', err);
        }
    }
});

let isPlaying = false; // Variable para realizar un seguimiento del estado de reproducción del audio

// Obtener una referencia al botón de reproducción
const playButton = document.getElementById('playButton');

// Agregar un evento de clic al botón de reproducción
playButton.addEventListener('click', () => {
    // Verificar el estado de reproducción del audio
    if (!isPlaying) {
        // Si el audio no se está reproduciendo, iniciar la reproducción
        PIXI.sound.Sound.from('assets/characters/music/backgroundMusic1.mp3').play();
        isPlaying = true; // Actualizar el estado de reproducción del audio
    } else {
        // Si el audio ya se está reproduciendo, detener la reproducción
        PIXI.sound.stopAll(); // Detener todas las instancias de audio
        isPlaying = false; // Actualizar el estado de reproducción del audio
    }
});

// Definir las posiciones de los NPCs en el escenario
const npcPositions = [
    { x: npc1X, y: npc1Y }, // NPC 1
    { x: npc2X, y: npc2Y }, // NPC 2
    { x: npc3X, y: npc3Y }, // NPC 3
    { x: npc4X, y: npc4Y }, // NPC 4
    { x: npc5X, y: npc5Y }, // NPC 5
    { x: npc6X, y: npc6Y }, // NPC 6
    { x: npc7X, y: npc7Y }, // NPC 7
    { x: npc9X, y: npc9Y }, // NPC 9
    { x: npc10X, y: npc10Y } // NPC 10
];
// Declarar variables globales para los datos de los NPCs y las áreas de colisión
let npcData;

// Función para cargar los datos de los NPCs desde un archivo JSON
function loadNPCData() {
    // Hacer la solicitud para cargar el archivo JSON
    fetch('data/npc.json')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Almacenar los datos de los NPCs en la variable global
            npcData = data;
            console.log('Datos de NPCs cargados correctamente:', npcData); // Agregar este mensaje de registro
        })
        .catch(error => {
            console.error('Error al cargar los datos de NPC:', error);
        });
}
function showRandomInfo() {
    canMove = false;
    // Seleccionar un índice aleatorio del arreglo de datos
    const randomIndex = Math.floor(Math.random() * npcData.length);
    // Obtener los datos aleatorios
    const randomNPC = npcData[randomIndex];
    // Construir el mensaje con la información aleatoria
    const message = `Name: ${randomNPC.nombre}\nAge: ${randomNPC.edad}\nDescription: ${randomNPC.descripcion}`;
    // Mostrar el mensaje
    alert(message);
}
let alertShown = false;
let canMove = true;
// Función para verificar colisiones entre el jugador y los NPCs
function checkCollisions() {
    if (canMove) {
        // Actualizar el área de colisión del jugador
        const playerWidth = 30; // Ancho del jugador
        const playerHeight = 30; // Alto del jugador
        const playerCollisionArea = new PIXI.Rectangle(mainSprite.x - playerWidth / 2, mainSprite.y - playerHeight / 2, playerWidth, playerHeight);

        // Verificar si npcCollisionAreas está definido y no es null
        if (npcCollisionAreas && npcCollisionAreas.length > 0) {
            // Comprobar colisión con cada NPC
            for (let i = 0; i < npcCollisionAreas.length; i++) {
                const npcArea = npcCollisionAreas[i];
                if (playerCollisionArea.intersects(npcArea) && !alertShown) {
                    // Colisión detectada y no se ha mostrado una alerta, mostrar información aleatoria del NPC
                    alertShown = true; // Establecer la bandera en true para evitar mostrar más alertas
                    showRandomInfo();
                    canMove = false; // Detener el movimiento del jugador
                    setTimeout(() => {
                        alertShown = false; // Restablecer la bandera alertShown después de 1 segundo
                        canMove = true; // Permitir al jugador moverse nuevamente después de 1 segundo
                    }, 1000); // 1000 milisegundos = 1 segundo
                    break; // Detener la búsqueda después de encontrar la primera colisión
                }
            }
        }
    }
}
function resetAlertShown() {
    alertShown = false;
}

// Función para crear un área de colisión basada en las dimensiones y la posición de un NPC
function createCollisionArea(position) {
    const npcWidth = 30; // Ancho del NPC
    const npcHeight = 30; // Alto del NPC
    return new PIXI.Rectangle(position.x - npcWidth / 2, position.y - npcHeight / 2, npcWidth, npcHeight);
}

// Definir áreas de colisión para los NPCs
const npcCollisionAreas = npcPositions.map(position => createCollisionArea(position));

// Llamar a esta función en cada fotograma del juego
app.ticker.add(() => {
    checkCollisions();
});


// Función para reiniciar el juego
function restartGame() {
    // Aquí va el código para reiniciar el juego
    location.reload(); // Esto recarga la página, reiniciando el juego
}

// Agregar el botón al DOM
document.addEventListener('DOMContentLoaded', function() {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.id = 'restartButton';
    restartButton.addEventListener('click', restartGame);
    document.body.appendChild(restartButton);
});

let playerCanMove = true; // Variable para rastrear si el jugador puede moverse


function restartMovement() {
    canMove = true; // Establecer la bandera en true para permitir el movimiento nuevamente
}



// Cargar los datos de los NPCs al iniciar el juego
loadNPCData();
resetAlertShown();
