const juegos = [
    {
        "id":1,
        "name": "The Legend of Zelda: Ocarina of Time",
        "Image": "https://i.postimg.cc/W16drLf5/artworks-000464588955-2ftldl-t500x500.jpg",
        "type": "Mundo abierto de accion",
        "date": "Nov 23, 1998",
        "platform": "Nintendo 64",
        "informacion":"Cuando era niño, Link es engañado por Ganondorf, el Rey de los Ladrones Gerudo. El malvado humano usa a Link para obtener acceso al Reino Sagrado, donde coloca sus manos contaminadas en la Trifuerza y transforma el hermoso paisaje de Hyrulean en un páramo estéril. Link está decidido a solucionar los problemas que ayudó a crear, por lo que con la ayuda de Rauru viaja a través del tiempo reuniendo los poderes de los Siete Sabios."
    },
    {
        "id":2,
        "name": "SoulCalibur",
        "Image": "https://i.postimg.cc/ZY2VRgg9/6-1-7379-13.jpg",
        "type": "Pelea 3D",
        "date": "Sep 8, 1999",
        "platform": "Dreamcast iOS (iPhone/iPad) Xbox 360",
        "informacion": "Soul Calibur es una saga de videojuegos de lucha y el nombre de su segundo juego, de la compañía Namco (creadora tambien de la saga Tekken), basado en luchas con armas. Consta de cuatro juegos hasta la fecha, debutando con Soul Edge en 1995. En 1999 se lanzó el juego Soul Calibur para Dreamcast, juego que quedaría para siempre como el título de la saga."
    },
    {
        "id":3,
        "name": "Grand Theft Auto IV",
        "Image": "https://i.postimg.cc/fTMkxW11/Grand-Theft-Auto-IV.jpg",
        "type": "Mundo abierto de accion",
        "date": "Apr 29, 2008",
        "platform": "PlayStation 3 Xbox 360 PC",
        "informacion": "Niko Bellic, Johnny Klebitz y Luis Lopez tienen una cosa en común: viven en la peor ciudad de Estados Unidos. En Liberty City, el dinero y el estatus social lo son todo, y dependiendo de si los tienes o no, vivirás en el cielo o en el infierno."
    },
    {
        "id":4,
        "name": "Super Mario Galaxy",
        "Image": "https://i.postimg.cc/Vkrwt3s3/6-1-595365-52.jpg",
        "type": "Plataformas 3D",
        "date": "Nov 12, 2007",
        "platform":"Wii",
        "informacion": "Super Mario Galaxy es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo Wii. Es el tercer videojuego en 3D de la serie Super Mario. Como Mario, el jugador se embarca en una búsqueda para rescatar a la princesa Peach, salvar el universo de Bowser y recoger 120 Estrellas de Poder, después de lo cual el jugador puede jugar el juego como Luigi para una experiencia más difícil. Los niveles consisten en galaxias llenas de planetas menores y mundos, con diferentes variaciones de gravedad, el elemento central del juego."
    },
    {
        "id":5,
        "name": "Super Mario Galaxy 2",
        "Image": "https://i.postimg.cc/9QTSCVQF/6-1-513164-52.jpg",
        "type": "Plataformas 3D",
        "date": "May 23, 2010",  
        "platform":"Wii",
        "informacion": " Super Mario Galaxy 2 es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo Wii. Se anunció por primera vez en E3 2009 y es la secuela de Super Mario Galaxy de 2007. Fue lanzado en todo el mundo en 2010. Al igual que el primer juego, la historia sigue a Mario mientras persigue al Rey Koopa, Bowser, en el espacio exterior, donde ha encarcelado a la princesa Peach y ha tomado el control del universo usando las Estrellas de Poder y la Gran Estrella."
    },
    {
       "id":6,
        "name": "The Legend of Zelda: Breath of the Wild",
        "Image": "https://i.postimg.cc/qBNHSPyg/image.jpg",
        "type": "Mundo abierto de accion",
        "date": "Mar 3, 2017",  
        "platform":"Wii U Nintendo Switch",
        "informacion":"Es la decimonovena entrega de la serie y la tercera en utilizar gráficos en alta definición.El jugador controla a Link, que despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal."
    },
    {
        "id":7,
        "name": "Tony Hawk's Pro Skater 3",
        "Image": "https://i.postimg.cc/j2cfzDcd/6-1-13655-13.jpg",
        "type": "Skating",
        "date": "Oct 30, 2001",  
        "platform":"PlayStation 2 GameCube Xbox PlayStation PC Game Boy Advance Nintendo 64",
        "informacion":"Desafía a hasta cuatro amigos en competiciones en línea a través de una LAN o Internet. Llévalos en los modos Trick Attack y Graffiti."
    },
    {
        "id":8,
        "name": "Perfect Dark (2000)",
        "Image": "https://i.postimg.cc/7ZspKXhS/6-1-6075-13.jpg",
        "type": "FPS",
        "date": "May 22, 2000",  
        "platform":"Nintendo 64 Xbox 360",
        "informacion": "Perfect Dark es un videojuego de disparos en primera persona de 2000 desarrollado y publicado por Rare para Nintendo 64. Es el primer juego de la serie Perfect Dark y sigue a Joanna Dark, una agente del centro de investigación del Instituto Carrington, mientras intenta detener una conspiración extraterrestre por una corporación rival llamada dataDyne. Presenta un modo de campaña en el que el jugador debe completar una serie de niveles para avanzar en la historia, así como una variedad de opciones multijugador, que incluyen un modo cooperativo y configuraciones tradicionales de combate a muerte con bots controlados por computadora."
    },
    {
        "id":9,
        "name": "Red dead redemption 2",
        "Image": "https://i.postimg.cc/gkMSpjpW/6-1-689098-52.jpg",
        "type": "Mundo abierto de accion",
        "date": "Oct 26, 2018",  
        "platform":"Xbox One PlayStation 4 PC",
        "informacion": "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX."
    },
    {
       "id":10,
        "name": "Grand Theft Auto V",
        "Image": "https://i.postimg.cc/vHjrXVMc/gta-51-407fbc5ef45f82209415122010256056-1024-1024.jpg",
        "type": "Mundo abierto de accion",
        "date": "Nov 18, 2014",  
        "platform":"PlayStation 3 Xbox 360 PlayStation 4 Xbox One PC PlayStation 5 Xbox Series X",
        "informacion": "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo."
    },
    {
       "id":11,
        "name": "Metroid Prime",
        "Image": "https://i.postimg.cc/05zdSnRL/Metroid-Primebox.jpg",
        "type": "FPS",
        "date": "Nov 17, 2002",  
        "platform":"GameCube Wii",
        "informacion":"Samus regresa en una nueva misión para desentrañar el misterio detrás de los muros en ruinas esparcidos por Tallon IV. En Metroid Prime, jugarás el papel de esta cazarrecompensas y verás el mundo a través de su visera, que muestra información que va desde los niveles de energía actuales hasta las municiones. Equipado con un Power Beam y Gravity Suit, debes disparar interruptores bloqueados, resolver acertijos y eliminar enemigos. Depende de ti explorar el mundo y recuperar más potenciadores y armas, que gradualmente abren más áreas de juego."
    },
    {
       "id":12,
        "name": "Grand Theft Auto III",
        "Image": "https://i.postimg.cc/bJDDZ6Dg/6-1-12656-52.jpg",
        "type": "Mundo abierto de accion",
        "date": "Oct 22, 2001",       
        "platform":"PlayStation 2 PC iOS (iPhone/iPad) Xbox PlayStation 4 Game Boy Advance",
        "informacion": "Los jugadores se ponen en el corazón de su propia película de gángsters y se sueltan en una ciudad de 3 dimensiones completamente realizada con un elenco de cientos, más de 50 vehículos, desde autos deportivos hasta camiones de helados y desde botes hasta autobuses, 3 horas de música, incluyendo ópera, reggae, house, batería y bajo, pop y disco, y una gran variedad de armas listas para la calle. "
    },
    {
        "id":13,
        "name": "Super Mario Odyssey",
        "Image": "https://i.postimg.cc/c13tZbN4/6-1-624965-52.jpg",
        "type": "Plataformas 3D",
        "date": "Oct 27, 2017",       
        "platform":"Nintendo Switch",
        "informacion": "Nueva evolución de Mario Sandbox-Style Gameplay. Mario se embarca en un nuevo viaje a través de mundos desconocidos, corriendo y saltando a través de enormes mundos en 3D en el primer juego de Mario estilo sandbox desde Super Mario 64 y Super Mario Sunshine. Navega entre mundos expansivos a bordo de una aeronave y realiza acciones completamente nuevas, como lanzar la gorra de Mario."
    },
    {
       "id":14,
        "name": "Halo: Combat Evolved",
        "Image": "https://i.postimg.cc/65jXPB17/Halo-Combat-Evolved-XBox-version-box-art.jpg",
        "type": "FPS",
        "date": "Nov 15, 2001",       
        "platform":"PC Xbox",
        "informacion": "En un intento desesperado por evitar que una raza alienígena conquistadora llamada Pacto encuentre la Tierra, usted, un soldado cibernéticamente mejorado que representa el pico de la evolución militar humana, y un grupo de marines huyen a un sistema desconocido distante donde inesperadamente tropiezas con Halo, un enorme artefacto alienígena en órbita entre un gigante gaseoso y su luna. Su objetivo: Descubrir el horrible secreto de Halo, y destruir la némesis de la humanidad - el Pacto."
    },
    {
        "id":15,
        "name": "NFL 2K1",
        "Image": "https://i.postimg.cc/zXBmK9Xq/6-1-9973-13.jpg",
        "type": "Simulador deporte",
        "date": "Sep 7, 2000",       
        "platform":"Dreamcast",
        "informacion": "Al final, NFL 2K1 es una versión más profunda y refinada del juego original."
    },
    {
       "id":16,
        "name": "Half-life 2",
        "Image": "https://i.postimg.cc/3RKf7vk3/image.jpg",
        "type": "FPS",
        "date": "Nov 16, 2004",       
        "platform":"PC Xbox",
        "informacion":"Al tomar el suspenso, el desafío y la carga visceral del original, y agregarle un realismo y una capacidad de respuesta sorprendentemente nuevos, Half-Life 2 abre la puerta a un mundo donde la presencia del jugador afecta todo lo que lo rodea, desde el entorno físico hasta los comportamientos, incluso las emociones, tanto de amigos como de enemigos. El jugador vuelve a tomar la palanca del científico investigador Gordon Freeman, quien se encuentra en una Tierra infestada de extraterrestres, siendo desgarrada hasta los huesos, con sus recursos agotados y su población menguando. Freeman se ve envuelto en el nada envidiable papel de rescatar al mundo del mal que desató en Black Mesa. Y mucha gente, gente que le importa, cuenta con él."
    },
    {
        "id":17,
        "name": "BioShock",
        "Image": "https://i.postimg.cc/2yt04925/6-1-63862-52.jpg",
        "type": "FPS",
        "date": "Aug 21, 2007",              
        "platform":"Xbox 360 PC PlayStation 3 iOS (iPhone/iPad)",
        "informacion": "El juego transcurre en una ucronía del año 1960, y pone al jugador en el rol de Jack, superviviente de un accidente de avión, que luego deberá explorar la ciudad de Rapture, mientras que lucha contra seres humanos mutados con poderes especiales y robots diseñados para atacar ciertos objetivos automáticamente. El juego, que se encuentra en la categoría de juego de disparos en primera persona, incorpora elementos de juegos de rol, biopunk, horror de supervivencia y sigilo, por esto, es descrito por sus desarrolladores y Levine como una secuela espiritual del juego System Shock 2."
    },
    {
        "id":18,
        "name": "GoldenEye 007",
        "Image": "https://i.postimg.cc/zGCkBfZv/6-1-3974-13.jpg",
        "type": "FPS",
        "date": "Aug 25, 1997",              
        "platform":"Nintendo 64 Xbox 360 Xbox One Xbox Series X",
        "informacion": "El título está basado en la película homónima de James Bond de 1995. Es el título posterior a James Bond: The Duel, lanzado para varias plataformas de Sega en 1993. Fue seguido por James Bond 007, lanzado para Game Boy en 1997."
    },
    {
        "id":19,
        "name": "Uncharted 2: Among Thieves",
        "Image": "https://i.postimg.cc/d3Z2Ksjq/6-1-106618-52.jpg",
        "type": "Aventura de accion lineal",
        "date": "Oct 13, 2009",              
        "platform":"PlayStation 3",
        "informacion": "El cazador de fortunas Nathan Drake regresa en Uncharted 2: Among Thieves, un juego de acción, aventuras y disparos en tercera persona creado por el galardonado desarrollador Naughty Dog. Con mala suerte, Drake es atraído de regreso al traicionero mundo de ladrones y buscadores de tesoros mercenarios que había tratado de dejar atrás. Cuando un misterioso artefacto impulsa a Drake a emprender una expedición para encontrar el legendario valle de Shambhala en el Himalaya, se ve envuelto en un peligroso juego del gato y el ratón contra un criminal de guerra fugitivo que busca algo más que las legendarias riquezas de la ciudad perdida. Atrapado en una red de engaños y sumergido en una persecución cada vez más mortal que pone a prueba los límites de su resistencia, Drake se verá obligado a arriesgarlo todo, pero ¿finalmente se le ha acabado la suerte?"
    },
    {
       "id":20,
        "name": "Resident Evil 4 (2005)",
        "Image": "https://i.postimg.cc/XvND65G4/71i-Xh6w-FHNL-SL1500.jpg",
        "type": "Supervivencia",
        "date": "Jan 11, 2005",              
        "platform":"GameCube PlayStation 2 PC Wii",
        "informacion": "En Resident Evil 4 los jugadores se vuelven a conocer con Leon S. Kennedy, policía novato idealista del Departamento de Policía de Raccoon City de Resident Evil 2. Han pasado seis años desde la destrucción de Raccoon City y en ese momento, el gobierno de los Estados Unidos ha podido destruir la nefasta Umbrella Corporation. Avance rápido hasta 2004 y los jugadores se reincorporan a Leon, que ahora es un agente de los Estados Unidos con una misión de alto secreto. Se le ha encomendado investigar el secuestro de la hija del presidente y su investigación lo ha llevado a un lugar misterioso en Europa. A medida que León se encuentra con horrores inimaginables, debe averiguar quién o qué está detrás de todo."
    },
    {
        "id":21,
        "name": "Baldur's Gate 3",
        "Image": "https://i.postimg.cc/nrm3GY5Y/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
        "type": "Juego de rol",
        "date": "Aug 3, 2023",              
        "platform":"PC PlayStation 5 Xbox Series X",
        "informacion": "Un antiguo mal ha regresado a Baldur's Gate con la intención de devorarlo desde adentro hacia afuera. El destino de Faerun está en tus manos. Solo, puedes resistir. Pero juntos podéis superarlo. Reúne a tu grupo y regresa a los Reinos Olvidados en una historia de compañerismo y traición, sacrificio y supervivencia, y el atractivo del poder absoluto. Misteriosas habilidades están despertando en tu interior, extraídas de un parásito desollador de mentes plantado en tu cerebro. Resiste y vuelve la oscuridad contra sí misma. O abrazar la corrupción y convertirse en el mal supremo."
    },
    {
        "id":22,
        "name": "The Orange Box",
        "Image": "https://i.postimg.cc/xTrxThJs/6-1-78321-52.jpg",
        "type": "FPS",
        "date": "Oct 10, 2007",              
        "platform":"PC Xbox 360 PlayStation 3",
        "informacion": "The Orange Box es un lote que incluye cinco juegos de Valve: Half-Life® 2; Half-Life 2: Episode One; Half-Life 2: Episode Two; Team Fortress 2, la continuación del juego que marcó la historia de los juegos multijugador por clases y equipos; y Portal, el juego que combina rompecabezas, acción en primera persona y aventuras, dando forma a una experiencia como nunca antes habías vivido."
    },
    {
        "id":23,
        "name": "Tekken 3",
        "Image": "https://i.postimg.cc/dQC6X6HG/6-1-7966-13.jpg",
        "type": "Pelea 3D",
        "date": "Apr 29, 1998",              
        "platform":"PlayStation Dreamcast",
        "informacion": "Una antigua fuerza maligna ha vuelto a despertar, ataca en secreto y se alimenta de las almas de poderosos guerreros. Para sacarlo de su escondite será necesario el mayor concurso de lucha que el mundo haya visto jamás... Tekken 3. Algunos luchan por venganza, otros por honor. En última instancia, todos luchan por sus vidas y el destino de toda la humanidad."
    },
    {
        "id":24,
        "name": "Mass Effect 2",
        "Image": "https://i.postimg.cc/c1f7THCm/6-1-657262-52.jpg",
        "type": "Juego de rol Accion",
        "date": "Jan 26, 2010",              
        "platform":"PC Xbox 360 PlayStation 3",
        "informacion": "¿Serías capaz de perder todo con tal de salvar la galaxia? Debes prepararte para ello, Comandante Shepard. Es hora de aliarte con la mejor gente y reclutar a la élite luchadora de la galaxia para continuar con la resistencia en contra de los segadores invasores."
    },
    {
        "id":25,
        "name": "Elden Ring",
        "Image": "https://i.postimg.cc/HxXMSZYx/D-643966-MLU72637466897-112023-C.jpg",
        "type": "Accion RPG",
        "date": "Feb 25, 2022",              
        "platform":"PC Xbox One PlayStation 4 Xbox Series X PlayStation 5",
        "informacion": "Elden Ring es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego."
    }
]