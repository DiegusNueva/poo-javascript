function Perro(nombre, edad) {
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor = {
    habla: function(){
        return "¡Soy un perro!"
    }
}

let firulais = Perro("Firulais", 9);
console.log(firulais);