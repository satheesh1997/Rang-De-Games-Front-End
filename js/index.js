var Preloader = {
    show: function(){
        $(".preloader").fadeIn("500");
    },
    hide: function(){
        $(".preloader").fadeOut("5000");
    }
}
var cdata = [];
function callApi() {
    $.ajax({
        url: 'http://starlord.hackerearth.com/gamesarena',
        async: !1,
        success: function(data) {
            console.log(data);
            cdata = data;
        }
    });
}

$('document').ready(function(){
    callApi();
    Preloader.hide();
    const game = new GamesArena(cdata);
    game.showRatedGames();
    game.showActionGames();
    game.showRaceGames();
    game.showAdvGames();
    game.showSportsGames();
    game.showRpgGames();
    game.showStraGames();
    $('#show_all').click(function(){
        if($(this).prop("checked") == true){
            game.showAll();
            $('#show_all_action').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_action').click(function(){
        if($(this).prop("checked") == true){
            game.showAction();
            $('#show_all').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_adv').click(function(){
        if($(this).prop("checked") == true){
            game.showAdv();
            $('#show_all_action').prop('checked', false);
            $('#show_all').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_racing').click(function(){
        if($(this).prop("checked") == true){
            game.showRacing();
            $('#show_all_action').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_sports').click(function(){
        if($(this).prop("checked") == true){
            game.showSports();
            $('#show_all_action').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_rpg').click(function(){
        if($(this).prop("checked") == true){
            game.showRpg();
            $('#show_all_action').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all').prop('checked', false);
            $('#show_all_stra').prop('checked', false);
        }
     });
     $('#show_all_stra').click(function(){
        if($(this).prop("checked") == true){
            game.showStra();
            $('#show_all_action').prop('checked', false);
            $('#show_all_adv').prop('checked', false);
            $('#show_all_racing').prop('checked', false);
            $('#show_all_sports').prop('checked', false);
            $('#show_all_rpg').prop('checked', false);
            $('#show_all').prop('checked', false);
        }
     });
});
