function verificarCookies() {
    if (navigator.cookieEnabled) {
        alert('Las cookies están activas en su navegador');
    } else {
        alert('Las cookies NO están activas en su navegador');
    }
}