
// =================================
// FORMULARIO DE CONTACTO COLOR MIXX
// =================================

// Reemplaza este valor cuando tengas tu correo oficial.
const SUPPORT_EMAIL = "REEMPLAZA_CON_TU_CORREO";

// Elementos del formulario.
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
const messageInput = document.getElementById("message");
const characterCounter = document.getElementById("characterCounter");


// =================================
// CONTADOR DE CARACTERES
// =================================

if (messageInput && characterCounter) {

    messageInput.addEventListener("input", () => {

        const total = messageInput.value.length;

        characterCounter.textContent = `${total} / 3000`;

    });

}


// =================================
// MOSTRAR MENSAJES
// =================================

function showFeedback(message, type) {

    feedback.textContent = message;

    feedback.className = `form-feedback visible ${type}`;

}


// =================================
// PREPARAR EL CORREO
// =================================

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        // Comprobar que existe un correo configurado.
        if (
            !SUPPORT_EMAIL ||
            SUPPORT_EMAIL === "managexrmr@gmail.com"
        ) {

            showFeedback(
                "El formulario está preparado, pero todavía falta configurar el correo oficial de soporte en contact.js.",
                "warning"
            );

            return;

        }

        const formData = new FormData(contactForm);

        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const topic = formData.get("topic");
        const message = formData.get("message").trim();

        if (!name || !email || !topic || !message) {

            showFeedback(
                "Completa todos los campos obligatorios.",
                "warning"
            );

            return;

        }

        // Preparar asunto y contenido del correo.
        const subject = encodeURIComponent(
            `Color Mixx - ${topic}`
        );

        const body = encodeURIComponent(
            `Nombre: ${name}\n` +
            `Correo del usuario: ${email}\n` +
            `Motivo: ${topic}\n\n` +
            `Mensaje:\n${message}`
        );

        const mailtoLink =
            `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;

        showFeedback(
            "Se abrirá tu aplicación de correo para que revises y envíes el mensaje.",
            "success"
        );

        // Abrir el programa de correo del usuario.
        window.location.href = mailtoLink;

    });

}
