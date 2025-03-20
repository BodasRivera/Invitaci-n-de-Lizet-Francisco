// Función que calcula el progreso del scroll
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (windowScroll / documentHeight) * 100;

    // Actualizar la altura de la barra de progreso
    document.querySelector('.progress-bar').style.height = scrollPercentage + "%";
}
