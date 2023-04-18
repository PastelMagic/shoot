let A = 0
let B = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        A = 1
        B = 1
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
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
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
        A = 0
    }
})
basic.forever(function () {
    if (B == 1) {
        music.playMelody("C5 B A G F E D C ", 1000)
        B = 0
    }
})
