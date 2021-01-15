class Cola{
    constructor() {
        this.algo=[];
    }
    agregar(element){
        this.algo.push(element)
        return this.algo;
    }
    quitar(){
        return this.algo.shift();
    }
    primero() {
        return this.algo[0];
        //console.log(this.algo[0])
    }
    mostrar(){
        return this.algo;
    }
    vacio(){
        if (this.algo.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function dance(hom, muj) {
    console.log("The dance partners are: \n");
    while (!muj.vacio() && !hom.vacio()) {
        person = muj.quitar();
        console.log("Female dancer is: " + person.name);
        person = hom.quitar();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}
let hombre = new Cola();
let mujer = new Cola();

hombre.agregar(new Dancer("Luis", "h"))
hombre.agregar(new Dancer("Pedro", "h"))
hombre.agregar(new Dancer("Lalo", "h"))
hombre.agregar(new Dancer("Norman", "h"))
hombre.agregar(new Dancer("Norman", "h"))

mujer.agregar(new Dancer("Norma","m"))
mujer.agregar(new Dancer("lola","m"))
mujer.agregar(new Dancer("Camila","m"))
mujer.agregar(new Dancer("Fiona","m"))

dance(hombre,mujer)
if (!mujer.vacio()) {
    console.log(mujer.primero().name + " is waiting to dance.");
}
if (!hombre.vacio()) {
    console.log(hombre.primero().name + " is waiting to dance.");
}
