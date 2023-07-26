// Declarando constantes
const formDivisas = document.getElementById("formDivisas");
const dollares =  document.getElementById("dollar")
const cantidadPesos = document.getElementById("cantidad_pesos");
const cantidadLibra = document.getElementById("cantidad_libras");
const cantidadEuro = document.getElementById("cantidad_euro");
const error  = document.getElementById("error");

// Funcion para calcular las divisas correspondientes
function calcularDivisa(event){
    
    event.preventDefault();

    const valorDollares = parseInt(dollares.value);

    // Validar los campos
if(isNaN(valorDollares)){
    error.innerText = "Por favor ingresa un numero";
    dollares.focus();
    return;
}
else if (valorDollares <= 0) {
    error.innerText = "Por favor ingresa un numero mayor a 0 ";
    dollares.focus();
    return;
  }
//Eliminar texto si no hay error

  error.innerText = ""; 

    let pesoMex = valorDollares * 16.9438;
    cantidadPesos.innerText = `$ ${pesoMex.toFixed(2)}`;

    let libra  =valorDollares* .7762;
    cantidadLibra.innerText = `£ ${libra.toFixed(2)}`;

    let euro = valorDollares * .9052;
    cantidadEuro.innerText = `€ ${euro.toFixed(2)}`;

}
formDivisas.addEventListener('submit', calcularDivisa);

//Si hay forma de recibir retroalimentacion , lo agradeceria