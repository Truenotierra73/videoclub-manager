angular.module('videoclub-manager.components')
    .component('compRegistrarPelicula', {
        templateUrl: 'content/administrar-peliculas/registrar-pelicula.html',
        controller: CtrlRegistrarPelicula
    });

function CtrlRegistrarPelicula($state, moment, Peliculas, Lenguajes, ServicioMensajes, ServicioProgressBar) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // Variables del modelo
    ctrl.pelicula = {
        titulo: null,
        texto: null,
        anoLanzamiento: null,
        lenguajeOriginal: null,
        lenguaje: null,
        longitud: null,
        duracionAlquiler: null,
        tasaDeAlquiler: null,
        costoDeReemplazo: null,
        clasificacion: null,
        ultimaActualizacion: null,
        specialFeatures: null
    };
    ctrl.lenguajeOriginalSelec = null;
    ctrl.subtituloSelec = null;
    ctrl.ultimaActualizacionSelec = new Date(moment().format('L')); // Declaro una nueva fecha y la convierto al formato 'DD/MM/YYYY'
    ctrl.lenguajes = [];

    // Funciones
    ctrl.seleccionarLenguaje = function(lenSel) {
        ctrl.lenguajeSelec = lenSel;
    };

    ctrl.seleccionarSubtitulo = function (lenSel) {
        ctrl.subtituloSelec = lenSel;
    };

    ctrl.seleccionarUltimaActualizacion = function (fecha) {
        ctrl.ultimaActualizacionSelec = fecha;
    };

    Lenguajes.listarLenguajes(function (res) {
        ctrl.lenguajes = res;
        ctrl.lenguajeOriginalSelec = res[0];
        ctrl.subtituloSelec = res[0];
    });

    ctrl.guardar = function () {
        ctrl.pelicula.ultimaActualizacion = moment(ctrl.ultimaActualizacionSelec).format();
        ctrl.pelicula.lenguajeOriginal = ctrl.lenguajeOriginalSelec;
        ctrl.pelicula.lenguaje = ctrl.subtituloSelec;
        if (ctrl.pelicula.titulo && ctrl.pelicula.lenguajeOriginal && ctrl.pelicula.lenguaje && ctrl.pelicula.duracionAlquiler && ctrl.pelicula.tasaDeAlquiler && ctrl.pelicula.costoDeReemplazo) {
            ServicioProgressBar.mostrarProgressBar({titulo: 'Cargando...', tipo: 'success', callback: Peliculas, params: [ctrl.pelicula, 'registrar peli']});
        } else {
            ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'Por favor, complete los campos requeridos', callback: null, params: null});
        }
    };

    ctrl.cancelar = function () {
        $state.go('estadoNavBar.estadoListarPeliculas')
    };
}