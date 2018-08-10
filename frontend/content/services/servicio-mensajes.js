angular.module('videoclub-manager.services')
    .service('ServicioMensajes', function ($uibModal) {
        'use strict';
        // Este método muestra un simple mensaje de alerta, indicando algún error.
        this.mostrarMensaje = function (configuracion) {
            $uibModal.open({
                animation: true,
                component: 'compModalMensaje',
                backdrop: false,
                resolve: {
                    configuracion: function () {
                        return configuracion;
                    }
                }
            });
        };
    });


// INSTRUCCIONES
// -------------
// PARA USAR EL SERVICIO DE MENSAJES SE PUEDE LLAMAR A LOS MÉTODOS 'mostrarMensaje', AL MÉTODO SE LE DEBE PASAR
// COMO PARÁMETRO UN OBJETO CON LOS SIGUIENTES PARES CLAVE-VALOR:
//
// titulo: String |requerido--> Es una cadena que contiene el título del modal.
// mensaje: String|requerido --> Es una cadena que contiene el mensaje que se mostrará en el cuerpo del modal.
// esConfirmacion: Boolean|requerido --> Es un booleano que indica si el tipo de mensaje es de confirmación o de alerta, Por defecto es False.
// callback: Function|Opcional --> Es una función que se ejecutará cuando se presione el botón aceptar del modal.
// params: array|opcional --> Son los parámetros que necesita la función callback para ejecutarse.
// btnAceptar --> Se define la cadena que va dentro del botón Aceptar. Por defecto es 'Aceptar'.
// btnCancelar --> Se define la cadena que va dentro del botón Cancelar. Por defecto es 'Cancelar'.