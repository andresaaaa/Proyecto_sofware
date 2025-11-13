// --- Navegación ---
document.getElementById('Dashboard').addEventListener("click", () => {
    window.location.href = "../administrador/dashboard_admin.html";
});

document.getElementById('Empleados').addEventListener("click", () => {
    window.location.href = "../administrador/gestor_empleados.html";
});

document.getElementById('Asistencia').addEventListener("click", () => {
    window.location.href = "../administrador/gestor_asistencias.html";
});

document.getElementById('Nomina').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_nomina.html"
});

document.getElementById('Reportes').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_reportes.html"
})

// --- Datos de ejemplo (puedes conectar luego con una BD o formulario) ---
const registros = [
    { fecha: "25/03/2025", descripcion: "Venta de reportes", categoria: "Ingresos", monto: "2,428,990", estado: "Pagado" },
    { fecha: "25/12/2024", descripcion: "Comprar insumos", categoria: "Gastos", monto: "1,428,990", estado: "Pagado" },
    { fecha: "24/06/2025", descripcion: "Venta de equipos", categoria: "Ingresos", monto: "1,428,990", estado: "Pagado" },
    { fecha: "19/02/2025", descripcion: "Remodelaciones", categoria: "Gastos", monto: "2,428,990", estado: "Pagado" },
    { fecha: "09/08/2025", descripcion: "Venta de datos", categoria: "Ingresos", monto: "1,428,990", estado: "Pagado" },
    { fecha: "07/12/2024", descripcion: "Pago de servidores", categoria: "Gastos", monto: "1,428,990", estado: "Pagado" },
    { fecha: "02/05/2023", descripcion: "Venta de software", categoria: "Ingresos", monto: "2,428,990", estado: "Pagado" },
    { fecha: "05/09/2025", descripcion: "Elementos sanitarios", categoria: "Gastos", monto: "1,428,990", estado: "Pagado" },
];

// --- Función para cargar los datos en la tabla ---
function cargarTabla() {
    const tbody = document.getElementById("tabla-finanzas");
    tbody.innerHTML = "";

    registros.forEach(reg => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${reg.fecha}</td>
            <td>${reg.descripcion}</td>
            <td>
                <span class="category-tag ${reg.categoria === "Ingresos" ? "income" : "expense"}">
                    ${reg.categoria}
                </span>
            </td>
            <td>${reg.monto}</td>
            <td>
                <span class="status-badge ${reg.estado.toLowerCase() === "pagado" ? "paid" : "pending"}">
                    ● ${reg.estado.toLowerCase()}
                </span>
            </td>
            <td class="actions">
                <button class="btn-edit">✏️ Editar</button>
                <button class="btn-delete">🗑️ Eliminar</button>
            </td>
        `;

        tbody.appendChild(fila);
    });
}

// --- Ejecutar al cargar ---
document.addEventListener("DOMContentLoaded", cargarTabla);
