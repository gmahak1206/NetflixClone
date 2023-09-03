$(document).ready(function(){

    //to hide other answers i.e. show one answer at one time
    function showHide(event){
        for (i = 1 ; i < 7 ; i++){
            if (i == event){
                continue;
            }
            $(".answer" + i).hide();
            if ($(".button" + i).html() == "X"){
                $(".button" + i).html("➕")
            }
        }
    };

    
    count = [0,0,0,0,0,0];
    $(".button1").click(()=>{
        showHide(1);
        count[0] += 1;
        if (count[0] % 2 == 0){
            $(".button1").html("➕");
            $(".answer1").hide();
        }
        else{
            $(".button1").html("X");
            $(".answer1").show();
            $(".answer1").css({
                "padding" : "15px"
            });
            $(".answer1").html("Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.");
        };
        
    });
    $(".button2").click(()=>{
        showHide(2);
        count[1] += 1;
        if (count[1] % 2 == 0){
            $(".button2").html("➕");
            $(".answer2").hide();
        }
        else{
            $(".button2").html("X");
            $(".answer2").show();
            $(".answer2").css({
                "padding" : "15px"
            });
            $(".answer2").html("Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.");
        };
    })
    $(".button3").click(()=>{
        showHide(3);
        count[2] += 1;
        if (count[2] % 2 == 0){
            $(".button3").html("➕");
            $(".answer3").hide();
        }
        else{
            $(".button3").html("X");
            $(".answer3").show();
            $(".answer3").css({
                "padding" : "15px"
            });
            $(".answer3").html("Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.");
        };
    });
    $(".button4").click(()=>{
        showHide(4);
        count[3] += 1;
        if (count[3] % 2 == 0){
            $(".button4").html("➕");
            $(".answer4").hide();
        }
        else{
            $(".button4").html("X");
            $(".answer4").show();
            $(".answer4").css({
                "padding" : "15px"
            });
            $(".answer4").html("Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.");
        };
    });
    $(".button5").click(()=>{
        showHide(5);
        count[4] += 1;
        if (count[4] % 2 == 0){
            $(".button5").html("➕");
            $(".answer5").hide();
        }
        else{
            $(".button5").html("X");
            $(".answer5").show();
            $(".answer5").css({
                "padding" : "15px"
            });
            $(".answer5").html("Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.");
        };
    });
    $(".button6").click(()=>{
        showHide(6);
        count[5] += 1;
        if (count[5] % 2 == 0){
            $(".button6").html("➕");
            $(".answer6").hide();
        }
        else{
            $(".button6").html("X");
            $(".answer6").show();
            $(".answer6").css({
                "padding" : "15px"
            });
            $(".answer6").html("The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.");
        };
    });
});