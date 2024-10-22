//1. Class defination is one time process
class MyClass{ //PascalCase
    //1.

    //2.

    //3.Function/Method
    add(n1,n2){ // n1,n2 are formal args

        //Every function may return somethig
        console.log(n1+n2) ;
    }
    sub(n1,n2){ // n1,n2 are formal args

        //Every function may return somethig
        console.log(n1-n2) ;
    }
    
}

//2. Class Instantiation is many time process
// let co = new ClassName();
let co1 = new MyClass();
let co2 = new MyClass();
let co3 = new MyClass();
let co4 = new MyClass();
let co5 = new MyClass();

co1.add(2,3);
co1.sub(20,3);