angular.module('videoclub-manager.routes')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'estadoNavBar',
            url: '/',
            component: 'compNavBar'
        });
    });