const contenedorCards = document.getElementById("contenedor_cards");
let cardsHTML = "";

for (let juego of juegos) {
    cardsHTML += crearCards(juego);
}
contenedorCards.innerHTML = cardsHTML;

function crearCards(juego) {
    let card = document.createElement('div');
    card.classList.add('card');
    
    let id = document.createElement('div');
    let name = document.createElement('p');
    let image = document.createElement('img');
    let type = document.createElement('p');
    let date = document.createElement('p');
    let platform = document.createElement('p');
    let informacion = document.createElement('p');

    id.innerText = `ID: ${juego.id}`;
    name.innerText = `Name: ${juego.name}`;
    image.src = juego.Image;
    type.innerText = `Type: ${juego.type}`;
    date.innerText = `Release Date: ${juego.date}`;
    platform.innerText = `Platform: ${juego.platform}`;
    informacion.innerText = `Info: ${juego.informacion}`;

    card.append(id, name, image, type, date, platform, informacion);
    return card.outerHTML;
}