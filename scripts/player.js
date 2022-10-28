jQuery("form.player").validate({
    rules: {
        playerName: {
            required: true
        },
        status: {
            required: true
        },
        runs: {
            required: true
        },
        balls: {
            required: true
        },
        fours: {
            required: true
        },
        sixs: {
            required: true
        },
    },

    messages: {
        playerName: {
            required: "Playername is required"
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        event.stopPropagation();
        const data = {
            id: jQuery(form).find("#playerId").val(),
            name: jQuery(form).find("#playerName").val(),
            status: jQuery(form).find("#status").val(),
            runs: jQuery(form).find("#runs").val(),//returns data as string
            balls: jQuery(form).find("#balls").val(),
            fours: jQuery(form).find("#fours").val(),
            sixs: jQuery(form).find("#sixs").val(),
        }
        data.runs = parseInt(data.runs);
        data.balls = parseInt(data.balls);
        data.fours = parseInt(data.fours);
        data.sixs = parseInt(data.sixs);
        console.log(data)
        if (data.id) { // update the player 
            jQuery.ajax({
                url: "http://localhost:3000/players/"+data.id,
                method: "PUT",
                data: data,
                success: function (res) {

                },
                error: function (err) {

                }
            })
        } else { // create a player
            jQuery.ajax({
                url: "http://localhost:3000/players",
                method: "POST",
                data: data,
                success: function (res) {

                },
                error: function (err) {

                }
            })
        }

        return false;
    }
})









