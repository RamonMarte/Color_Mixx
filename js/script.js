
// =================================
// MENÚ DE NAVEGACIÓN PARA MÓVILES
// =================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Cerrar el menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// =================================
// AÑO AUTOMÁTICO DEL FOOTER
// =================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();