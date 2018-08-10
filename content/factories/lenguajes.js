angular.module('videoclub-manager.factories')
    .factory('Lenguajes', function (URL_SERVIDOR, $resource) {
        'use strict';
        return $resource(URL_SERVIDOR + 'lenguajes/:id', {id: '@id'}, {
            listarLenguajes: {
                method: 'GET',
                isArray: true,
                params: {
                    id: null
                }
            }
        });
    });