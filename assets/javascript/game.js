$(document).ready(function () {
    console.log("ready!");
    var Random = Math.floor(Math.random() * 101 + 19)

    $("#randomNumber").text(Random);
    var crystalNum1 = Math.floor(Math.random() * 11 + 1);
    var crystalNum2 = Math.floor(Math.random() * 11 + 1);
    var crystalNum3 = Math.floor(Math.random() * 11 + 1);
    var crystalNum4 = Math.floor(Math.random() * 11 + 1);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19)
        $("#randomNumber").text(Random);
        var crystalNum1 = Math.floor(Math.random() * 11 + 1);
        var crystalNum2 = Math.floor(Math.random() * 11 + 1);
        var crystalNum3 = Math.floor(Math.random() * 11 + 1);
        var crystalNum4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#finalScore").text(userTotal);
    }

    function won() {
        alert("You won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function lose() {
        alert("You lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset()
    }
    $("#one").on("click", function () {
        userTotal = userTotal + crystalNum1;
        $("#finalScore").text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lose();
        }
    })
    $("#two").on("click", function () {
        userTotal = userTotal + crystalNum2;
        $("#finalScore").text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lose();
        }
    })
    $("#three").on("click", function () {
        userTotal = userTotal + crystalNum3;
        $("#finalScore").text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lose();
        }
    })
    $("#four").on("click", function () {
        userTotal = userTotal + crystalNum4;
        $("#finalScore").text(userTotal);
        if (userTotal == Random) {
            won();
        }
        else if (userTotal > Random) {
            lose();
        }

    });
});
