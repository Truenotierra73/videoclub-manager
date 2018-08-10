angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoListarAlquileres',
            url: 'gestion-alquileres/listar-alquileres',
            views: {
                navBar: 'compListarAlquileres'
            }
        });
    });