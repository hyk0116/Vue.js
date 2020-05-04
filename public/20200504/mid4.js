function sum(...a){
    let sum=0;
    for(let i=0; i<a.length; i++){
        sum+=a[i]
        return sum
    }
}
function text_sum(...a){
    let b= []
    for(let i=0; i<10; i++)
    b[i]= Math.floor(Math.random()*5+1)
   
    for(let i=0; i<10; i++)
    console.log(b[i])
    return b;
}