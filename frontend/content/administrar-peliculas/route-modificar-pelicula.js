angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoModificarPelicula',
            url: 'administrar-peliculas/modificar-pelicula',
            params: {
                pelicula: null
            },
            views: {
                navBar: 'compModificarPelicula'
            }
        });
    });