controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`frontRoom`)
        facing = 10
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 5) {
        room.setImage(assets.image`leftDoor`)
        facing = 25
        door = 1
    } else if (facing == 15) {
        room.setImage(assets.image`rightDoor`)
        facing = 30
        door = 1
    } else if (facing == 25) {
        room.setImage(assets.image`leftRoom`)
        door = 0
        facing = 5
    } else if (facing == 30) {
        room.setImage(assets.image`rightRoom`)
        door = 0
        facing = 15
    } else if (facing == 10) {
        room.setImage(assets.image`closet`)
        door = 1
        facing = 35
    } else if (facing == 35) {
        room.setImage(assets.image`frontRoom`)
        door = 0
        facing = 10
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 20) {
        room.setImage(assets.image`bedRoomOn0`)
    } else if (facing == 25) {
        room.setImage(assets.image`leftDoorLight`)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`leftRoom`)
        facing = 5
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`rightRoom`)
        facing = 15
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (facing == 20) {
        room.setImage(assets.image`bedRoomOff`)
    } else if (facing == 25) {
        room.setImage(assets.image`leftDoor`)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`bedRoomOff`)
        facing = 20
    }
})
let facing = 0
let room: Sprite = null
let door = 0
door = 0
room = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
facing = 10
