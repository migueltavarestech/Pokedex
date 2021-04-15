define(function(){

    var internals = {};
    var externals = {};

    internals.offset = 0;

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

    externals.fetchAll = function(cb){
        var API = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + internals.offset;
        internals.offset += 10;

        return fetch(API)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        cb(data);
                    }) 
    }

    externals.init = function(pokemon, cb, success) {
        internals.fetch(pokemon, cb, success);
    }

    return externals;

})