angular.module('videoclub-manager.components')
    .component('compIniciarSesion', {
        templateUrl: 'content/seguridad/inicio-sesion.html',
        controller: CtrlIniciarSesion
    });

function CtrlIniciarSesion($state, ServicioMensajes) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.username = null;
    ctrl.password = null;

    // FUNCIONES
    // Función Iniciar Sesión.
    ctrl.iniciarSesion = function () {
        if (ctrl.username === 'admin' && ctrl.password === 'admin') {
            console.log("Bienvenido a VideoClub Manager.");
            $state.go('estadoNavBar.estadoHome');
        } else {
            console.log("Error al ingresar al sistema.");
            ServicioMensajes.mostrarMensaje({titulo: 'Fallo Inicio Sesión', mensaje: 'Error, usuario o contraseña incorrectos', esConfirmacion: false, callback: null, params: null});
        }
    }
}