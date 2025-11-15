class Empleado{

    constructor(id_empleados,nombre , email, password, direccion, edad, tarifa_salarial, rol, estado){

        this.id_empleados = id_empleados;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.edad = edad;
        this.tarifa_salarial = tarifa_salarial;
        this.rol = rol;
        this.estado = estado;
    }

}


function Validarcredenciales(){

    event.preventDefault();
    console.log('noc')

    const userInput = document.getElementById('username').value.trim();
    const passInput = document.getElementById('password').value.trim();

    // Pequeña validación de que no vayan vacíos
    if (!userInput || !passInput) {
        alert('Por favor ingresa usuario y contraseña');
        return;
    }

    fetch('php/index.php')
        .then(res => res.json())
        .then(data => {
            let encontrado = false;

            // Recorremos el array que devuelve PHP
            for (let i = 0; i < data.length; i++) {
                const emp = data[i];

                // Ajusta estos nombres a tus columnas reales
                if (emp.email === userInput && emp.password === passInput) {
                    encontrado = true;
                    break; // ya no hace falta seguir buscando
                }
            }

            if (encontrado) {
                alert('Inicio de sesión correcto');
                // window.location.href = 'dashboard.html';
            } else {
                alert('Email o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error en la petición:', error);
            alert('Hubo un problema al validar las credenciales');
            return false
        });

}

document.getElementById('button').addEventListener("click",() =>{
    console.log(Validarcredenciales())
    console.log('hola cred')

    if(Validarcredenciales()){
        window.location.href = "../administrador/dashboard_admin.html"
    }

});