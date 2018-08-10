angular.module('videoclub-manager.components')
    .component('compListarPeliculas', {
        templateUrl: 'content/administrar-peliculas/listar-peliculas.html',
        controller: CtrlListarPeliculas
    });

function CtrlListarPeliculas($state, Peliculas) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.peliculas = []; // Lista/Vector con objetos película
    ctrl.resultado = {}; // Resultado del back-end del contenido de las peliculas
    // ctrl.buscador = null;
    // ctrl.cmbOpciones = [
    //     {
    //         id: 0,
    //         nombre: 'Pelicula'
    //     },
    //     {
    //         id: 1,
    //         nombre: 'Lenguaje'
    //     }
    // ];
    // ctrl.opcionSelec = ctrl.cmbOpciones[0];

    // VARIABLES DE LA PAGINACIÓN
    ctrl.paginaActual = 1;
    ctrl.maxSize = 10;
    ctrl.itemsPorPagina = 10;
    ctrl.sort = 'peliculaId,asc';

    // FUNCIONES
    ctrl.asignarPagina = function (numPag) {
        ctrl.paginaActual = numPag;
        ctrl.actualizarPag();
    };
    
    ctrl.actualizarPag = function () {
        Peliculas.listarPeliculas({page: ctrl.paginaActual - 1, size: ctrl.maxSize, sort: ctrl.sort}, function (res) {
            console.log(res);        
            ctrl.resultado = res;
            ctrl.peliculas = ctrl.resultado.content;
        });
    };

    ctrl.seleccionarPelicula = function (peliculaSelec) {
        console.log(peliculaSelec);
        $state.go('estadoNavBar.estadoModificarPelicula', {pelicula: peliculaSelec});
    };

    ctrl.registrarNuevaPelicula = function () {
        $state.go('estadoNavBar.estadoRegistrarPelicula');
    };
}

