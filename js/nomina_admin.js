

document.getElementById('Finanzas').addEventListener("click", () =>{
    window.location.href = "../administrador/gestor_finanzas.html";
})

document.getElementById('Empleados').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_empleados.html"
})

document.getElementById('Asistencia').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_asistencias.html"
})

document.getElementById('Dashboard').addEventListener("click", () => {
    window.location.href = "../administrador/dashboard_admin.html";
});

document.getElementById('Reportes').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_reportes.html"
})


// Employee data
const employees = [
    { name: 'Emil Sanchez', cedula: '1.064.868.724', hours: 44, salary: '2,428,990', avatar: 'avatar-purple', initial: 'E' },
    { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', hours: 44, salary: '1,428,990', avatar: 'avatar-gray', initial: 'F' },
    { name: 'Carlos Sanchez', cedula: '1.064.868.724', hours: 44, salary: '1,428,990', avatar: 'avatar-purple', initial: 'C' },
    { name: 'Emil Sanchez', cedula: '1.064.868.724', hours: 44, salary: '2,428,990', avatar: 'avatar-gray', initial: 'E' },
    { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', hours: 44, salary: '1,428,990', avatar: 'avatar-purple', initial: 'F' },
    { name: 'Carlos Sanchez', cedula: '1.064.868.724', hours: 44, salary: '1,428,990', avatar: 'avatar-yellow', initial: 'C' },
    { name: 'Emil Sanchez', cedula: '1.064.868.724', hours: 44, salary: '2,428,990', avatar: 'avatar-purple', initial: 'E' },
    { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', hours: 40, salary: '1,428,990', avatar: 'avatar-pink', initial: 'F' },
    { name: 'Carlos Sanchez', cedula: '1.064.868.724', hours: 44, salary: '1,428,990', avatar: 'avatar-purple', initial: 'C' }
];

// Render table
function renderTable(data) {
    const tbody = document.getElementById('employeeTable');
    tbody.innerHTML = data.map(emp => `
        <tr>
            <td>
                <div class="employee-cell">
                    <div class="avatar ${emp.avatar}">${emp.initial}</div>
                    <span>${emp.name}</span>
                </div>
            </td>
            <td>${emp.cedula}</td>
            <td>${emp.hours}</td>
            <td>$ ${emp.salary}</td>
            <td><div class="status-indicator"></div></td>
            <td>
                <div class="actions">
                    <button class="btn btn-edit">✏️ Editar</button>
                    <button class="btn btn-nomina">⬇️ Nómina</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm) || 
        emp.cedula.includes(searchTerm)
    );
    renderTable(filtered);
});

// Initial render
renderTable(employees);

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});