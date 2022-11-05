//Hometask 2nd

//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

function one(){
    const number=+prompt('Please enter a value A:')
for (let i=1 ; i <= 1000 ; i++) {
        if ( i % number == 0) {
            console.log(i)
        }
    }
}
one()
////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).

function two(){
    const number=+prompt('Please enter a value A:')
    for (let i=1 ; i <= 1000 ; i++) {
            if ( i*i < number){
                console.log(i)
            }
        }
    }
two()
////////////////////////////////////////////////////////////////////////////////////////////////////
    
//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
    
function three(){
    const a = +prompt('Enter A')
    for (let i=a-1 ; ; i--) {
        if ( a % i == 0 ) {
            console.log(i)
            break
        }
    }
}
three()
////////////////////////////////////////////////////////////////////////////////////////////////
    
//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
    
function four(){
    const a = +prompt('Enter A');
    const b = +prompt('Enter B')
    
    console.log('A='+a)
    console.log('B='+b)
    
    if(a>b){
    for (let i=b ; i<=a; i++) {
        if ( i % 7 == 0 ) {
            console.log(i)
            }
        }
    }else{
        for (let i=b ; i>=a; i--) {
            if ( i % 7 == 0 ) {
                console.log(i)
            }
        }
    }
}
four()
/////////////////////////////////////////////////////////////////////////////////////////////////
    
//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
    
function five(){
    const n = +prompt('Enter N')
        let a=1;
        let b=1;
        let c;
    
    for (let i = 2; i <= n; i++) {
        c = a +b;
        a = b;
        b = c;
        if(i == n) {
            console.log(a)
        }
    }
}
five()
/////////////////////////////////////////////////////////////////////////////////////////////////////
    
//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm.
    
function six(){
    const a=+prompt('Please enter a value A:')
    const b=+prompt('Please enter a value B:')
    
    function euclidGCD(a, b) {
        var gcd;
        
        if (a === b) {
          gcd = a;
        } else if (a > b) {
          gcd = euclidGCD((a - b), b);
        } else if (a < b) {
          gcd = euclidGCD(a, (b - a));
        }
        
        return gcd;
      }
      
      console.log( euclidGCD(a, b));
}
six()
    
    
//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
    function seven(){
        let a=+prompt('Please enter a value A:')
        console.log('A='+a)
    
        let mirror=0;
        let r;
        while(a!=0){
            r=a%10;
            mirror=mirror*10+r;
            a=(a-r)/10;
        }
        console.log('Mirror:'+mirror)
    }
seven()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function eight(){
    const a=prompt("Add First Number :");
    const b=prompt("Add Second Number :");
    console.log('A='+a)
    console.log('B='+b)

    let flag=false;

    let a1=a.length;
    let b1=b.length;
    for(let i=0;i<a1;i++){  
        for(let j=0;j<b1;j++){
            if(a[i]===b[j]){
            console.log("Yes");
            flag=true;
            break;    
            }
        }
        if(flag){
            break;
        }
    }
    if(!flag){
        console.log("No");
    }
  }
 eight();