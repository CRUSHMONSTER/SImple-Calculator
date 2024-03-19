let calculation = localStorage.getItem('calculation')||'';
console.log(calculation);
function updatecalculator(calculate){
    calculation+=calculate;
    console.clear();
    console.log(calculation);
}