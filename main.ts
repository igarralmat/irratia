radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showString("A")
        basic.pause(1000)
        basic.clearScreen()
    }
    if (2 == receivedNumber) {
        basic.showString("B")
        basic.pause(1000)
        basic.clearScreen()
    }
    if (3 == receivedNumber) {
        basic.showString("A+B")
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(69)
