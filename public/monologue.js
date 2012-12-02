requirejs.config({
    paths: {
        'jquery': 'vendor/jquery-1.8.3',
        'underscore': 'vendor/underscore-1.4.2',
        'backbone': 'vendor/backbone-0.9.2'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
    'jquery',
    'backbone',
    'modules/status/statuses',
    'modules/status/newStatusView',
    'modules/status/statusesView'
], function($, Backbone, Statuses, NewStatusView, StatusesView) {

    $(document).ready(function() {
        var statuses = new Statuses();
        new NewStatusView({ el: $('#new-status'), collection: statuses });
        new StatusesView({ el: $('#statuses'), collection: statuses });
    });

});
