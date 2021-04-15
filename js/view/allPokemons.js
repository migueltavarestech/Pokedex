define(function() {

    var internals = {};
    var externals = {};

    internals.id = 1;
    
    externals.show = function(fetchAll, home, search, pokemonData, resetOffSet){

        internals.id = 1;
        resetOffSet();

        $("#allPokemonsBtn").hide();
        $("#moreBtn").show();
        $("#homeBtn").show();

        $("#loading").show();
        $("#app").hide();

        fetchAll()
            .then(function(){
                internals.loadPage(pokemonData(), search);
            }); // set Pokemon

        $('#moreBtn').click(function(){
            fetchAll()
                .then(function(){
                    internals.addRows(search, pokemonData());
                });
        })

        $('#homeBtn').click(function(){
            home();
        })

        $(window).scroll(function(){
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                fetchAll()
                    .then(function(){
                        internals.addRows(search, pokemonData());
                    });
            }  
        })
    }

    internals.loadPage = function(pokemonData, search){
        console.log(pokemonData);

        $.get("./snippets/allPokemons.html", function(response){
            $("#app")
                .empty()
                .append($(response));

            $('#search-btn').click(function(){
                var pokemon = $("#name-input").val();
                search(pokemon);
            })

            internals.addRows(search, pokemonData);

            $(document).ready(function(){
                $("#loading").hide();
                $("#app").show();
            })
        });
    }

    internals.addRows = function(search, pokemonData) {
        var idToAdd = internals.id;

        for(var i=0; i<3; i++){
            square1 = "<td id='pokemon-" + (idToAdd) + "' class='pokemon-square'></td>";
            square2 = "<td id='pokemon-" + (idToAdd+1) + "' class='pokemon-square'></td>";
            square3 = "<td id='pokemon-" + (idToAdd+2) + "' class='pokemon-square'></td>";
            
            $("#myTable")
                .append("<tr>" + square1 + square2 + square3 + "</tr>");

            idToAdd += 3;
        }

        pokemonData.results.forEach(element => search(element.name).then(function(pokemon){
            console.log(pokemon);
            $("#pokemon-" + pokemon.id).css('background-image', "url(" + pokemon.sprites.front_default + ")");
        }));

        internals.id += 9;
        console.log(internals.id);
    }

    return externals;
})