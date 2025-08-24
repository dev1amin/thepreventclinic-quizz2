// Função para detectar sistema operacional móvel
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    if (/android/i.test(userAgent)) {
        return "android";
    }

    return "unknown";
}

// Função para lidar com inputs em dispositivos móveis
$(document).on('touchstart', 'textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]', function(e){
    var intv = 100;
    var $obj = $(this);

    if (getMobileOperatingSystem() == 'ios') {
        e.preventDefault();
        e.stopPropagation();

        $obj.css({'transform': 'TranslateY(-10000px)'}).focus();
        setTimeout(function(){$obj.css({'transform': 'none'});}, intv);
    }
    return true;
});

// Função para inicializar círculo de progresso (se existir)
function initCircleProgress() {
    if (typeof $.fn.circleProgress !== 'undefined' && $('.scorebar').length > 0) {
        setTimeout(()=>{
            $('.scorebar').circleProgress({
                value: 0.63,
                lineCap: 'round',
                size: 120,
                thickness: 16,
                fill: { gradient: ["#0f9b4a", "#14d665"] }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.scorelabel').html(Math.round(63 * progress) + '%');
            });
        }, 9000);
    }
}