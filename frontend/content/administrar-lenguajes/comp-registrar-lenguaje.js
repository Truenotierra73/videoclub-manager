angular.module('videoclub-manager.components')
    .component('compRegistrarLenguaje', {
        templateUrl: 'content/administrar-lenguajes/registrar-lenguaje.html',
        controller: CtrlRegistrarLenguaje
    });

function CtrlRegistrarLenguaje($state, moment, Lenguajes, ServicioProgressBar, ServicioMensajes) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.lenguaje = {
        nombre: null,
        ultimaActualizacion: null
    };
    ctrl.ultimaActualizacionSelec = new Date(moment().format('L')); // Declaro una nueva fecha y la convierto al formato 'DD/MM/YYYY'

    // FUNCIONES
    ctrl.seleccionarUltimaActualizacion = function (fecha) {
        ctrl.ultimaActualizacionSelec = fecha;
    };

    // Función guardar
    ctrl.guardar = function () {
        ctrl.lenguaje.ultimaActualizacion = moment(ctrl.ultimaActualizacionSelec).format();
        if (ctrl.lenguaje.nombre) {
            ServicioProgressBar.mostrarProgressBar({titulo: 'Cargando...', tipo: 'success', callback: Lenguajes, params: [ctrl.lenguaje, 'registrar lenguaje']});
        } else {
            ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'Por favor, complete los campos requeridos', callback: null, params: null});
        }
    };

    // Función cancelar
    ctrl.cancelar = function () {
        $state.go('estadoNavBar.estadoHome');
    };
}