angular.module('videoclub-manager.factories')
    .factory("Alquileres", function($resource, URL_SERVIDOR) {
        'use strict';
        return $resource(URL_SERVIDOR + 'rentals', {id:'@id'}, {
            listarAlquileres: {
                method: 'GET',
                isArray: true,
                params: {
                    id: null
                }
            },
            buscarCliente: {
                method: 'GET',
                isArray: true,
                params: {
                    nombre: null
                }
            },
            buscarPelicula: {
                method: 'GET',
                isArray: true,
                params: {
                    titulo: null
                }
            },
            buscarFecha: {
                method: 'GET',
                isArray: true,
                params: {
                    rentalDate: null
                }
            }
        });
    //factory tiene metodos por defectos
    });