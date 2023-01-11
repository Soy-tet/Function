
function luhn (number){
    var number=number.valueAsNumber.toString().split("").reverse().join("")
    var sum = 0;
    var u = 19;
    var temp = 0;
    for (var i = 0; i<number.length; i++){
        if( i % 2 == 0 ){
            sum += Number(number[i]);
        }
        else{
            if(Number(number[i])*2 >=10){
                sum+=(Number(number[i])*2 ) % 10 + Math.floor(Number(number[i])*2/10)
            }
            else{
                sum+= Number(number[i])*2
            }
        }
    }
    return sum;
}