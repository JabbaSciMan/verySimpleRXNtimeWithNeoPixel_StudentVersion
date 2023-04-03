input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    strip.showRainbow(180, 360)
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
    }
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . # .
        . . # . #
        . . . . .
        `)
    control.reset()
    strip.clear()
    strip.show()
})
input.onPinPressed(TouchPin.P1, function () {
    strip.showRainbow(1, 180)
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
    strip.clear()
    strip.show()
    control.reset()
})
let end = 0
let start = 0
let false_start = false
let running = false
let strip: neopixel.Strip = null
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.clearScreen()
running = false
false_start = false
basic.pause(1000 + randint(0, 2000))
if (!(false_start)) {
    start = input.runningTime()
    running = true
    led.stopAnimation()
    basic.clearScreen()
    led.plot(randint(0, 4), randint(0, 4))
}
strip.clear()
strip.show()
