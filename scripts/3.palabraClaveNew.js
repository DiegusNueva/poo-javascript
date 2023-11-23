//PROTOTYPE CHAINING (encadenamiento de prototipos)

function Perro(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Perro.prototype.habla = function() {
    return "¡Soy un perro!";
}

let bobby = new Perro("Bobby", 12);

//Combinación de objeto y función