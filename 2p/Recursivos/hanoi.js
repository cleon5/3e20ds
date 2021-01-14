
function hanoi(numdis, inicio, fin){
    if(numdis>0)
    {
        hanoi(numdis-1, inicio, 6-inicio-fin);
        console.log("Disco "+ numdis + " de torre " + inicio + " a torre "+ fin);
        hanoi(numdis-1, 6-inicio-fin, fin);
    }
}
hanoi(4,1,3);
