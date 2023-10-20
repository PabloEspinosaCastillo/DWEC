let nom = prompt("Introdueix el teu nom:");
let cognom = prompt("Introdueix el teu cognom:");
let edat = prompt("Introdueix la teva edat:");

function Persona(nom, cognom, edat) {
  this.nom = nom;
  this.cognom = cognom;
  this.edat = edat;
  this.getInfo = function() {
    return `El nom complet es ${this.nom} ${this.cognom} i te ${this.edat} anys.`;
  }
}

let persona = new Persona(nom, cognom, edat);
alert(persona.getInfo());
