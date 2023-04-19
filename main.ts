let B = 0
let A = 0
let X = 0
let Y = 0
basic.forever(function () {
    if (A == 0 && B == 0) {
        if (input.buttonIsPressed(Button.A)) {
            A = 1
            B = 1
        }
    }
})
basic.forever(function () {
    if (A == 1) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        A = 0
    }
})
basic.forever(function () {
    if (B == 1) {
        music.playMelody("C5 B A G F E D C ", 1000)
        B = 0
    }
})
basic.forever(function () {
    led.unplot(X, Y)
    if (input.acceleration(Dimension.X) < 0) {
        if (0 < X) {
            X += -1
        }
    } else {
        if (X < 4) {
            X += 1
        }
    }
    if (input.acceleration(Dimension.Y) < 0) {
        if (0 < Y) {
            Y += -1
        }
    } else {
        if (Y < 4) {
            Y += 1
        }
    }
    basic.pause(100)
    led.plot(X, Y)
    basic.pause(100)
})
