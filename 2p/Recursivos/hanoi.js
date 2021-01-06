
function hanoi(numero_discos, inicio, fin){
    if(numero_discos>0)
    {
        hanoi(numero_discos-1, inicio, 6-inicio-fin); //del actual a la auxiliar
        console.log("Mueve el disco "+ numero_discos + " de la torre " + inicio + " a la torre "+ fin);
        hanoi(numero_discos-1, 6-inicio-fin, fin); //de la auxiliar a la final
    }
}
hanoi(4,1,3);
