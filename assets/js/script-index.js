document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = 'Volte!';
    } else {
        document.title = 'Inicio';
    }
});