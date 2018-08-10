angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar.estadoHome',
            url: 'home',
            views: {
                navBar: 'compHome'
            }
        });
    });