'use strict';
angular.module('videoclub-manager.routes', [])
    .config(function ($urlRouterProvider) {
        // $urlRouterProvider.when('', '/inicio-sesion');
        $urlRouterProvider.otherwise('/inicio-sesion');
    });