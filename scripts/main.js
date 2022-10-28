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
jQuery(".table-scoreboard").on("click",".btn-delete",function(event){
    // const verify=confirm("are you sure you want to delete this player");
    // if (!verify){
    //     return
    // }
    // const id=jQuery(this).closest("tr").attr("data-id")
    // alert(id)
  
    const options={
    backdrop:"static",
    keyboard:false
    }
    const confirmDeleteModal = new bootstrap.Modal('#confirmDeleteModal', options);
    confirmDeleteModal.show();
    const id=jQuery(this).closest("tr").attr("data-id")
    jQuery("#confirmDeleteModal").find(".btn-yes").on("click",function(){
       jQuery.ajax({
        url:"http://localhost:3000/players/"+id,
        method:"DELETE",
        success:function(){
        alert("deleted")
        },
        error:function(err){

        }
       })
    })
})