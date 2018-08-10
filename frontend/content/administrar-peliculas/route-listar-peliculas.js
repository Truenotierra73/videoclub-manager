angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoListarPeliculas',
            url: 'administrar-peliculas/listar-peliculas',
            views: {
                navBar: 'compListarPeliculas'
            }
        });
    });