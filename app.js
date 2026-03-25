function clearScreen(){
    document.getElementById("result").value = "";
}function setScreenValue (value){
    const r = document.getElementById("result");

    if (r.value ==="Enter an expression" || r.value === "Invalid expression" ) r.value += value;

}



function calculateresult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

if(expression === '' ) {
    resultElement.value = 'Entere An expression';
    return;
}



try {
    resultElement.value= eval(expression);
}

catch(e) {
    resultElement.value = 'Invalid Expression'
}


}



