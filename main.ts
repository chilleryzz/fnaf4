controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        roomCurrent.destroy()
        roomDirection4 = 15
        roomRight = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection5 = 10
        room3 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        room.destroy()
        roomCurrent.destroy()
        roomDirection2 = 5
        roomCurrent2 = sprites.create(assets.image`leftRoom`, SpriteKind.Projectile)
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection3 = 10
        room2 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomDirection == 10) {
        roomCurrent.destroy()
        roomDirection4 = 15
        roomRight = sprites.create(assets.image`rightRoom`, SpriteKind.Projectile)
    } else if (roomDirection == 15) {
        roomCurrent.destroy()
        roomDirection5 = 10
        room3 = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
    } else {
    	
    }
})
let room2: Sprite = null
let roomDirection3 = 0
let roomCurrent2: Sprite = null
let roomDirection2 = 0
let room3: Sprite = null
let roomDirection5 = 0
let roomRight: Sprite = null
let roomDirection4 = 0
let roomDirection = 0
let roomCurrent: Sprite = null
let room: Sprite = null
room = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
roomCurrent = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
roomDirection = 10
