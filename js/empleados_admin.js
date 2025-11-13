
document.getElementById('Dashboard').addEventListener("click",() => {
    window.location.href = "../administrador/dashboard_admin.html"
});

document.getElementById('Finanzas').addEventListener("click", () =>{
    window.location.href = "../administrador/gestor_finanzas.html";

});

document.getElementById('Asistencia').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_asistencias.html"
});

document.getElementById('Nomina').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_nomina.html"
});

document.getElementById('Reportes').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_reportes.html"
})

  // Sample employee data
        const employees = [
            { name: 'Emil Sanchez', cedula: '1.064.868.724', departamento: 'Administrador', salario: '2,428,990', avatar: 'purple' },
            { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'gray' },
            { name: 'Carlos Sanchez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'purple' },
            { name: 'Emil Sanchez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '2,428,990', avatar: 'gray' },
            { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'purple' },
            { name: 'Carlos Sanchez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'yellow' },
            { name: 'Emil Sanchez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '2,428,990', avatar: 'purple' },
            { name: 'Fernanda Rodriguez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'pink' },
            { name: 'Carlos Sanchez', cedula: '1.064.868.724', departamento: 'Ventas', salario: '1,428,990', avatar: 'purple' }
        ];

        // Load employees into table
        function loadEmployees() {
            const tbody = document.getElementById('employeeTableBody');
            tbody.innerHTML = '';

            employees.forEach((emp, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="employee-info">
                            <div class="employee-avatar avatar-${emp.avatar}">
                                <i class="fas fa-user"></i>
                            </div>
                            <span>${emp.name}</span>
                        </div>
                    </td>
                    <td>${emp.cedula}</td>
                    <td>${emp.departamento}</td>
                    <td>${emp.salario}</td>
                    <td>
                        <div class="status-indicator"></div>
                    </td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-action btn-view" onclick="verEmpleado(${index})">
                                <i class="fas fa-cog"></i> Ver
                            </button>
                            <button class="btn-action btn-edit" onclick="editarEmpleado(${index})">
                                <i class="fas fa-edit"></i> Editar
                            </button>
                            <button class="btn-action btn-delete" onclick="eliminarEmpleado(${index})">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        // Search functionality
        function buscarEmpleado() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const table = document.getElementById('employeeTable');
            const rows = table.getElementsByTagName('tr');

            for (let i = 1; i < rows.length; i++) {
                const nameCell = rows[i].getElementsByTagName('td')[0];
                if (nameCell) {
                    const textValue = nameCell.textContent || nameCell.innerText;
                    if (textValue.toLowerCase().indexOf(filter) > -1) {
                        rows[i].style.display = '';
                    } else {
                        rows[i].style.display = 'none';
                    }
                }
            }
        }

        // Action functions
        function agregarEmpleado() {
            alert('Función: Agregar nuevo empleado');
        }

        function verEmpleado(index) {
            alert(`Ver detalles de: ${employees[index].name}`);
        }

        function editarEmpleado(index) {
            alert(`Editar empleado: ${employees[index].name}`);
        }

        function eliminarEmpleado(index) {
            if (confirm(`¿Está seguro de eliminar a ${employees[index].name}?`)) {
                employees.splice(index, 1);
                loadEmployees();
            }
        }

        // Initialize
        loadEmployees();
