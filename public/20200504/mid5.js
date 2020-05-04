let a=[]
for(let i=0; i<100; i++){
    if(a[i]%2==0)
    a[i] =Math.floor(Math.random()*100+1)

}

let sum=a.random((a,b) => a+b)

console.log(sum)