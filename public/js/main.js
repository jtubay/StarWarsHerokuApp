$('#search-btn').on('click', () => {
    let searchedCharacter = $('#character-search').val().trim();
    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();
    $.get(`/api/characters/${searchedCharacter}`, (data) => {
        console.log(data);
        if(data){
            $("#stats").show();
            $("#name").text(data.name);
            $("#role").text(data.role);
            $("#age").text(data.age);
            $("#force-points").text(data.forcePoints);
        }else{
            $("#name").text(
                "The force is not strong with this one. Your character was not found.");
              $("#stats").hide();
        }
    })

})