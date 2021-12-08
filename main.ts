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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    lock = game.askForNumber("Enter the PIN code.", 4)
    if (lock == code) {
        scene.setBackgroundColor(7)
        game.showLongText(lockedData, DialogLayout.Full)
    }
    if (lock != code) {
        scene.setBackgroundColor(2)
        pause(1000)
        game.showLongText("INTRUDER! INTRUDER!", DialogLayout.Full)
        game.showLongText("Resetting data to prevent data leaks.", DialogLayout.Full)
        game.reset()
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (code == 0) {
        code = game.askForNumber("What code will you use?", 4)
        blockSettings.writeNumber("code", code)
        lockedData = game.askForString("What data would you like to secure?", 24)
    } else {
        game.showLongText("Code already exists, please hit 'A' to log in.", DialogLayout.Bottom)
    }
})
let lockedData = ""
let lock = 0
let newCode = 0
let verification = 0
let code = 0
code = 0
