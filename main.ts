input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(100)
        strip.show()
    }
})
let ttt = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P4))
    serial.writeLine("")
    if (pins.analogReadPin(AnalogPin.P3) > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(200)
        strip.show()
        basic.pause(100)
    } else {
        if (pins.analogReadPin(AnalogPin.P4) > 1000) {
            for (let index = 0; index <= 5; index++) {
                ttt = 5 - index
                strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                strip.setBrightness(ttt * 40)
                strip.show()
                basic.pause(100)
            }
        }
    }
})
