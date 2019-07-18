let test = function(){
    let i=10;
    for(let k=0; k<=5; k++){
         i+=k*k;
        console.log(k,i++)
    }
    
    console.log(" === "+i);
}

test();