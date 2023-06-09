function calculateImc(){
    const valid  = document.getElementById('valid');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
    const result = document.getElementById('result');

    (!height.checkValidity() || !weight.checkValidity()) ? valid.classList.add("was-validated") : valid.classList.remove("was-validated");
    
    let imc = weight.valueAsNumber / Math.pow(height.valueAsNumber, 2);
    
    let output = "Resultado 👉 " + imc.toFixed(1);
    let alert  = "container w-75 alert";

    if (imc <= 18.5) {
        output += ", peso bajo 😟.";
        alert  += " alert-info";
    }

    else if (imc <= 25) {
        output += ", peso normal 😎.";
        alert  += " alert-success";
    }

    else if (imc <= 30) {
        output += ", sobrepeso 😦";
        alert  += " alert-warning";
    }

    else if (imc <= 35) {
        output += ", obesidad leve 😧.";
        alert  += " alert-danger";
    }

    else if (imc <= 40) {
        output += ", obesidad media 😨.";
        alert  += " alert-danger";
    }

    else {
        output += ", obesidad mórbida 😱.";
        alert  += " alert-danger";
    }

    if (!isNaN(imc)) {
        result.style.display = "";
        result.className = alert;
        result.innerHTML = `${output}`;

        height.value = "";
        weight.value = "";
    }

    if (isNaN(imc)) {
        result.style.display = "none";
    }
}

const button = document.getElementById('button');
button.addEventListener("click", calculateImc, false);
