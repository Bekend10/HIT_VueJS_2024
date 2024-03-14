function hello(){
    console.log("Hello");
}

export function sum(){
    var x = 0;
    for (let i = 0 ; i <= 10 ; i++){
        x += i;
    }
    console.log(x);
}

export default hello;

