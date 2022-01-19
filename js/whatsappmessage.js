function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#enviar');
const urlDesktop = 'https://wa.me/';
const urlMobile = 'whatsapp://';
const telefono = '51910697802';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombreContacto').value
        let apellidos = document.querySelector('#apellidoContacto').value
        let dni = document.querySelector('#dniContacto').value
        let numeroPares = document.querySelector('#numeroDePares').value
        let descripcion = document.querySelector('#descripcionMensaje').value
        let mensaje = 'send?phone=' + telefono + '&text=¿Cual es tu nombre?%0A' + nombre + '%0A¿Cuáles son tus apellidos?%0A' + apellidos + '%0A¿Cuál es tu dni?%0A' + dni + '%0A¿Número de Pares?%0A' + numeroPares + '%0A¿Descripción?%0A' + descripcion + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
            formulario.reset()
        }else{
            window.open(urlDesktop + mensaje, '_blank')
            formulario.reset();
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});