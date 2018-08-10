angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoModificarLenguaje',
            url: 'administrar-lenguajes/modificar-lenguaje',
            params: {
                lenguaje: null
            },
            views: {
                navBar: 'compModificarLenguaje'
            }
        });
    });