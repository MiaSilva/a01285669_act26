let angle = 0
let straight = 0
let obtuse = 0
let sum_obtuse = 0
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 10; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showString("acute")
            basic.showNumber(angle)
            angle += 1
        } else if (angle == 90) {
            basic.showString("straight")
            basic.showNumber(angle)
            straight += 1
        } else if (angle > 90) {
            basic.showString("obtuse")
            basic.showNumber(angle)
            obtuse += 1
            sum_obtuse += obtuse
        }
    }
    basic.showString("sum obtuse:")
    basic.showNumber(sum_obtuse)
})
