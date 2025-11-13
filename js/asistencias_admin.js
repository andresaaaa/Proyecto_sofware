

document.getElementById('Dashboard').addEventListener("click",() => {
    window.location.href = "../administrador/dashboard_admin.html"
})

document.getElementById('Finanzas').addEventListener("click", () =>{
    window.location.href = "../administrador/gestor_finanzas.html";

})

document.getElementById('Empleados').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_empleados.html"
})

document.getElementById('Nomina').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_nomina.html"
})

document.getElementById('Reportes').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_reportes.html"
})


// Datos de ejemplo
const attendanceData = [
    { name: 'Fernanda Rodriguez', date: '07 - 10 - 2025', time: '07:57:54 Am', avatar: 'avatar-purple', icon: '👤', alert: false },
    { name: 'Emil Sanchez', date: '07 - 10 - 2025', time: '07:54:28 Am', avatar: 'avatar-black', icon: '👤', alert: false },
    { name: 'Carlos Sanchez', date: '07 - 10 - 2025', time: '07:50:47 Am', avatar: 'avatar-purple', icon: '👤', alert: false },
    { name: 'Emil Sanchez', date: '06 - 10 - 2025', time: '06:20:47 Pm', avatar: 'avatar-black', icon: '👤', alert: false },
    { name: 'Fernanda Rodriguez', date: '06 - 10 - 2025', time: '06:05:47 Pm', avatar: 'avatar-purple', icon: '👤', alert: false },
    { name: 'Carlos Sanchez', date: '06 - 10 - 2025', time: '06:02:47 Pm', avatar: 'avatar-yellow', icon: '😟', alert: false },
    { name: 'Emil Sanchez', date: '06 - 10 - 2025', time: '02:09:54 Pm', avatar: 'avatar-blue', icon: '👤', alert: true },
    { name: 'Fernanda Rodriguez', date: '06 - 10 - 2025', time: '01:58:29 Pm', avatar: 'avatar-pink', icon: '👤', alert: false },
    { name: 'Carlos Sanchez', date: '06 - 10 - 2025', time: '01:55:21 Pm', avatar: 'avatar-purple', icon: '👤', alert: false }
];

// Renderizar tabla
function renderTable() {
    const tbody = document.getElementById('attendanceTableBody');
    tbody.innerHTML = '';

    attendanceData.forEach(record => {
        const row = document.createElement('tr');
        if (record.alert) row.classList.add('alert-row');

        row.innerHTML = `
            <td>
                <div class="employee-cell">
                    <div class="employee-avatar ${record.avatar}">${record.icon}</div>
                    <span>${record.name}</span>
                </div>
            </td>
            <td>${record.date}</td>
            <td>${record.time}</td>
            <td><div class="status-indicator"></div></td>
            <td>
                <div class="actions-cell">
                    <button class="btn-horas">⚙️ Horas</button>
                    <button class="btn-info ${record.alert ? 'alert' : ''}">ⓘ</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Buscar empleados
document.addEventListener('DOMContentLoaded', () => {
    renderTable();

    document.querySelector('.search-input').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#attendanceTableBody tr');

        rows.forEach(row => {
            const name = row.querySelector('.employee-cell span').textContent.toLowerCase();
            row.style.display = name.includes(searchTerm) ? '' : 'none';
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-horas')) alert('Ver horas trabajadas');
        if (e.target.closest('.btn-info')) alert('Ver información detallada');
    });
});
