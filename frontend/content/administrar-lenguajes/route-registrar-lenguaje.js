angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoRegistrarLenguaje',
            url: 'administrar-lenguajes/registrar-lenguaje',
            views: {
                navBar: 'compRegistrarLenguaje'
            }
        });
    });