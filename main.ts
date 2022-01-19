controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        roomCurrent.destroy()
        roomDirection4 = 15
        roomRight = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection5 = 10
        room3 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 5) {
    	
    } else if (roomDirection == 10) {
    	
    } else if (roomDirection == 15) {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite == 50) {
        roomBack.destroy()
        roomBackLight = sprites.create(assets.image`bedRoomOn0`, SpriteKind.Player)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        room.destroy()
        roomCurrent.destroy()
        roomDirection2 = 5
        roomCurrent2 = sprites.create(assets.image`leftRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection3 = 10
        room2 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        roomCurrent.destroy()
        roomDirection4 = 15
        roomRight = sprites.create(assets.image`rightRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection5 = 10
        room3 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
        mySprite = 0
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite == 50) {
        roomBackLight.destroy()
        roomBack = sprites.create(assets.image`bedRoomOff`, SpriteKind.Player)
    }
})
function test () {
    controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
        test()
        
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        room.destroy()
        roomCurrent.destroy()
        roomDirection2 = 20
        animation.runImageAnimation(
        backAnim,
        assets.animation`bedAnim`,
        50,
        false
        )
        roomBack = sprites.create(assets.image`bedRoomOff`, SpriteKind.Projectile)
        mySprite = 50
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection3 = 20
        animation.runImageAnimation(
        backAnim,
        assets.animation`bedAnim`,
        50,
        false
        )
        roomBack = sprites.create(assets.image`bedRoomOff`, SpriteKind.Projectile)
        mySprite = 50
    } else {
    	
    }
})
let room2: Sprite = null
let roomDirection3 = 0
let roomCurrent2: Sprite = null
let roomDirection2 = 0
let roomBackLight: Sprite = null
let roomBack: Sprite = null
let room3: Sprite = null
let roomDirection5 = 0
let mySprite = 0
let roomRight: Sprite = null
let roomDirection4 = 0
let roomDirection = 0
let roomCurrent: Sprite = null
let room: Sprite = null
let backAnim: Sprite = null
backAnim = sprites.create(assets.image`bedRoomOff`, SpriteKind.Projectile)
room = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
roomCurrent = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
roomDirection = 10
