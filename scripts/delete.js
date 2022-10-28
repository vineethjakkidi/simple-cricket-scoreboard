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