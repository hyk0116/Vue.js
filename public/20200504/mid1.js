let a=[]
for(let i=0; i<100; i++){
    a[i] =Math.floor(Math.random()*100+1)

}

let sum=0;
for(let i=0; i<100; i++){
    sum+=a[i]
}
console.log( sum/100)