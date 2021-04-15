define(function() {

    var externals = {};
    
    externals.show = function(reload, pokemonData, home){
        
        $("#loading").show();
        $("#app").hide();
        console.log(pokemonData);

        $.get("/snippets/details.html", function(response){
            $("#app").empty();
            $("#app").append($(response));

            $.get("/snippets/right-panel.html", function(data){
                $("#right-panel").empty();
                $("#right-panel").append($(data));
                $('#closeBtn').click(function(){
                    home();
                })
                $('#search-btn').click(function(){
                    var pokemon = $("#name-input").val();
                    reload(pokemon);
                })

                if(pokemonData !== undefined){
                    $('#name-screen').text(pokemonData.name);
                    $('#weight').text(pokemonData.weight/10);
                    $('#height').text(pokemonData.height/10);
                    $('#type-screen').text(pokemonData.types[0].type.name);
                    $('#id-screen').text(pokemonData.id);
                    $('#main-screen').css('background-image', "url(" + pokemonData.sprites.front_default + ")");
                }

                $(document).ready(function(){
                    $("#loading").hide();
                    $("#app").show();
                })
            })
        });
    }

    return externals;
})