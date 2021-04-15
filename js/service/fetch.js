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

    externals.resetOffSet = function(){
        internals.offset = 0;
    }

    externals.fetchAll = function(cb){
        var API = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=" + internals.offset;
        internals.offset += 9;

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

    externals.search = function(pokemon){
        var API = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

        return fetch(API)
                    .then(function(response){
                        return response.json();
                    })
    }

    return externals;

})