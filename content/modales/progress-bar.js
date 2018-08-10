angular.module('videoclub-manager.components')
    .component('compProgressBar', {
        templateUrl: 'content/modales/progress-bar.html',
        bindings: {
            resolve: '<',
            close: '&'
        },
        controller: CtrlProgressBar,
        controllerAs: 'ctrl',
        bindToController: true
    });

function CtrlProgressBar($state, ServicioMensajes) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // Variables para el Progress Bar
    ctrl.titulo = null; // Título del Progress Bar
    ctrl.tipo = null; // Puede ser: success|info|danger|warning
    ctrl.callback = null;
    ctrl.params = null;

    // Método para la inicialización del Progress Bar
    ctrl.$onInit = function () {
        ctrl.titulo = ctrl.resolve.configuracion.titulo;
        ctrl.tipo = ctrl.resolve.configuracion.tipo;
        ctrl.callback = ctrl.resolve.configuracion.callback;
        ctrl.params = ctrl.resolve.configuracion.params;
        ctrl.tipoCallback();
    };

    ctrl.estadoListarPeliculas = function () {
        $state.go('estadoNavBar.estadoListarPeliculas');
    };

    ctrl.estadoHome = function () {
        $state.go('estadoNavBar.estadoHome');
    };

    ctrl.tipoCallback = function () {
        setTimeout(function () {
            if (ctrl.params[1] === 'actualizar peli') {
                ctrl.callback.update(ctrl.params[0], function (res) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Éxito', mensaje: 'La película se modificó correctamente', callback: ctrl.estadoListarPeliculas, params: null});
                }, function (err) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'La película no se pudo modificar correctamente', callback: null, params: null});
                });
            }
            if (ctrl.params[1] === 'registrar peli') {
                ctrl.callback.save(ctrl.params[0], function (res) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Éxito', mensaje: 'La película se registró correctamente', callback: ctrl.estadoListarPeliculas, params: null})
                }, function (err) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'La película no se pudo registrar correctamente', callback: null, params: null});
                });
            }
            if (ctrl.params[1] === 'registrar lenguaje') {
                ctrl.callback.save(ctrl.params[0], function (res) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Éxito', mensaje: 'El lenguaje se registró correctamente', callback: ctrl.estadoHome, params: null})
                }, function (err) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'El lenguaje no se pudo registrar correctamente', callback: null, params: null});
                });
            }
            if (ctrl.params[1] === 'actualizar lenguaje') {
                ctrl.callback.update(ctrl.params[0], function (res) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Éxito', mensaje: 'El lenguaje se modificó correctamente', callback: ctrl.estadoHome, params: null})
                }, function (err) {
                    ctrl.close();
                    ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'El lenguaje no se pudo modificar correctamente', callback: null, params: null});
                });
            }
        }, 3000);
    };
}