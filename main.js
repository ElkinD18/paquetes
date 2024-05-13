document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el clic en el botón de registro
    function handleRegistrationClick() {
        alert("¡Gracias por registrarte! Te enviaremos más información pronto.");
        // Aquí podrías agregar más funcionalidad, como enviar datos a un servidor
    }

    // Agregar un event listener al botón de registro
    var registerButton = document.querySelector("button");
    registerButton.addEventListener("click", handleRegistrationClick);
});
