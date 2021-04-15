define(function() {

    var externals = {};
    var internals = {};

    externals.show = function(reload, pokemonData, home, allPokemons){
        
        $("#loading").show();
        $("#app").hide();
        console.log(pokemonData);

        $.get("./snippets/details.html", function(response){
            $("#app").empty();
            $("#app").append($(response));

            $.get("./snippets/right-panel.html", function(data){
                $("#right-panel").empty();
                $("#right-panel").append($(data));

                internals.buttonEvents(reload, pokemonData, home, allPokemons);
                internals.insertPokemonData(pokemonData);

                $(document).ready(function(){
                    $("#loading").hide();
                    $("#app").show();
                })
            })
        });
    }

    internals.buttonEvents = function(reload, pokemonData, home, allPokemons){
        $('#closeBtn').click(function(){
            home();
        })
        $('#search-btn').click(function(){
            var pokemon = $("#name-input").val();
            reload(pokemon);
        })
        $('#nextBtn').click(function(){
            reload(pokemonData.id+1);
        })
        $('#previousBtn').click(function(){
            reload(pokemonData.id-1);
        })
        $('#allPokemonsBtn').click(function(){
            allPokemons();
        })
    }

    internals.insertPokemonData = function(pokemonData){
        if(pokemonData !== undefined){
            $('#name-screen').text(pokemonData.name);
            $('#weight').text(pokemonData.weight/10);
            $('#height').text(pokemonData.height/10);
            $('#type-screen').text(pokemonData.types[0].type.name);
            $('#id-screen').text(pokemonData.id);
            $('#main-screen').css('background-image', "url(" + pokemonData.sprites.front_default + ")");
        }
    }

    return externals;
})