define(function() {

    var internals = {};
    var externals = {};
    
    externals.show = function(onClick){

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
            $(document).ready(function(){
                $("#loading").hide();
                $("#app").show();
            })
        });
    }

    return externals;
})