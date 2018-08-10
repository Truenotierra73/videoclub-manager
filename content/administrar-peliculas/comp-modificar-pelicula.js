angular.module('videoclub-manager.components')
    .component('compModificarPelicula', {
        templateUrl: 'content/administrar-peliculas/modificar-pelicula.html',
        controller: CtrlModificarPelicula
    });

function CtrlModificarPelicula($state, $stateParams, moment, Lenguajes, Peliculas, ServicioProgressBar, ServicioMensajes) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    // Variables utilizadas para las validaciones de los campos
    ctrl.tituloValido = null;
    ctrl.textoValido = null;
    ctrl.anoLanzamientoValido = null;
    ctrl.lenguajeOriginalValido = null;
    ctrl.subtituloValido = null;
    ctrl.duracionAlquilerValido = null;
    ctrl.costoReemplazoValido = null;
    ctrl.tasaAlquilerValido = null;
    ctrl.clasificacionValido = null;
    ctrl.ultimaActualizacionValido = null;
    ctrl.caracteristicasEspecialesValido = null;

    // Variables de la película
    ctrl.pelicula = $stateParams.pelicula; // Objeto que contiene todos los datos de la película
    ctrl.lenguajeOriginalSelec = null;
    ctrl.subtituloSelec = null;
    ctrl.lenguajes = [];
    ctrl.ultimaActualizacionSelec = new Date(moment($stateParams.pelicula.ultimaActualizacion).format()); // Declaro uno nueva fecha y la convierto al formato 'DD/MM/YYYY'

    // FUNCIONES
    ctrl.seleccionarLenguaje = function(lenSel) {
        ctrl.lenguajeOriginalSelec = lenSel;
    };

    ctrl.seleccionarSubtitulo = function (lenSel) {
        ctrl.subtituloSelec = lenSel;
    };

    ctrl.seleccionarUltimaActualizacion = function (fecha) {
        ctrl.ultimaActualizacionSelec = fecha;
    };

    Lenguajes.listarLenguajes(function (res) {
        ctrl.lenguajes = res;
        ctrl.lenguajeOriginalSelec = ctrl.pelicula.lenguajeOriginal;
        ctrl.subtituloSelec = ctrl.pelicula.lenguaje;
    });

    ctrl.validarCampo = function () {
        // ctrl.pelicula.titulo = ctrl.pelicula.titulo.toUpperCase();
        if (ctrl.pelicula.titulo) {
            ctrl.tituloValido = 'has-success';
        } else {
            ctrl.tituloValido = 'has-error';
        }
        if (ctrl.pelicula.texto) {
            ctrl.textoValido = 'has-success';
        } else {
            ctrl.textoValido = 'has-warning';
        }
        if (ctrl.pelicula.anoLanzamiento) {
            ctrl.anoLanzamientoValido = 'has-success';
        } else {
            ctrl.anoLanzamientoValido = 'has-warning';
        }
        if (ctrl.lenguajeOriginalSelec) {
            ctrl.lenguajeOriginalValido = 'has-success';
        } else {
            ctrl.lenguajeOriginalValido = 'has-error';
        }
        if (ctrl.subtituloSelec) {
            ctrl.subtituloValido = 'has-success';
        } else {
            ctrl.subtituloValido = 'has-error';
        }
        if (ctrl.pelicula.duracionAlquiler) {
            ctrl.duracionAlquilerValido = 'has-success';
        } else {
            ctrl.duracionAlquilerValido = 'has-error';
        }
        if (ctrl.pelicula.tasaDeAlquiler) {
            ctrl.tasaAlquilerValido = 'has-success';
        } else {
            ctrl.tasaAlquilerValido = 'has-error';
        }
        if (ctrl.pelicula.costoDeReemplazo) {
            ctrl.costoReemplazoValido = 'has-success';
        } else {
            ctrl.costoReemplazoValido = 'has-error';
        }
        if (ctrl.pelicula.clasificacion) {
            ctrl.clasificacionValido = 'has-success';
        } else {
            ctrl.clasificacionValido = 'has-warning';
        }
        if (ctrl.ultimaActualizacionSelec) {
            ctrl.ultimaActualizacionValido = 'has-success';
        } else {
            ctrl.ultimaActualizacionValido = 'has-warning';
        }
        if (ctrl.pelicula.specialFeatures) {
            ctrl.caracteristicasEspecialesValido = 'has-success';
        } else {
            ctrl.caracteristicasEspecialesValido = 'has-warning';
        }
    };
    ctrl.validarCampo();

    ctrl.guardar = function () {
        ctrl.pelicula.ultimaActualizacion = ctrl.ultimaActualizacionSelec;
        ctrl.pelicula.lenguajeOriginal = ctrl.lenguajeOriginalSelec;
        ctrl.pelicula.lenguaje = ctrl.subtituloSelec;
        if (ctrl.pelicula.titulo && ctrl.pelicula.lenguajeOriginal && ctrl.pelicula.lenguaje && ctrl.pelicula.duracionAlquiler && ctrl.pelicula.tasaDeAlquiler && ctrl.pelicula.costoDeReemplazo) {
            ServicioProgressBar.mostrarProgressBar({titulo: 'Cargando...', tipo: 'info', callback: Peliculas, params: [ctrl.pelicula, 'actualizar peli']});
        } else {
            ServicioMensajes.mostrarMensaje({titulo: 'Error', mensaje: 'Por favor, complete los campos requeridos', callback: null, params: null});
        }
    };

    ctrl.cancelar = function () {
        $state.go('estadoNavBar.estadoListarPeliculas')
    };
}