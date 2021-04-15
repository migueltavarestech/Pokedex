define(['view/allPokemons', 'controller/home', 'service/fetch'], function(allPokemonsView, homeController, fetch){

    var internals = {};
    var externals = {};

    internals.setPokemon = function(data){
        internals.pokemonData = data;
    }

    internals.getPokemon = function(){
        return internals.pokemonData;
    }

    internals.fetchAll = function(){
        return fetch.fetchAll(internals.setPokemon);
    }

    internals.search = function(pokemon){
        return fetch.search(pokemon);
    }

    internals.home = function(){
        window.location.hash = "home";
    }

    externals.init = function() {
        allPokemonsView.show(internals.fetchAll, internals.home, internals.search, internals.getPokemon, fetch.resetOffSet);
    }

    return externals;

})