let a, b;

function evaluateNumbers() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    // converting to number so then we can check if it is an integer
    a = Number(a);
    b = Number(b);

    if(((a >= 2 && b >= 2) && (a <= 10 && b <= 10)) && (Number.isInteger(a) && Number.isInteger(b))){
        doSomething();
    }
}


function doSomething(){
    console.log("a = " + a);
    console.log("b = " + b);
    console.log(typeof a);
    console.log(typeof b);
}