define(['view/details', 'controller/home', 'service/fetch'], function(detailsView, homeController, fetch){

    var internals = {};
    var externals = {};

    internals.reload = function(pokemon){
        fetch.init(pokemon, homeController.setPokemon, externals.init);
    }

    internals.home = function(){
        window.location.hash = "home";
    }

    externals.init = function() {
        detailsView.show(internals.reload, homeController.getPokemon(), internals.home);
    }

    return externals;

})