var x=11;
var dia;
switch(x%7){
    case 0 :
        dia="Lunes";
        break;
    case 6 :
        dia="Martes";
        break;
    case 5 :
        dia="Miercoles";
        break;
    case 4 :
        dia="Jueves";
        break;
    case 3 :
        dia="Viernes";
        break;
    case 2 :
        dia="Sabado";
        break;
    case 1 :
        dia="Domingo";
        break;
        
}
console.log("Si hoy es lunes hace 11 dias fue "+dia);