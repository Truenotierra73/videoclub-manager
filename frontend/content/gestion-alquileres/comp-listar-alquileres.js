angular.module('videoclub-manager.components')
    .component('compListarAlquileres', {
        templateUrl: 'content/gestion-alquileres/listar-alquileres.html',
        controller: CtrlListarAlquileres
    });

function CtrlListarAlquileres($state, Alquileres) {
    'use strict';
    var ctrl = this; // Declaro la variable controlador

    // VARIABLES DEL MODELO
    ctrl.alquileres = [];
    ctrl.buscador = null;
    ctrl.cmbOpciones = [
        {
            id: 0,
            nombre: 'Cliente'
        },
        {
            id: 1,
            nombre: 'Pelicula'
        },
        {
            id: 2,
            nombre: 'Fecha'
        }
    ];
    ctrl.opcionSeleccionada = ctrl.cmbOpciones[0];

    // FUNCIONES
    ctrl.buscar = function () {
        if (ctrl.opcionSeleccionada.id === 0) {
            Alquileres.buscarCliente({ nombre: ctrl.buscador }, function (res) {
                ctrl.alquileres = res;
                console.log(res);
            });
        } else if (ctrl.opcionSeleccionada.id === 1) {
            Alquileres.buscarPelicula({ titulo: ctrl.buscador }, function (res) {
                ctrl.alquileres = res;
                console.log(res);
            });
        } else if (ctrl.opcionSeleccionada.id === 2) {
            Alquileres.buscarFecha({ rentalDate: ctrl.buscadorfec }, function (res) {
                ctrl.alquileres = res;
                console.log(res);
            });
        }
    }
}
