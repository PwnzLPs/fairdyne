key_is_down = {};

// Last update: 3/21/17 - Updated Key Inputs
function handleKeyInput(key, dir) {

	if (!game_started) return false;

	if (dir == "down") {
		key_is_down[key] = true;
	} else if (dir == "up") {
		key_is_down[key] = false;
	}

	switch(scene.scene_state) {
		case "splash":
			if (dir == "down" && key == "A") {
				splash_animation.outro = true;
			}
			break;
		case "gameplay":
			if (dir == "down") gamestate.handleInput(key);
			break;
	}

}


function isKeyDown(key) {
	if (key_is_down[key]) return true;
	else return false;
}


function onKeyDown(e) {
	if ((e.keyCode == 65) || (e.keyCode == 37)) {  // A = left
		handleKeyInput("left", "down");
	} else if ((e.keyCode == 87) || (e.keyCode == 38)) {  // W = up
		handleKeyInput("up", "down");
	} else if ((e.keyCode == 68) || (e.keyCode == 39)) {  // D = right
		handleKeyInput("right", "down");
	} else if ((e.keyCode == 83) || (e.keyCode == 40)) {  // S = down
		handleKeyInput("down", "down");
	} else if ((e.keyCode == 190) || (e.keyCode == 88)) {  // . = B
		handleKeyInput("B", "down");
	} else if ((e.keyCode == 188) || (e.keyCode == 90)) {  // , = A
		handleKeyInput("A", "down");
	}
}



function onKeyUp(e) {
	if ((e.keyCode == 65) || (e.keyCode == 37)) {  // A = left
		handleKeyInput("left", "up");
	} else if ((e.keyCode == 87) || (e.keyCode == 38)) {  // W = up
		handleKeyInput("up", "up");
	} else if ((e.keyCode == 68) || (e.keyCode == 39)) {  // D = right
		handleKeyInput("right", "up");
	} else if ((e.keyCode == 83) || (e.keyCode == 40)) {  // S = down
		handleKeyInput("down", "up");
	} else if ((e.keyCode == 190) || (e.keyCode == 88)) {  // . = B
		handleKeyInput("B", "up");
	} else if ((e.keyCode == 188) || (e.keyCode == 90)) {  // , = A
		handleKeyInput("A", "up");
	}
}




document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
