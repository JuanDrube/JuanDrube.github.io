// definir el valor del ticket
const abono = 890;

// definir descuentos
const descEscritores = 0.80;
const descDocentesYEstudiantes = 0.50;
const descGuardiasDeSeguridad = 0.15;

// tomar los elementos

const categoria = document.getElementById('category');
const totalPagar = document.getElementById('totales');
const btnResumen = document.getElementById('resumen');


function calcularPago() {

    let total = abono;

    // condicionar por descuentos
    switch (categoria.value) {
        case "escritores":
            total = total - (total * descEscritores);
            break;
        case "docentesYEstudiantes":
            total = total - (total * descDocentesYEstudiantes);
            break;
        case "guardiasDeSeguridad":
            total = total - (total * descGuardiasDeSeguridad);
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

    console.log("hola");
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});