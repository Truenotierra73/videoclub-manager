angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoRegistrarPelicula',
            url: 'admiistrar-peliculas/registrar-pelicula',
            views: {
                navBar: 'compRegistrarPelicula'
            }
        });
    });