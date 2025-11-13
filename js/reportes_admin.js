
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

document.getElementById('Nomina').addEventListener("click",() => {
    window.location.href = "../administrador/gestor_nomina.html"
})

// Search functionality
const searchInput = document.getElementById("searchInput")
const reportCards = document.querySelectorAll(".report-card")

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()

  reportCards.forEach((card) => {
    const employeeName = card.getAttribute("data-employee").toLowerCase()

    if (employeeName.includes(searchTerm)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
})

// Export button handlers
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("[v0] Exportar Datos clicked")
    alert("Exportando datos del empleado...")
  })
})

document.querySelectorAll(".btn-secondary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const format = e.target.textContent
    console.log(`[v0] Export ${format} clicked`)
    alert(`Exportando en formato ${format}...`)
  })
})

document.querySelectorAll(".export-btn.small").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const format = e.target.textContent
    console.log(`[v0] Export ${format} clicked`)
    alert(`Generando reporte en formato ${format}...`)
  })
})

// Date picker buttons
document.querySelectorAll(".date-picker-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("[v0] Date picker clicked")
    alert("Selector de fecha (aquí se integraría un date picker)")
  })
})

// Menu toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
  console.log("[v0] Menu toggle clicked")
  // Toggle sidebar collapsed state
})

// Navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("[v0] Navigation item clicked:", e.target.textContent)

    // Remove active class from all items
    document.querySelectorAll(".nav-item").forEach((nav) => {
      nav.classList.remove("active")
    })

    // Add active class to clicked item
    item.classList.add("active")
  })
})
