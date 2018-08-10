angular.module('videoclub-manager.components')
    .component('compNavBar', {
        templateUrl: 'content/templates/nav-bar.html',
        controller: CtrlNavBar
    });

function CtrlNavBar($state, moment) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.copyright = new moment().format('YYYY');

    // Funciones
    ctrl.cerrarSesion = function () {
        $state.go('estadoIniciarSesion');
        console.log("Hasta la próxima.");
    }
}