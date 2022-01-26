enum RadioMessage {
    message1 = 49434,
    nightOver = 15539
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`frontRoom`)
        facing = 10
    }
})
function freddlesGo1 () {
    room.setImage(assets.image`bedRoomOnFred1`)
    pause(200)
    freddles = 0
    room.setImage(assets.image`bedRoomOn0`)
}
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
    if (closClosed == 0) {
        if (leftClosed == 0) {
            if (righClosed == 0) {
                if (facing == 20) {
                    if (freddles == 3) {
                        freddlesGo3()
                    } else if (freddles == 2) {
                        freddlesGo2()
                    } else if (freddles == 1) {
                        freddlesGo1()
                    } else {
                        room.setImage(assets.image`bedRoomOn0`)
                    }
                } else if (facing == 25) {
                    // jumpscare function soon
                    if (boni == 5) {
                        room.setImage(assets.image`leftDoorLightBonnieHiding`)
                        pause(100)
                        room.setImage(assets.image`rightDoorLightBonnieHiding2`)
                        pause(100)
                        room.setImage(assets.image`rightDoorLightBonnieHiding3`)
                        pause(100)
                        boni = 0
                        room.setImage(assets.image`leftDoorLight`)
                    } else if (boni == 10) {
                        room.setImage(assets.image`leftDoorLightBonnieHiding`)
                        pause(100)
                        room.setImage(assets.image`rightDoorLightBonnieHiding2`)
                        pause(100)
                        room.setImage(assets.image`rightDoorLightBonnieHiding3`)
                        pause(100)
                        boni = 0
                        room.setImage(assets.image`leftDoorLight`)
                    } else if (boni == 15) {
                        bonHallJump()
                    } else {
                        room.setImage(assets.image`leftDoorLight`)
                    }
                } else if (facing == 30) {
                    if (true) {
                    	
                    } else if (false) {
                    	
                    } else if (false) {
                    	
                    } else {
                        room.setImage(assets.image`rightDoorLight`)
                    }
                } else if (facing == 35) {
                    room.setImage(assets.image`closetLight`)
                }
            }
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (facing == 35) {
        room.setImage(assets.image`closet`)
        closClosed = 0
    } else if (facing == 30) {
        room.setImage(assets.image`rightDoor`)
        righClosed = 0
    } else if (facing == 25) {
        room.setImage(assets.image`leftDoor`)
        leftClosed = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`leftRoom`)
        facing = 5
    }
})
function freddlesGo2 () {
    room.setImage(assets.image`bedRoomOnFred2`)
    pause(200)
    room.setImage(assets.image`bedRoomOnFred1`)
    freddles = 1
    pause(200)
    freddles = 0
    room.setImage(assets.image`bedRoomOn0`)
}
radio.onReceivedMessage(RadioMessage.nightOver, function () {
    room.destroy()
    clock = sprites.create(assets.image`clock`, SpriteKind.Projectile)
    music.buzzer.play()
    pause(5000)
    game.over(true)
})
function bonHallJump () {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`rightRoom`)
        facing = 15
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (closClosed == 0) {
        if (leftClosed == 0) {
            if (righClosed == 0) {
                if (facing == 20) {
                    room.setImage(assets.image`bedRoomOff`)
                } else if (facing == 25) {
                    room.setImage(assets.image`leftDoor`)
                } else if (facing == 30) {
                    room.setImage(assets.image`rightDoor`)
                } else if (facing == 35) {
                    room.setImage(assets.image`closet`)
                }
            }
        }
    }
})
function freddlesGo3 () {
    room.setImage(assets.image`bedRoomOnFred3`)
    pause(200)
    room.setImage(assets.image`bedRoomOnFred2`)
    freddles = 2
    pause(200)
    room.setImage(assets.image`bedRoomOnFred1`)
    freddles = 1
    pause(200)
    freddles = 0
    room.setImage(assets.image`bedRoomOn0`)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (door == 0) {
        room.setImage(assets.image`bedRoomOff`)
        facing = 20
    } else if (facing == 35) {
        room.setImage(assets.image`closetClosed`)
        closClosed = 10
    } else if (facing == 30) {
        room.setImage(assets.image`rightDoorClosed`)
        righClosed = 10
    } else if (facing == 25) {
        room.setImage(assets.image`leftDoorClosed`)
        leftClosed = 10
    }
})
let chica = 0
let clock: Sprite = null
let righClosed = 0
let leftClosed = 0
let closClosed = 0
let freddles = 0
let facing = 0
let room: Sprite = null
let door = 0
let boni = 0
boni = 0
door = 0
room = sprites.create(assets.image`frontRoom`, SpriteKind.Projectile)
facing = 10
forever(function () {
    pause(270000)
    radio.sendMessage(RadioMessage.nightOver)
})
forever(function () {
    pause(randint(20000, 100000))
    if (chica == 0) {
        chica += 5
    }
    if (chica == 5) {
        chica += 5
    }
    if (chica == 10) {
        chica += 5
    }
})
forever(function () {
    pause(randint(20000, 100000))
    if (freddles == 0) {
        freddles += 1
    } else if (boni == 0) {
        boni += 5
    }
    if (freddles == 1) {
        freddles += 1
    } else if (boni == 5) {
        boni += 5
    }
    if (freddles == 2) {
        freddles += 1
    } else if (boni == 10) {
        boni += 5
    }
})
