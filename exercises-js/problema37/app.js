function abrirVentanaPersonalizada() {
    let ancho = screen.width;
    let alto = screen.height / 2;

    window.open('https://open.spotify.com/intl-es', 'ventanaPersonalizada', 'width=' + ancho + ',height=' + alto);
}