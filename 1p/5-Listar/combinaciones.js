let s = [3,1,4,2,3]
function combina (s)
{
    let r = [];
    const combinacion = (vec, x= []) => {
        if (vec.length == 0) 
        {
            r.push(x)
        }     
        else 
         {
            for (let z = 0; z < vec.length; z++) 
            {
                let jax = vec.slice();
                let o = jax.splice(z, 1);
                combinacion(jax, x.concat(o))
            }
        }
    }
    combinacion(s)
    return r;
}

console.log("Complejidad Exponencial")
console.time()
combina(s)
console.timeEnd()
console.log(combina(s))