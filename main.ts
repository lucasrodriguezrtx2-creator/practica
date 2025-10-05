basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Heart)
})
