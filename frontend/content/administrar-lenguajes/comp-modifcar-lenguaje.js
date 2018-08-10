angular.module('videoclub-manager.components')
    .component('compModificarLenguaje', {
        templateUrl: 'content/administrar-lenguajes/modificar-lenguaje.html',
        controller: CtrlModificarLenguaje
    });

function CtrlModificarLenguaje($state, moment, Lenguajes, ServicioProgressBar, ServicioMensajes) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.lenguajes = [];
    ctrl.lenguajeSelec = null;
    ctrl.lenguaje = {
        nombre: null,
        ultimaActualizacion: null
    };
    ctrl.ultimaActualizacionSelec = new Date(moment().format('L')); // Instancia de una nueva fecha, se formatea y utiliza la fecha actual.

    // FUNCIONES
    // Función listar lenguajes a través de la factoría Lenguajes.
    Lenguajes.listarLenguajes(function (res) {
        ctrl.lenguajes = res;
        ctrl.lenguajeSelec = res[0];
    });

    ctrl.seleccionarLenguaje = function(lenSel) {
        ctrl.lenguajeSelec = lenSel;
    };

    ctrl.seleccionarUltimaActualizacion = function (fecha) {
        ctrl.ultimaActualizacionSelec = fecha;
    };

    // Función guardar
    ctrl.guardar = function () {
        if (ctrl.lenguaje.nombre) {
            ctrl.lenguajeSelec.nombre = ctrl.lenguaje.nombre;
            ctrl.lenguajeSelec.ultimaActualizacion = ctrl.lenguaje.ultimaActualizacionSelec;
            ServicioProgressBar.mostrarProgressBar({titulo: 'Cargando...', tipo: 'info', callback: Lenguajes, params: [ctrl.lenguajeSelec, 'actualizar lenguaje']});
        } else {
            ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'Por favor, complete los campos requeridos', callback: null, params: null});
        }
    };

    // Función cancelar
    ctrl.cancelar = function () {
        $state.go('estadoNavBar.estadoHome');
    };
}