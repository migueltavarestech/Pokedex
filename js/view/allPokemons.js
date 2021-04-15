define(function() {

    var internals = {};
    var externals = {};
    
    externals.show = function(fetchAll, home, search, pokemonData){

        $("#loading").show();
        $("#app").hide();
        
        fetchAll()
            .then(function(){
                console.log(pokemonData()); // get Pokemon
            }); // set Pokemon
        
        $.get("./snippets/allPokemons.html", function(response){
            $("#app")
                .empty()
                .append($(response));

            $('#search-btn').click(function(){
                var pokemon = $("#name-input").val();
                search(pokemon);
            })

            $(document).ready(function(){
                $("#loading").hide();
                $("#app").show();
            })
        });
    }

    return externals;
})