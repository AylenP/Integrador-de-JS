//TICKETS FUNCIONALIDAD

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            else {
                event.preventDefault()
                const numero = document.querySelector('totalValor').value;
                const total = document.querySelector('#total');
                total.innerHTML = numero;
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

//valor general
const valorTicket = 200;
//descuentos
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//Obtencion de ID
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const botonCalcular = document.getElementById('botonCalcular');
const Borrar = document.getElementById('Borrar');
const total = document.getElementById('total');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');


//Funcion total a pagar
function totalapagar() {
    // la variable validacion es un extra, que evita que si nombre o cualquiera esta vacio, no se haga la cuenta del total a pagar
    let validacion = cantidad.value > 0 && nombre.value && apellido.value && correo.value;
    let totalValor = (cantidad.value) * valorTicket;
    
    if (categoria.value == 1 && validacion) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
        total.innerHTML = `Total a Pagar: $${totalValor}`;
    }
    else if (categoria.value == 2 && validacion) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
        total.innerHTML = `Total a Pagar: $${totalValor}`;
    }
    else if (categoria.value == 3 && validacion) {
        totalValor = totalValor - (totalValor * descuentoJunior);
        total.innerHTML = `Total a Pagar: $${totalValor}`;
    } else if (categoria.value == 4 && validacion) {
        totalValor = totalValor;
        total.innerHTML = `Total a Pagar: $${totalValor}`;
    }
    else if (cantidad.value <= 0) {
        alert("Coloque una cantidad");
    }
}

//boton para calcular el descuento segun categoria
botonCalcular.addEventListener('click', totalapagar);
//boton borrar
Borrar.addEventListener('click', () => {
    total.innerHTML = `Total a Pagar: $`
});