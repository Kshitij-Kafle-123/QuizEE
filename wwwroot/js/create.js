$("#document").ready(function () {

    $("#show").hide();
    $("#join").hide();

   /* $('#btnCreate').on('click', function (e) {
        window.alert("hello");
    });*/
    document.getElementById("back").onmouseover = function () {
        document.getElementById("back").style.color = "blue";

    };
    document.getElementById("back").onclick = function () {


        $("#mainDiv").show();
        $("#join").hide();
        $("#show").hide();
    };

    //btn create game or host game
    document.getElementById("btnCreate").onclick = function () {

        $("#mainDiv").hide();
        $("#qNAdiv").hide();
        $("#join").hide();
        $("#show").show();
        $("#quizdiv").hide();
        $("#funGamediv").hide();
        $("#guessPersondiv").hide();
    };


    //btn join game
     document.getElementById("btnJoin").onclick = function () {

        $("#mainDiv").hide();
        $("#qNAdiv").hide();
        $("#join").show();
        $("#show").hide();
        $("#quizdiv").hide();
        $("#funGamediv").hide();
        $("#guessPersondiv").hide();
    };

    document.getElementById("gk").onclick = function () {

        const btn1 = document.getElementById('funGame');
        const btn2 = document.getElementById('guessPerson');
        const btn3 = document.getElementById('qna');
       // const btn4 = document.getElementById('qna');
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        //btn4.disabled = true;


        $("#quizdiv").show();
        $("#funGamediv").hide();
        $("#guessPersondiv").hide();
        $("#qNAdiv").hide();

    };
    document.getElementById("funGame").onclick = function () {
        $("#quizdiv").hide();
        $("#funGamediv").show();
        $("#guessPersondiv").hide();
        $("#qNAdiv").hide();

       // const btn1 = document.getElementById('funGame');
        const btn2 = document.getElementById('guessPerson');
        const btn3 = document.getElementById('qna');
        const btn4 = document.getElementById('gk');
       // btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;

    };
    document.getElementById("guessPerson").onclick = function () {
        $("#quizdiv").hide();
        $("#funGamediv").hide();
        $("#guessPersondiv").show();
        $("#qNAdiv").hide();

        const btn1 = document.getElementById('funGame');
       // const btn2 = document.getElementById('guessPerson');
        const btn3 = document.getElementById('qna');
        const btn4 = document.getElementById('gk');
        btn1.disabled = true;
       // btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;

    };
    document.getElementById("qna").onclick = function () {
        $("#quizdiv").hide();
        $("#funGamediv").hide();
        $("#guessPersondiv").hide();
        $("#qNAdiv").show();

        const btn1 = document.getElementById('funGame');
        const btn2 = document.getElementById('guessPerson');
       // const btn3 = document.getElementById('qna');
        const btn4 = document.getElementById('gk');
        btn1.disabled = true;
        btn2.disabled = true;
        //btn3.disabled = true;
        btn4.disabled = true;

    };
    document.getElementById("exit").onclick = function () {
        $("#quizdiv").hide();
        $("#funGamediv").hide();
        $("#guessPersondiv").hide();
        $("#qNAdiv").hide();

        const btn1 = document.getElementById('funGame');
        const btn2 = document.getElementById('guessPerson');
        const btn3 = document.getElementById('qna');
        const btn4 = document.getElementById('gk');
        //  const btn4 = document.querySelector('qna');
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        btn4.disabled = false;

    };

  //MAIN BACKEND CODE STARTS FROM HERE
  ////////////////////////////////////

    //Join Game
    $("#submitAns").on('click', function (e) {
        
        var answer = $("#answer").val();
        
        //document.getElementById('#boxchat').innerHTML = '<span>' + answer + '</span>';
        var esp = document.createElement("span");
        document.getElementById("boxchat").appendChild(esp);
        esp.innerHTML = answer+'<br>';
        
    })

    $("#inviteSubmit").on('click', function (e) {

        var inviteCode = $("#inviteCode").val();
        $.ajax({
            type: "POST",
            url: "CreateJoin/join", 
            data: {
                inviteCode: inviteCode
            },

            success: function (result) {
               
                window.alert(result+"You've joined this game !! thank you");
            }
        });
    })
 

})