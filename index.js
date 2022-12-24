function bmiCalculator(weight, height) {
    weight = document.getElementById("w").value;
    height = document.getElementById("h").value;
    var bmi = weight / Math.pow(height, 2);
        bmi = Math.round(bmi);
    document.getElementById("myBMI").innerHTML = bmi;
    console.log(bmi);
    // return Math.round(bmi);
}

// function newYear() {
//     var d = new Date();
//     var D = d.getFullYear();
//     // document.getElementById("y").innerHTML= d.getFullYear();
//     document.getElementById("y").innerHTML= D;
//     console.log(D);
// }
// newYear();
// document.getElementById("y").innerHTML= newYear();
// console.log(newYear());