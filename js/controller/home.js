define(['view/home', 'service/fetch'], function(homeView, fetch){

    var internals = {};
    var externals = {};

    externals.setPokemon = function(data){
        internals.pokemonData = data;
    }

    externals.getPokemon = function(){
        return internals.pokemonData;
    }

    internals.reRoute = function(pokemon){
        fetch.init(pokemon, externals.setPokemon, internals.details);
    }

    internals.details = function(){
        window.location.hash = "details";
    }

    externals.init = function() {
        homeView.show(internals.reRoute);
    }

    return externals;

})