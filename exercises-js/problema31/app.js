function validarClave() {
    let clave = document.getElementById('clave').value;

    if (clave.length < 7 || clave.length > 20) {
        alert('Error: La clave debe tener al menos 7 caracteres');
        setTimeout(() => {
            document.getElementById('clave').focus();
        }, 0);
    }
}