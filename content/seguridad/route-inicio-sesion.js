angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoIniciarSesion',
            url: '/inicio-sesion',
            component: 'compIniciarSesion'
        });
    });