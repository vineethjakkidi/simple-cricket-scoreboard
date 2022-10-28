jQuery(function(){


console.log(window.location)
console.log(window.location.search)
const searchSplitted=window.location.search.split("id=");
console.log(searchSplitted)
console.log(searchSplitted[1]);
const id=searchSplitted[1];
if(!id){//if id is not defined,there is no player defined to update
    return
}
jQuery.ajax({
    url:"http://localhost:3000/players/"+id,
    method:"GET",
    success:function(player){
    console.log(player)
    jQuery("form.player").find("#playerName").val(player.name);
    jQuery("form.player").find("#status").val(player.status);
    jQuery("form.player").find("#runs").val(player.runs);
    jQuery("form.player").find("#balls").val(player.balls);
    jQuery("form.player").find("#fours").val(player.fours);
    jQuery("form.player").find("#sixs").val(player.sixs);
    jQuery("form.player").find("#playerId").val(player.id);
    },
    error:function(){

    }
})
})
