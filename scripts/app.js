jQuery.ajax({
    method:"GET",
    url:"http://localhost:3000/players",
    success:function(res){
        res.forEach(function(player){
         player.sr=(player.runs/player.balls)*100;
        })
        var playersHTML=res.map(function(player){
            return ` <tr data-id="${player.id}">
            <td>
            <a href="player.html?id=${player.id}">`+player.name+`</a></td>
            <td>${player.status}</td>
            <td>${player.runs}</td>
            <td>${player.balls}</td>
            <td>${player.fours}</td>
            <td>${player.sixs}</td>
            <td>${player.sr.toFixed(2)}</td>
            <td><button class="btn btn-link btn-delete">DELETE</button></td>
          </tr>`
        });
        tableRows=playersHTML.join("")
        console.log(playersHTML)
        jQuery(".table-scoreboard").find("tbody").html( tableRows)
    },
    error:function(err){
     console.log("I am on error")   
    }
})