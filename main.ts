input.onButtonPressed(Button.A, function () {
    if (saat < 23) {
        saat += 1
    } else {
        saat = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + adım + "step")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (dakika < 59) {
        dakika += 1
    } else {
        dakika = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    ayar = saat
    zaman = "" + ayar
    zaman = "" + zaman + ":"
    if (dakika < 10) {
        zaman = "" + zaman + "0"
    }
    zaman = "" + zaman + dakika
    basic.showString(zaman)
})
let saat = 0
let dakika = 0
let ayar = 0
let zaman = ""
let adım = 0
adım = 0
zaman = ""
ayar = 0
dakika = 0
saat = 0
basic.forever(function () {
    basic.pause(60000)
    if (dakika < 59) {
        dakika += 1
    } else {
        dakika = 0
        if (saat < 23) {
            saat += 1
        } else {
            saat = 0
        }
    }
})
