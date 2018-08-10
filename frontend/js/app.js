angular.module('videoclub-manager', [
    'ui.router', // manejo de rutas
    'ngResource',
    'videoclub-manager.components',
    'videoclub-manager.directives',
    'videoclub-manager.services',
    'videoclub-manager.factories',
    'videoclub-manager.routes',
    'ui.bootstrap',
    'angularMoment'
])
    .config(function ($resourceProvider) {
        angular.extend($resourceProvider.defaults.actions, {
            update: {
                method: 'PUT'
            }
        });
    })
    .constant('URL_SERVIDOR', 'http://localhost:8080/');