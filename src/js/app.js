document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    mostrarServicios();
}

async function mostrarServicios() {
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();

        //console.log(db);
        const { servicios } = db; //Destructuring

        servicios.forEach(servicio => {
            const { id, nombre, precio } = servicio;

            //DOM SCRIPTING
            //Gererar Nombre de Servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;

            nombreServicio.classList.add('nombre-servicio')

            console.log(nombreServicio);

            // Generar Precio Servicio

            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$ ${precio}`;

            precioServicio.classList.add('precio-servicio')

            console.log(precioServicio);

        });

    } catch (error) {
        console.log(error)
    }
}