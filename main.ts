controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(15)
    verification = game.askForNumber("What is the code?", 4)
    if (verification == code) {
        verification = 0
        newCode = game.askForNumber("What code will you use?", 4)
        blockSettings.writeNumber("code", newCode)
        code = newCode
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (code == 0) {
        code = game.askForNumber("What code will you use?", 4)
        blockSettings.writeNumber("code", code)
    } else {
        lock = game.askForNumber("What is the code?", 4)
    }
    if (lock == code) {
        scene.setBackgroundColor(7)
    }
})
let lock = 0
let newCode = 0
let verification = 0
let code = 0
code = 0
