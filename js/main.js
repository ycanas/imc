function calculateImc(){
    result.style.display = "none";

    if (height.checkValidity() && weight.checkValidity()) { valid.classList.remove("was-validated"); }
    else { valid.classList.add("was-validated"); return; }
        
    let imc = weight.valueAsNumber / Math.pow(height.valueAsNumber, 2);
    
    let output = "Resultado 👉 " + imc.toFixed(1);
    let alert  = "container alert";

    if (imc <= 18.5) {
        output += " → Peso bajo 😟.";
        alert  += " alert-info";
    }

    else if (imc <= 25) {
        output += " → Peso normal 😎.";
        alert  += " alert-success";
    }

    else if (imc <= 30) {
        output += " → Sobrepeso 😦";
        alert  += " alert-warning";
    }

    else if (imc <= 35) {
        output += " → Obesidad leve 😧.";
        alert  += " alert-danger";
    }

    else if (imc <= 40) {
        output += " → Obesidad media 😨.";
        alert  += " alert-danger";
    }

    else {
        output += " → Obesidad mórbida 😱.";
        alert  += " alert-danger";
    }

    if (!isNaN(imc)) {
        result.style.display = "";
        result.className = alert;
        result.innerHTML = `${output}`;

        height.value = "";
        weight.value = "";
    }
}

const button = document.getElementById('button');
const valid  = document.getElementById('valid');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');

button.addEventListener("click", calculateImc, false);
