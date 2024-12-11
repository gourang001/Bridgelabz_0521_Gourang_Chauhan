// 17. Calculate the sum of digits of a positive integer number
let num=1254;
let sum=0;
while(num!=0){
    let rem=num%10;
    sum+=rem;
    num=num/10;
}
console.log(sum);
