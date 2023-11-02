$(document).ready(function() {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

    lightning_one();
    lightning_two();
    lightning_three();

    // Function to scroll the components to the left
    function scrollComponent($component, counter) {
        if (counter < 9) {
            $component.animate({ left: "-=367px" }, 500);
            counter += 1;
        } else {
            $component.animate({ left: "0px" }, 500);
            counter = 0;
        }
        return counter;
    }

    $("#head").click(function() {
        headclix = scrollComponent($("#head"), headclix);
    });

    $("#eyes").click(function() {
        eyeclix = scrollComponent($("#eyes"), eyeclix);
    });

    $("#nose").click(function() {
        noseclix = scrollComponent($("#nose"), noseclix);
    });

    $("#mouth").click(function() {
        mouthclix = scrollComponent($("#mouth"), mouthclix);
    });

    $("#head").on('contextmenu', function(e) {
        e.preventDefault();
        headclix = scrollComponent($("#head"), headclix);
        return false;
    });

    $("#eyes").on('contextmenu', function(e) {
        e.preventDefault();
        eyeclix = scrollComponent($("#eyes"), eyeclix);
        return false;
    });

    $("#nose").on('contextmenu', function(e) {
        e.preventDefault();
        noseclix = scrollComponent($("#nose"), noseclix);
        return false;
    });

    $("#mouth").on('contextmenu', function(e) {
        e.preventDefault();
        mouthclix = scrollComponent($("#mouth"), mouthclix);
        return false;
    });
    
    //This code plays the audio when the "playButton" is clicked. This is a user-initiated action.
    document.getElementById("playButton").addEventListener("click", function() {
        var audio = document.getElementById("thunderSound");
        audio.play();
    });

    // Function to play the thunder sound
    function playThunderSound() {
        var audio = document.getElementById("thunderSound");
        audio.play();
    }

    // Existing lightning functions
    function lightning_one() {
        $("#container #lightning1").fadeIn(250).fadeOut(250, function() {
            playThunderSound();
        });
        setTimeout(lightning_one, 4000);
    }

    function lightning_two() {
        $("#container #lightning2").fadeIn("fast").fadeOut("fast", function() {
            playThunderSound();
        });
        setTimeout(lightning_two, 5000);
    }

    function lightning_three() {
        $("#container #lightning3").fadeIn("fast").fadeOut("fast", function() {
            playThunderSound();
        });
        setTimeout(lightning_three, 7000);
    }
});
