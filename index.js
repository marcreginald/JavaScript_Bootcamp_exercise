var output = [];
var cnt = 1;

function fizzBuzz(){
if(cnt % 3 === 0 && cnt % 5 === 0){
    output.push("fizzbuzz");
}else if( cnt % 3 === 0){
        output.push("fizz");
    }else if( cnt % 5 === 0){
        output.push("buzz");
    }
    
    else{
        output.push(cnt);
    }



    cnt++;
    console.log(output);
}