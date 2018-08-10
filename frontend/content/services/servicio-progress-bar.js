angular.module('videoclub-manager.services')
    .service('ServicioProgressBar', function ($uibModal) {
        'use strict';
        this.mostrarProgressBar = function (configuracion) {
            $uibModal.open({
                animation: true,
                component: 'compProgressBar',
                backdrop: false,
                resolve: {
                    configuracion: function () {
                        return configuracion;
                    }
                }
            });
        };
    })