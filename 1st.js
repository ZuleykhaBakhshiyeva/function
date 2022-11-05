// Hometask 1st

// 1.User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division

const a=+prompt('please enter the value a');
const b=+prompt('please enter the value b');

function division(){  
    console.log(a/b);
    console.log(a%b)
}
division()

//2.The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
let a1=+prompt('please enter the value a');
let b1=+prompt('please enter the value b');

function variable(){
    const c1=a1;
    console.log('a='+(a1=b1));
    console.log('b='+(b1=c1));
}
variable()

//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.

const a2=+prompt('please enter the value a');
const b2=+prompt('please enter the value b');
const c2=+prompt('please enter the value c');

function equation(){
    if(a2||b2||c2==0){
        console.log('this is wrong');
    }else{
        console.log(a2);
        console.log(b2);
        console.log(c2);
    }

const result=(c2-b2)/a2;
console.log(result)
}
equation()

//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.

let a3=+prompt('please enter the value a');
let b3=+prompt('please enter the value b');

function result(){
    if(a3>b3){
        console.log(a3+b3);
    }else{
        if(a3<b3){
            console.log(a3-b3);
        }else{
            console.log(a3*b3);
        }
    }
}
result()

//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

//ax^2+bx+c=0

let a4=+prompt('please enter the value a');
let b4=+prompt('please enter the value b');
let c4=+prompt('please enter the value c');

function discriminant(){
    if(a4==0){
        console.log('x='+(-c4/b4));
    }else{
        const D=b4*b4-4*a4*c4;
        console.log('Discriminat='+D)
        if(D==0){
        const x=(-b4)/(2*a4)
        console.log('x='+x);
        }else{
            if(D>0){
            console.log('x='+(-b4 + Math.sqrt(D)) / (2 * a4));
            console.log('x='+(-b4 - Math.sqrt(D)) / (2 * a4));
            }else{
            console.log('this is wrong')
            }
        }
    }
}
discriminant()

//6/The user enters a two-digit number.Print the literal representation of this number to the console.For exampe,typing '25' will display 'twenty five' in the console, and '13' will display 'thirteen'.

const a5=+prompt('Enter a number');
console.log('a='+a5);

let result1;
let result2;


let r=a5%10;
let n=a5-r;

function representation(){
    if(a5==10){
        result1='ten'
        result2=''
    }else if(a5==11){
        result1='eleven'
        result2=''
    }else if(a5==12){
        result1='tewelve'
        result2=''
    }else if(a5==13){
        result1='thirteen'
        result2=''
    }else if(a5==14){
        result1='fourteen'
        result2=''
    }else if(a5==15){
        result1='fifteen'
        result2=''
    }else if(a5==16){
        result1='sixteen'
        result2=''
    }else if(a5==17){
        result1='seventeen'
        result2=''
    }else if(a5==18){
        result1='eighteen'
        result2=''
    }else if(a5==19){
        result1='ninteen'
        result2=''
    }else{if(r==1){
        result2='one'
        }else if(r==2){
            result2='two'
        }else if(r==3){
            result2='three'
        }else if(r==4){
            result2='four'
        }else if(r==5){
            result2='five'
        }else if(r==6){
            result2='six'
        }else if(r==7){
            result2='seven'
        }else if(r==8){
            result2='eight'
        }else if(r==9){
            result2='nine'
        }
    else{if(n==20){
            result1='twenty'
        }else if(n==30){
            result1='thirty'
        }else if(n==40){
            result1='fourty'
        }else if(n==50){
            result1='fifty'
        }else if(n==60){
            result1='sixty'
        }else if(n==70){
            result1='seventy'
        }else if(n==80){
            result1='eighty'
        }else if(n==90){
            result1='ninety'
        }
    }
    }
    console.log(result1,result2)
}
representation()

//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)


let x=+prompt('please enter the value x');
let y=+prompt('please enter the value y');
let r1=+prompt('please enter the value r');

function circle(){

    const R=x**2+y**2
    console.log('R='+R)

    if(r1**2==R){
        console.log('on the circle')
    }else if(r1**2<R){
        console.log('inside')
    }else{
        console.log('outside')
    }
}
circle()