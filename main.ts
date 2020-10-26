enum ActionKind {
    Walking,
    Idle,
    Jumping,
    waiting
}
namespace SpriteKind {
    export const time = SpriteKind.create()
    export const sign = SpriteKind.create()
    export const signOut = SpriteKind.create()
}
function haveOrder () {
    monkey.say("Time to prep the pizza!", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, false)
    inSignDough.setFlag(SpriteFlag.Invisible, false)
    if (!(isOccupied1)) {
        inSignOven1.setFlag(SpriteFlag.Ghost, true)
        inSignOven1.setFlag(SpriteFlag.Invisible, true)
    }
    if (!(isOccupied2)) {
        inSignOven2.setFlag(SpriteFlag.Ghost, true)
        inSignOven2.setFlag(SpriteFlag.Invisible, true)
    }
    if (!(isOccupied3)) {
        inSignOven3.setFlag(SpriteFlag.Ghost, true)
        inSignOven3.setFlag(SpriteFlag.Invisible, true)
    }
    if (!(isOccupied4)) {
        inSignOven4.setFlag(SpriteFlag.Ghost, true)
        inSignOven4.setFlag(SpriteFlag.Invisible, true)
    }
    isOrderTaken = true
}
function inSignOven4Off () {
    inSignOven4.setFlag(SpriteFlag.Ghost, true)
    inSignOven4.setFlag(SpriteFlag.Invisible, true)
}
function inSignOven2Off () {
    inSignOven2.setFlag(SpriteFlag.Ghost, true)
    inSignOven2.setFlag(SpriteFlag.Invisible, true)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    isOrderTaken = true
    haveOrder()
})
function placeOven (zone: number) {
    if (zone == 4) {
        inSignOven4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f f f f f 2 2 2 f f f f f . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
        oven.zone1_oven()
        tiles.placeOnTile(inSignOven4, tiles.getTileLocation(13, 2))
    }
    if (zone == 3) {
        inSignOven3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f f f f f 5 5 5 f f f f f . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
        oven.zone2_oven()
        tiles.placeOnTile(inSignOven3, tiles.getTileLocation(16, 2))
    }
    if (zone == 2) {
        inSignOven2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 3 f . . . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . f 3 3 3 3 3 f . . . . . 
            . . . f 3 3 3 3 3 3 3 f . . . . 
            . . f 3 3 3 3 3 3 3 3 3 f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f f f f f 3 3 3 f f f f f . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
        oven.zone3_oven()
        tiles.placeOnTile(inSignOven2, tiles.getTileLocation(19, 2))
    }
    if (zone == 1) {
        inSignOven1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 8 f . . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . f 8 8 8 8 8 f . . . . . 
            . . . f 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
            . f f f f f 8 8 8 f f f f f . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
        oven.zone4_oven()
        tiles.placeOnTile(inSignOven1, tiles.getTileLocation(22, 2))
    }
}
function placeFridge (zone: number) {
    if (zone == 6) {
        inSignFridge = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . 2 2 2 . 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 6) {
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(20, 7))
        fridge.zone6_fridge()
    }
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
}
function ingredientsOut () {
    monkey.say("Need to go to the oven", 1000)
    inSignVeggies.setFlag(SpriteFlag.Ghost, true)
    inSignVeggies.setFlag(SpriteFlag.Invisible, true)
    if (isOccupied1) {
        inSignOven2.setFlag(SpriteFlag.Ghost, false)
        inSignOven2.setFlag(SpriteFlag.Invisible, false)
    } else if (isOccupied2) {
        inSignOven3.setFlag(SpriteFlag.Ghost, false)
        inSignOven3.setFlag(SpriteFlag.Invisible, false)
    } else if (isOccupied3) {
        inSignOven4.setFlag(SpriteFlag.Ghost, false)
        inSignOven4.setFlag(SpriteFlag.Invisible, false)
    } else {
        inSignOven1.setFlag(SpriteFlag.Ghost, false)
        inSignOven1.setFlag(SpriteFlag.Invisible, false)
    }
}
function readyForCustomer () {
    monkey.say("Alright, let's deliver this pizza!", 1000)
    inSignOven1.setFlag(SpriteFlag.Ghost, false)
    inSignOven1.setFlag(SpriteFlag.Invisible, false)
    inSignOven2.setFlag(SpriteFlag.Ghost, true)
    inSignOven2.setFlag(SpriteFlag.Invisible, true)
}
function background () {
    scene.setTile(4, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b b 
        `, false)
    scene.setTile(2, img`
        . . c c c c c c c c c c c c c c 
        . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
        c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        `, true)
    scene.setTile(3, img`
        c c c c c c c c c c c c c c . . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . 
        1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        `, true)
    scene.setTile(5, img`
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        `, true)
    scene.setTile(9, img`
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
        c b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b b 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b b b b b b b b b b b b b b 
        c 3 b b b b b b b b b b b b b b 
        c 3 b b 3 3 b b b b 3 3 b b b b 
        . c c b c c b 3 3 b c c b 3 3 3 
        . . c c c c c c c c c c c c c c 
        . . c b b b b b c . . . . . . . 
        . . c 3 3 3 3 3 c . . . . . . . 
        . . . c c c c c . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        `, true)
    scene.setTile(11, img`
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 c 
        1 1 1 1 1 1 1 1 1 1 1 3 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 b c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 b b c 
        b b b b b b b b b b b b b b b c 
        b b b b b b b b b b b b b b 3 c 
        b b b b 3 3 b b b b 3 3 b b 3 c 
        3 3 3 b c c b 3 3 b c c b c c . 
        c c c c c c c c c c c c c c . . 
        . . . . . . . . c b b b b c . . 
        . . . . . . . . c 3 3 3 3 c . . 
        . . . . . . . . . c c c c . . . 
        `, true)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(8, img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, false)
}
info.onCountdownEnd(function () {
    controller.moveSprite(monkey, 100, 100)
    scene.cameraFollowSprite(monkey)
})
function clock2 (timeWaiting: number) {
    isOccupied2 = true
    Timer2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.time)
    Timer2.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(Timer2, anim)
    animation.runImageAnimation(
    Timer2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 f 1 f . 
        . f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
        . f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
        . f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e f f f f f f f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
        . . f 1 1 1 1 1 1 1 1 1 f 7 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
        . f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
        . f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
        . . f 1 f 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f f f f f f f e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f f 1 1 1 1 f 7 7 7 7 f f . 
        . . f 7 f 1 1 1 f 7 7 7 7 7 f . 
        . f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 7 7 7 f 7 7 7 f f . . 
        . . f f 7 7 7 7 f 7 7 7 7 f f . 
        . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `],
    timeWaiting / 8,
    false
    )
    console.logValue("time waiting", timeWaiting)
    for (let index = 0; index < timeWaiting / 100; index++) {
        pause(100)
    }
    Timer2.destroy()
    isOccupied2 = false
}
function inSignOven3Off () {
    inSignOven3.setFlag(SpriteFlag.Ghost, true)
    inSignOven3.setFlag(SpriteFlag.Invisible, true)
}
function placeDough (zone: number) {
    if (zone == 8) {
        inSignDough = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . 2 2 2 . 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 8) {
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(13, 7))
        dough.zone8_dough()
    }
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
}
function placeKitchen (zone: number) {
    if (zone == 7) {
        inSignKitchen = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . 2 2 2 . 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 7) {
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(16, 7))
        kitchen.zone7_kitchen()
    }
    inSignKitchen.setFlag(SpriteFlag.Ghost, true)
    inSignKitchen.setFlag(SpriteFlag.Invisible, true)
}
function workAtStation (timeWorking: number) {
    getCoords()
    monkey.destroy()
    monkey = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............fffff...............
        ...........feeeeef..............
        ..........fddddeeef.............
        .........cdfddfdeeff............
        .........cdfddfdeeddf...........
        ........cdeeddddeebdc...........
        ........cddddcddeebdc...........
        ........cccccddeeefc............
        .........fddddeeeff.............
        ..........fffffeeeef............
        ............ffeeeeeef.ff........
        ...........feefeefeef.ef........
        ..........feefeefeeef.ef........
        .........fbdfdbfbbfeffef........
        .........fddfddfddbeffff........
        ..........fffffffffffff.........
        `, SpriteKind.Player)
    monkey.setVelocity(0, 0)
    monkey.setPosition(freezeX, freezeY)
    info.startCountdown(timeWorking)
}
function doughDone () {
    monkey.say("Let's head over to the kitchen", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
    inSignKitchen.setFlag(SpriteFlag.Ghost, false)
    inSignKitchen.setFlag(SpriteFlag.Invisible, false)
}
function placeVeggies (zone: number) {
    if (zone == 5) {
        inSignVeggies = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 5) {
        tiles.placeOnTile(inSignVeggies, tiles.getTileLocation(21, 4))
        veggies.zone5_veggies()
    }
    inSignVeggies.setFlag(SpriteFlag.Ghost, true)
    inSignVeggies.setFlag(SpriteFlag.Invisible, true)
}
function clock1 (timeWaiting: number) {
    isOccupied1 = true
    Timer1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.time)
    Timer1.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(Timer1, anim)
    animation.runImageAnimation(
    Timer1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 f 1 f . 
        . f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
        . f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
        . f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e f f f f f f f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
        . . f 1 1 1 1 1 1 1 1 1 f 7 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
        . f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
        . f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
        . . f 1 f 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f f f f f f f e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f f 1 1 1 1 f 7 7 7 7 f f . 
        . . f 7 f 1 1 1 f 7 7 7 7 7 f . 
        . f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 7 7 7 f 7 7 7 f f . . 
        . . f f 7 7 7 7 f 7 7 7 7 f f . 
        . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `],
    timeWaiting / 8,
    false
    )
    console.logValue("time waiting", timeWaiting)
    for (let index = 0; index < timeWaiting / 100; index++) {
        pause(100)
    }
    Timer1.destroy()
    isOccupied1 = false
}
function ZonesAndTimers () {
    Oven1_Zone = 1
    Oven2_Zone = 2
    Oven3_Zone = 3
    Oven4_Zone = 4
    Veggies_Zone = 5
    Fridge_Zone = 6
    Kitchen_Zone = 7
    Dough_Zone = 8
    Oven1_Timer = 10000
    Oven2_Timer = 10000
    Oven3_Timer = 10000
    Oven4_Timer = 10000
    Veggie_Timer = 1
    Fridge_Timer = 1
    Kitchen_Timer = 1
    Dough_Timer = 1
}
function clock4 (timeWaiting: number) {
    isOccupied4 = true
    Timer4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.time)
    Timer4.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(Timer4, anim)
    animation.runImageAnimation(
    Timer4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 f 1 f . 
        . f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
        . f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
        . f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e f f f f f f f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
        . . f 1 1 1 1 1 1 1 1 1 f 7 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
        . f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
        . f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
        . . f 1 f 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f f f f f f f e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f f 1 1 1 1 f 7 7 7 7 f f . 
        . . f 7 f 1 1 1 f 7 7 7 7 7 f . 
        . f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 7 7 7 f 7 7 7 f f . . 
        . . f f 7 7 7 7 f 7 7 7 7 f f . 
        . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `],
    timeWaiting / 8,
    false
    )
    console.logValue("time waiting", timeWaiting)
    for (let index = 0; index < timeWaiting / 100; index++) {
        pause(100)
    }
    Timer4.destroy()
    isOccupied4 = false
}
function inSignOven1Off () {
    inSignOven1.setFlag(SpriteFlag.Ghost, true)
    inSignOven1.setFlag(SpriteFlag.Invisible, true)
}
function veggiesReady () {
    monkey.say("Lets add the veggies", 1000)
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
    inSignVeggies.setFlag(SpriteFlag.Ghost, false)
    inSignVeggies.setFlag(SpriteFlag.Invisible, false)
}
function clock3 (timeWaiting: number) {
    isOccupied3 = true
    Timer3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.time)
    Timer3.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(Timer3, anim)
    animation.runImageAnimation(
    Timer3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 f 1 f . 
        . f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
        . f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
        . f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e f f f f f f f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
        . . f 1 1 1 1 1 1 1 1 1 f 7 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
        . f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
        . f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
        . . f 1 f 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f f f f f f f e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f f 1 1 1 1 f 7 7 7 7 f f . 
        . . f 7 f 1 1 1 f 7 7 7 7 7 f . 
        . f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 7 7 7 f 7 7 7 f f . . 
        . . f f 7 7 7 7 f 7 7 7 7 f f . 
        . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `],
    timeWaiting / 8,
    false
    )
    console.logValue("time waiting", timeWaiting)
    for (let index = 0; index < timeWaiting / 100; index++) {
        pause(100)
    }
    Timer3.destroy()
    isOccupied3 = false
}
function getCoords () {
    freezeX = monkey.x
    freezeY = monkey.y
}
function kitchenReady () {
    monkey.say("Lets go to the fridge", 1000)
    inSignKitchen.setFlag(SpriteFlag.Ghost, true)
    inSignKitchen.setFlag(SpriteFlag.Invisible, true)
    inSignFridge.setFlag(SpriteFlag.Ghost, false)
    inSignFridge.setFlag(SpriteFlag.Invisible, false)
}
let isPizzaDone = false
let areVeggiesReady = false
let isIngredientOut = false
let isKitchenReady = false
let isDoughDone = false
let Timer3: Sprite = null
let Timer4: Sprite = null
let Dough_Timer = 0
let Kitchen_Timer = 0
let Fridge_Timer = 0
let Veggie_Timer = 0
let Oven4_Timer = 0
let Oven3_Timer = 0
let Oven2_Timer = 0
let Oven1_Timer = 0
let Timer1: Sprite = null
let freezeY = 0
let freezeX = 0
let inSignKitchen: Sprite = null
let anim: animation.Animation = null
let Timer2: Sprite = null
let inSignVeggies: Sprite = null
let inSignFridge: Sprite = null
let isOrderTaken = false
let inSignOven4: Sprite = null
let isOccupied4 = false
let inSignOven3: Sprite = null
let isOccupied3 = false
let inSignOven2: Sprite = null
let isOccupied2 = false
let inSignOven1: Sprite = null
let isOccupied1 = false
let inSignDough: Sprite = null
let Oven4_Zone = 0
let Oven3_Zone = 0
let Oven2_Zone = 0
let Oven1_Zone = 0
let Veggies_Zone = 0
let Fridge_Zone = 0
let Kitchen_Zone = 0
let Dough_Zone = 0
let monkey: Sprite = null
ZonesAndTimers()
monkey = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffff...............
    ...........feeeeef..............
    ..........fddddeeef.............
    .........cdfddfdeeff............
    .........cdfddfdeeddf...........
    ........cdeeddddeebdc...........
    ........cddddcddeebdc...........
    ........cccccddeeefc............
    .........fddddeeeff.............
    ..........fffffeeeef............
    ............ffeeeeeef.ff........
    ...........feefeefeef.ef........
    ..........feefeefeeef.ef........
    .........fbdfdbfbbfeffef........
    .........fddfddfddbeffff........
    ..........fffffffffffff.........
    `, SpriteKind.Player)
scene.cameraFollowSprite(monkey)
scene.setTileMap(img`
    4 4 4 4 4 4 4 4 4 4 2 3 e 1 1 e 1 1 e 1 1 e 1 1 
    4 4 4 4 4 4 4 4 4 4 5 7 e 1 1 e 1 1 e 1 1 e 1 1 
    4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 9 b e 1 1 e 1 1 1 e 1 1 e e 
    4 4 4 4 4 4 4 4 4 4 f f e 1 1 e 1 1 1 e 1 1 e e 
    `)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(12, 2))
background()
placeDough(Dough_Zone)
placeKitchen(Kitchen_Zone)
placeFridge(Fridge_Zone)
placeVeggies(Veggies_Zone)
placeOven(Oven1_Zone)
placeOven(Oven2_Zone)
placeOven(Oven3_Zone)
placeOven(Oven4_Zone)
inSignOven1Off()
inSignOven2Off()
inSignOven3Off()
inSignOven4Off()
haveOrder()
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(Dough_Timer)
        doughDone()
    }
    if (monkey.overlapsWith(inSignKitchen) && isDoughDone) {
        isKitchenReady = false
        isIngredientOut = true
        workAtStation(Kitchen_Timer)
        kitchenReady()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        areVeggiesReady = true
        workAtStation(Fridge_Timer)
        veggiesReady()
    }
    if (monkey.overlapsWith(inSignVeggies) && areVeggiesReady) {
        areVeggiesReady = false
        isPizzaDone = true
        workAtStation(Veggie_Timer)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignOven1) && isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
        clock1(Oven1_Timer)
    }
})
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(Dough_Timer)
        doughDone()
    }
    if (monkey.overlapsWith(inSignKitchen) && isDoughDone) {
        isKitchenReady = false
        isIngredientOut = true
        workAtStation(Kitchen_Timer)
        kitchenReady()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        areVeggiesReady = true
        workAtStation(Fridge_Timer)
        veggiesReady()
    }
    if (monkey.overlapsWith(inSignVeggies) && areVeggiesReady) {
        areVeggiesReady = false
        isPizzaDone = true
        workAtStation(Veggie_Timer)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignOven2) && isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
        clock2(Oven2_Timer)
    }
})
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(Dough_Timer)
        doughDone()
    }
    if (monkey.overlapsWith(inSignKitchen) && isDoughDone) {
        isKitchenReady = false
        isIngredientOut = true
        workAtStation(Kitchen_Timer)
        kitchenReady()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        areVeggiesReady = true
        workAtStation(Fridge_Timer)
        veggiesReady()
    }
    if (monkey.overlapsWith(inSignVeggies) && areVeggiesReady) {
        areVeggiesReady = false
        isPizzaDone = true
        workAtStation(Veggie_Timer)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignOven3) && isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
        clock3(Oven3_Timer)
    }
})
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(Dough_Timer)
        doughDone()
    }
    if (monkey.overlapsWith(inSignKitchen) && isDoughDone) {
        isKitchenReady = false
        isIngredientOut = true
        workAtStation(Kitchen_Timer)
        kitchenReady()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        areVeggiesReady = true
        workAtStation(Fridge_Timer)
        veggiesReady()
    }
    if (monkey.overlapsWith(inSignVeggies) && areVeggiesReady) {
        areVeggiesReady = false
        isPizzaDone = true
        workAtStation(Veggie_Timer)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignOven4) && isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
        clock4(Oven4_Timer)
    }
})
