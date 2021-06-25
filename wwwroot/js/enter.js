$("#document").ready(function (e) {
    $("#enterBtn").on('click', function (e) {
        var userName = $("#userName").val();
        $.ajax({
            type: "POST",
            url: "CreateJoin/hello",
            data: {
                userName: userName
            },
            
            success: function (result) {
                console.log("hellloooooo1!");
                window.alert(result);
            }
        });

    })

})
    
