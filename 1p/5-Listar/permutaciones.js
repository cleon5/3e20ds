let s = [3,1,4,2,3];
function Per (s) 
{
    const permuta = [];
    const p = (ajax, perm = []) => {
        if (!ajax.length)
        {
            permuta.push(perm)
            return
        }
        for(let x in ajax)
        {
            let jax = ajax.slice();
            let oro = jax.splice(x,1)
            p(jax, perm.concat(oro))
        }
    } 
    p(s);
    return permuta;
}
console.time()
console.log(Per(s))
console.timeEnd()
console.log("Complejidad Exponencial");