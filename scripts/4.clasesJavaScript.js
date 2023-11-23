function Animales(nombre, edad) {
    let nuevoAnimal = Object.create(ConstructorAnimal);
    nuevoAnimal.nombre = nombre;
    nuevoAnimal.edad = edad;
    return nuevoAnimal;
}

let ConstructorAnimal = {
    canta: function() {
        return `${this.nombre} puede cantar`;
    },
    baila: function() {
        return `${this.nombre} puede bailar`;
    }
}

function Gatos(nombre, edad, colorBigotes) {
    let nuevoGato = Animales(nombre, edad);
    Object.setPrototypeOf(nuevoGato, ConstructorGato);
    nuevoGato.colorBigotes = colorBigotes;
    return nuevoGato;
}

let ConstructorGato = {
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

Object.setPrototypeOf(ConstructorGato, ConstructorAnimal);
const clara = Gatos("Clara", 33, "púrpura");

clara.sing();
clara.whiskers();
// Resultado esperado
// "Clara puede cantar"
// "Tengo bigotes color púrpura"