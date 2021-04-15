define(function(){

    var internals = {};
    var externals = {};

    internals.fetch = function(pokemon, cb, success){
        var API = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

        fetch(API)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                cb(data);
            })
            .then(function(){
                success();
            })
    }

    externals.init = function(pokemon, cb, success) {
        internals.fetch(pokemon, cb, success);
    }

    return externals;

})