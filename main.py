def on_b_pressed():
    global verification, newCode
    verification = game.ask_for_number("What is the code?", 4)
    if verification == code:
        verification = 0
        newCode = game.ask_for_number("What code will you use?", 4)
        blockSettings.write_number("code", newCode)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_menu_pressed():
    global code, lock
    if code == 0:
        code = game.ask_for_number("What code will you use?", 4)
        blockSettings.write_number("code", code)
    else:
        lock = game.ask_for_number("What is the code?", 4)
    if lock == code:
        scene.set_background_color(7)
controller.menu.on_event(ControllerButtonEvent.PRESSED, on_menu_pressed)

lock = 0
newCode = 0
verification = 0
code = 0
code = 0