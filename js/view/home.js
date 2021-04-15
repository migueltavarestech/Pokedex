define(function() {

    var internals = {};
    var externals = {};
    
    externals.show = function(onClick, allPokemons){

        $("#allPokemonsBtn").show();
        $("#moreBtn").hide();
        $("#homeBtn").hide();

        $("#loading").show();
        $("#app").hide();

        $.get("./snippets/home.html", function(response){
            $("#app")
                .empty()
                .append($(response));
            $('#search-btn').click(function(){
                var pokemon = $("#name-input").val();
                onClick(pokemon);
            })
            $('#allPokemonsBtn').click(function(){
                allPokemons();
            })
            $(document).ready(function(){
                $("#loading").hide();
                $("#app").show();
            })
        });
    }

    return externals;
})