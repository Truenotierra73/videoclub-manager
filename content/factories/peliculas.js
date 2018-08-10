angular.module('videoclub-manager.factories')
    .factory('Peliculas', function (URL_SERVIDOR, $resource) {
        'use strict';
        return $resource(URL_SERVIDOR + 'films/:id', {id: '@id'}, {
            listarPeliculas: {
                method: 'GET',
                isArray: false,
                params: {
                    page: null,
                    size: null,
                    sort: null
                }
            }
        });
    });