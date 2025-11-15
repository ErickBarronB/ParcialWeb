$(document).ready(function() {

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const form = document.querySelector("form");

    function validateEmail(emailValue) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailValue);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (nombre.value === "" || email.value === "" || mensaje.value === "") {
            alert("Please fill in all fields");
            return;
        }

        if (!validateEmail(email.value)) {
            alert("Please enter a valid email address");
            return;
        }

        alert("Message sent");
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
    });

    form.addEventListener("reset", function(event) {
        event.preventDefault();
        form.reset();
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
    });

});
