define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        home: { hash: '#home', controller: 'home' },
        details: { hash: '#details', controller: 'details'},
        allPokemons: { hash: '#allPokemons', controller: 'allPokemons'}
    }

    internals.defaultRoute = internals.routes.home;

    internals.initController = function(route) {
        require(['controller/' + route.controller], function(controller){
            controller.init();
        })
    }

    internals.getRoute = function(){
        return Object.values(internals.routes).find(function(route) {
            return route.hash === window.location.hash
        })
    }

    externals.init = function(){
        internals.initController(internals.getRoute() || internals.defaultRoute);

        window.onhashchange = function(){
            try {
                internals.initController(internals.getRoute());
            } catch(error) {
                window.location.hash = internals.defaultRoute;
            }
        }
    }

    return externals;
})