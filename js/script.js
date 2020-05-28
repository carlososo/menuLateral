document.getElementById('boton-me').onclick = aboutMe;
document.getElementById('boton-educacion').onclick = formation;


function aboutMe() {
    document.getElementById('aboutMe').innerHTML = `<h2> About me </h2> <p>This should be a little bit about me</p>
    <p>My name is Carlos Felipe Osorio Cervantes </p> 
    <p>I live in CDMX </p>
    <p>I'm an IT administrator and have a little bit over 9 years of experience in the Information technology field </p>
    <p> My main goal as an IT administrator is to Zombies reversus ab inferno, nam malum cerebro.</p>
    `;
}

function formation() {
    document.getElementById('formation').innerHTML = `<h2> Formation </h2>
    <p>Holo... nomas estoy poniendo texto ya porque ya me aburrí de tratar de describir cosas</p>
    <p> y como que no quería meter otro tipo de texto así medio random así que, estudié Lic. en Tecnologías en informacion</p>`
}