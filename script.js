for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let myAudio = document.querySelectorAll(".beat")[i]
        myAudio.play()



    });
}

document.addEventListener("keypress", function (event) {
    var keyPressed = event.key;
    console.log(keyPressed)

    switch (keyPressed) {
        case "w":
            let myAudio1 = new Audio("sounds/sound1.wav")
            myAudio1.play()
            break;
        case "a":
            let myAudio2 = new Audio("sounds/sound2.wav")
            myAudio2.play()
            break;
        case "s":
            let myAudio3 = new Audio("sounds/sound3.wav")
            myAudio3.play()
            break;
        case "d":
            let myAudio4 = new Audio("sounds/sound4.wav")
            myAudio4.play()
            break;
        case "j":
            let myAudio5 = new Audio("sounds/sound5.wav")
            myAudio5.play()
            break;
        case "k":
            let myAudio6 = new Audio("sounds/sound6.wav")
            myAudio6.play()
            break;
        case "l":
            let myAudio7 = new Audio("sounds/sound7.wav")
            myAudio7.play()
            break;

        default:
            break;
    }

});
