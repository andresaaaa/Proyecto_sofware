
document.getElementById('Finanzas').addEventListener("click", () =>{
    window.location.href = "../administrador/gestor_finanzas.html";

})

document.getElementById('Empleados').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_empleados.html"
})

document.getElementById('Asistencia').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_asistencias.html"
})

document.getElementById('Nomina').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_nomina.html"
})

document.getElementById('Reportes').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_reportes.html"
})

 function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }

        // Chart.js - Attendance Chart
        const ctx = document.getElementById('attendanceChart').getContext('2d');
        const attendanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Mes Actual',
                        data: [26.5, 27, 27.2, 28.5, 27.5, 26.2],
                        borderColor: '#3b82f6',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2
                    },
                    {
                        label: 'Mes Anterior',
                        data: [26.2, 27.5, 26.8, 27, 28, 27],
                        borderColor: '#1e3a8a',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 25,
                        max: 29,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });

        // Tab functionality
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Menu item click
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });