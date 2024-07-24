function Task1(){
    alert("Pls Check Console");
    console.log("Hello")
}

function Task2(){
    var firstnum = document.getElementById("firstnum").value;
    var secondnum = document.getElementById("secondnum").value;

    var total1 = parseInt(firstnum)+parseInt(secondnum);
    alert(total1);
}

function Task3(){
    var num3 = document.getElementById("sqroot").value;
    var sqrt = Math.sqrt(num3);
    alert(sqrt);
}

function Task4(){
    var num4 = document.getElementById("oddeven").value;
        if(num4 % 2 == 0) {
        alert("You entered a Even number")
        }
        else {
        alert("You entered an Odd number");
        }
}

function Task5(){
    var num5 = Math.random() * (10-1) + 1;
    alert(num5);
}

function Task6(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var val3 = document.getElementById("val3").value;
    let largest = Math.max(val1, val2, val3);
    alert("Largest Number: " + largest);
}

function Task7(){
    var name = document.getElementById("7name").value;
    for (let i = 0; i < 20; i++) {
        console.log(name);
    }
    alert("Pls Check Console")
}

function Task8(){
    var val11 = document.getElementById("val11").value;
    var val12 = document.getElementById("val12").value;
        if (val11 % 10===val12 % 10) {
            alert("Last digits are same");
        }
        else {
            alert("Last Digits are Different");
        }
}

function Task9(){
    var str1 = "Hello";
    var replaced_Str = str1.replace(/H/, 'A');
    alert("Replaced String: " + replaced_Str);
}

function Task10(){
    alert("Pls Check Console")
    let array1 = [7, 10, 18];
    let array2 = [45, 99, 31];
    let array = array1.concat(array2);
    console.log("Array: " + array);
}