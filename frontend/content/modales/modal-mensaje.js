angular.module('videoclub-manager.components')
    .component('compModalMensaje', {
        templateUrl: 'content/modales/modal-mensaje.html',
        bindings: {
            resolve: '<',
            close: '&'
        },
        controller: CtrlModalMensaje,
        controllerAs: 'ctrl',
        bindToController: true
    });

function CtrlModalMensaje() {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // Variables para el modal mensaje
    ctrl.titulo = null;
    ctrl.mensaje = null;
    ctrl.btnAceptar = 'Aceptar';
    ctrl.btnCancelar = 'Cancelar';
    ctrl.esConfirmacion = false;
    ctrl.callback = null;
    ctrl.params = null; // Parámtetros para la función de callback

    // Método para la inicialización del modal
    ctrl.$onInit = function () {
        ctrl.titulo = ctrl.resolve.configuracion.titulo;
        ctrl.mensaje = ctrl.resolve.configuracion.mensaje;
        ctrl.esConfirmacion = ctrl.resolve.configuracion.esConfirmacion;
        ctrl.callback = ctrl.resolve.configuracion.callback;
        ctrl.params = ctrl.resolve.configuracion.params;
        if (ctrl.resolve.configuracion.btnAceptar !== null && ctrl.resolve.configuracion.btnAceptar !== undefined) {
            ctrl.btnAceptar = ctrl.resolve.configuracion.btnAceptar;
        }
        if (ctrl.resolve.configuracion.btnCancelar !== null && ctrl.resolve.configuracion.btnCancelar !== undefined) {
            ctrl.btnCancelar = ctrl.resolve.configuracion.btnCancelar;
        }
    };

    // Método que se encarga de cerrar el modal.
    ctrl.ok = function () {
        if (ctrl.callback !== null) {
            if (ctrl.params === null) {
                ctrl.callback();
            } else {
                ctrl.callback(ctrl.params);
            }
        }
        ctrl.close();
    };
    
    // Método que se encarga de cerrar el modal cuando el usuario presiona el botón cancelar.
    ctrl.cancel = function () {
        ctrl.close();
    };
}