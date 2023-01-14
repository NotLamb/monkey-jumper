enum ActionKind {
    Walking,
    Idle,
    Jumping
}
enum RadioMessage {
    message1 = 49434,
    RESETGRAVITY = 50857,
    ENABLEGRAVITY = 56972
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Monkey_Player.sayText(idle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        idle = true
    }
    if (!(controller.right.isPressed())) {
        idle = false
        left = true
        right = false
        if (!(controller.right.isPressed()) && airborne == false) {
            moving = true
            right = false
            AnimateLeft()
        }
    } else {
        idle = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.left.isPressed()) {
        moving = true
        left = true
        right = false
        animation.runImageAnimation(
        Monkey_Player,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        100,
        true
        )
    } else {
        moving = false
        idle = true
        right = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.right.isPressed()) {
        moving = true
        right = true
        left = false
        animation.runImageAnimation(
        Monkey_Player,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . f f e e e d d d d f . . 
            . . . f d d e e d d d d d d c . 
            . . . c d b e e d f d d f d c . 
            f f . c d b e e d f d d f d d c 
            f e f . c f e e d d d d e e d c 
            f e f . . f e e e d c d d d d c 
            f e f . . f f e e e d c c c f . 
            f e f . f e e e e f f f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f e e e e f e e f e f f . . 
            . . f e e e f f f e e f f e f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f b e e e e e f f . . . . 
            . . f f d d c e e f f e f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        100,
        true
        )
    } else {
        moving = false
        left = true
        idle = true
    }
})
function Jump () {
    idle = false
    if (Monkey_Player.isHittingTile(CollisionDirection.Bottom)) {
        moving = false
        idle = false
        gravity = -80
        pause(400)
        gravity = 0
        pause(100)
        gravity = 80
    } else if (CanDoubleJump == true && gravity > 0) {
        gravity = -80
        pause(400)
        gravity = 0
        pause(100)
        gravity = 80
        CanDoubleJump = false
    }
}
function Disable_Gravity () {
    gravity = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.left.isPressed())) {
        idle = false
        right = true
        left = false
        if (!(controller.left.isPressed()) && airborne == false) {
            moving = true
            right = true
            left = false
            animation.runImageAnimation(
            Monkey_Player,
            [img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                f f . c d b e e d d c d d d d c 
                f e f . c f e e d d d c c c c c 
                f e f . . f f e e d d d d d f . 
                f e f . f e e e e f f f f f . . 
                f e f f e e e e e e e f . . . . 
                . f f e e e e f e f f e f . . . 
                . . f e e e e f e f f e f . . . 
                . . . f e f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `,img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . . f e e d f d d f d c . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d d d d e e d c 
                . . . c d b e e d d c d d d d c 
                f f . c d b e e e d d c c c c c 
                f e f . c f f e e e d d d d f . 
                f e f . f e e e e f f f f f f . 
                f e f f e e e e e e e f f f f . 
                . f f e e e e f e f d d f d d f 
                . . f e e e e f e f b d f b d f 
                . . f e f f f f f f f f f f f f 
                . . f d d c f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                `,img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . f f e e e d d d d f . . 
                . . . f d d e e d d d d d d c . 
                . . . c d b e e d f d d f d c . 
                f f . c d b e e d f d d f d d c 
                f e f . c f e e d d d d e e d c 
                f e f . . f e e e d c d d d d c 
                f e f . . f f e e e d c c c f . 
                f e f . f e e e e f f f f f . . 
                . f f f e e e e e e e f . . . . 
                . . f e e e e f e e f e f f . . 
                . . f e e e f f f e e f f e f . 
                . f b f f f f f f c d d b d d f 
                . f d d c f . . f d d d c d d f 
                . . f f f . . . f f f f f f f . 
                `,img`
                . . . . . . . f f f f f . . . . 
                . . . . f f f e e e e e f . . . 
                . . . f d d e e e e d d d f . . 
                . . . c d b e e e d d d d d c . 
                . . . c d b e e d d d d d d c . 
                . f f . c f e e d f d d f d d c 
                f e f . . f e e d f d d f d d c 
                f e f . . f e e d d d d e e d c 
                f e f . . f f e e d c d d d f . 
                f e f . f e e e e e d f f f . . 
                . f f f e e e e e e e f . . . . 
                . . f f b e e e e e f f . . . . 
                . . f f d d c e e f f e f . . . 
                . . . . f f f c d d b d d f . . 
                . . . . . f f d d d c d d f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                . . . c d b e e d d c d d d d c 
                . . . . c f e e e d d c c c c c 
                . . . . . f f e e e d d d d f . 
                . . . . f e e e e f f f f f . . 
                f f . f e e e e e e f f . . . . 
                f e . f e e f e e f e e f . . . 
                f e . f e e e f e e f e e f . . 
                f e f f e f b b f b d f d b f . 
                f f f f e b d d f d d f d d f . 
                . f f f f f f f f f f f f f . . 
                `],
            100,
            true
            )
        } else {
            idle = true
        }
    }
})
function AnimateLeft () {
    animation.runImageAnimation(
    Monkey_Player,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    true
    )
}
function EnableGravity () {
    gravity = 150
}
let CanDoubleJump = false
let airborne = false
let right = false
let left = false
let moving = false
let idle = false
let gravity = 0
let Monkey_Player: Sprite = null
scene.cameraFollowSprite(Monkey_Player)
tiles.setCurrentTilemap(tilemap`level2`)
gravity = 150
idle = true
moving = false
left = false
right = true
airborne = false
Monkey_Player = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
Monkey_Player.setPosition(10, 58)
forever(function () {
    if (controller.left.isPressed() == false && controller.right.isPressed() == true) {
        idle = false
    }
})
forever(function () {
    if (controller.left.isPressed() == true && controller.right.isPressed() == false) {
        idle = false
    }
})
forever(function () {
    pause(500)
    controller.moveSprite(Monkey_Player, 50, 0)
})
forever(function () {
    if (!(Monkey_Player.isHittingTile(CollisionDirection.Bottom))) {
        airborne = true
        moving = false
    }
})
forever(function () {
    Monkey_Player.setVelocity(0, gravity)
})
forever(function () {
    if (Monkey_Player.isHittingTile(CollisionDirection.Bottom)) {
        CanDoubleJump = true
        airborne = false
    }
})
forever(function () {
    if (controller.right.isPressed() && controller.left.isPressed()) {
        idle = true
    }
})
forever(function () {
    if (controller.left.isPressed() == false && controller.right.isPressed() == false && airborne == false) {
        idle = true
    }
})
forever(function () {
    if (Monkey_Player.vx < 0) {
        left = true
    } else if (Monkey_Player.vx > 0) {
        right = true
    }
})
forever(function () {
    if (airborne == true) {
        idle = false
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (airborne == false && controller.right.isPressed() == true && controller.left.isPressed() == false) {
    	
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (idle == true) {
        if (right == true) {
            animation.runImageAnimation(
            Monkey_Player,
            [img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                . . . c d b e e d d c d d d d c 
                . . . . c f e e e d d c c c c c 
                . . . . . f f e e e d d d d f . 
                . . . . f e e e e f f f f f . . 
                f f . f e e e e e e f f . . . . 
                f e . f e e f e e f e e f . . . 
                f e . f e e e f e e f e e f . . 
                f e f f e f b b f b d f d b f . 
                f f f f e b d d f d d f d d f . 
                . f f f f f f f f f f f f f . . 
                `],
            500,
            true
            )
        }
        if (left == true) {
            animation.runImageAnimation(
            Monkey_Player,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f f f f f e e e e f . . . . 
                . . . . f f e e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `],
            500,
            true
            )
        }
    }
})
