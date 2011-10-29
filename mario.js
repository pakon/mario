$(document).ready(function() {

var $background = $("#background");

var collisionMap = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var $mario = $("#background .level .mario-sprite");

var marioImg = new Image();
marioImg.src = "http://www.nihilogic.dk/blog-files/mariosprite.png";
$mario.append(marioImg);

var pos = [8,13 - $(window).height()/16];
var vel = [0,0];
var velMax = [0.4,0.8];
var velMin = [-0.4,-0.85];
var marioDir = 0;
var onGround = false;
var marioFaceDir = 1;

var scrollPos = 0;
var scrolling = false;
var scrollSpeed = 0;

var idleTime = 60000;
var lastActionTime;
function checkIdle() {
	var now = new Date().getTime();
	if (now - lastActionTime > idleTime) {
		if (onGround) 
			vel[1] = velMin[1];
		lastActionTime = now;
	}
}

function initMario() {
	var data = $.cookie("mario-data");
	if (data) {
		var vals = data.split(",");
		$background.scrollLeft(parseInt(vals[0]));
		pos[0] = parseFloat(vals[1]);
		pos[1] = parseFloat(vals[2]);
		scrollPos = parseInt(vals[0]);
	} else {
		$background.scrollLeft(0);
	}
	setSprite(spriteStates.JUMPRIGHT);
	setInterval(doMarioStuff, 1000/15);
	lastActionTime = new Date().getTime();
	setInterval(checkIdle, 1000);
}

function setSprite(idx) {
	$mario.scrollLeft(idx*16);
}

var spriteStates = {
	JUMPLEFT : 0,
	RUNLEFT1 : 1,
	RUNLEFT2 : 2,
	RUNLEFT3 : 3,
	STANDLEFT : 5,
	STANDRIGHT : 6,
	RUNRIGHT1 : 7,
	RUNRIGHT2 : 8,
	RUNRIGHT3 : 9,
	JUMPRIGHT : 11
}


function doMarioStuff() {
	var velIncX = 0.05;
	if (marioDir) {
		marioFaceDir = marioDir;
		vel[0] += velIncX * marioDir;
	} else {
		vel[0] *= 0.8;
		if (Math.abs(vel[0]) < 0.05) vel[0] = 0;
	}

	vel[1] += 0.08;
	if (vel[0] > velMax[0]) vel[0] = velMax[0];
	if (vel[0] < velMin[0]) vel[0] = velMin[0];
	if (vel[1] > velMax[1]) vel[1] = velMax[1];
	if (vel[1] < velMin[1]) vel[1] = velMin[1];

	var newPos = [
		pos[0] + vel[0],
		pos[1] + vel[1]
	];

	if (onGround) {
		if (vel[0] == 0) {
			walkCycle = 0;
			setSprite(marioFaceDir < 0 ? spriteStates.STANDLEFT : spriteStates.STANDRIGHT);
		} else {
			walkCycle += 0.5;
			if (walkCycle >= 3) walkCycle = 0;
			setSprite(
				(vel[0] < 0 ? spriteStates.RUNLEFT1 : spriteStates.RUNRIGHT1)
				+ (walkCycle>>0)
			);
		}
	} else {
		walkCycle = 0;
		setSprite(marioFaceDir < 0 ? spriteStates.JUMPLEFT : spriteStates.JUMPRIGHT);
	}

	pos = collide(pos, newPos);	

	if (pos[0] != newPos[0]) vel[0] = 0;
	if (pos[1] != newPos[1]) vel[1] = 0;

	if (pos[1] > 13) pos[1] = 13 - $(window).height()/16;

	if (pos[0] > $(window).width()/16 - 16 + scrollPos/16)
		initScroll(1);
	else if (pos[0] < 16 + scrollPos/16)
		initScroll(-1);

	$mario
		.css("left", pos[0]*16)
		.css("bottom", 13*16 - pos[1]*16)
	;
}

function initScroll(dir) {
	scrollSpeed = dir;
	if (scrolling) return;
	scrolling = true;
	scroll();
}

function scroll() {
	$background.scrollLeft(scrollPos + 32 * scrollSpeed);
	scrollSpeed *= 0.92;

	scrollPos = $background.scrollLeft();
	if (Math.abs(scrollSpeed) > 0.1)
		setTimeout(scroll, 1000 / 15);
	else
		scrolling = false;

}



function collide(pos1, pos2) {
	var oldX = pos1[0];
	var oldY = pos1[1];
	var newX = pos2[0];
	var newY = pos2[1];

	var collision, xAdjust = 0;

	var space = 1/16;

	onGround = false;

	if (oldY != newY) { // moving vertically
		if (newY > oldY) { // moving down
			// lower left collision
			collision = isBlocking(newX + space, newY + 1);
			if (collision && !isBlocking(newX + space, newY)) {
				newY -= collision[1];
				onGround = true;
			}

			// lower right collision
			collision = isBlocking(newX + 1-space, newY + 1);
			if (collision && !isBlocking(newX + 1-space, newY)) {
				newY -= collision[1];
				onGround = true;
			}
		// moving up
		} else {

			// upper left collision
			collision = isBlocking(newX + space, newY);
			if (collision && !isBlocking(newX + space, newY + 1)) {
				newY += (1 - collision[1]);
			}

			// upper right collision
			collision = isBlocking(newX + 1 - space, newY);
			if (collision && !isBlocking(newX + 1 - space, newY + 1)) {
				newY += (1 - collision[1]);
				xAdjust = 1;
			}
		}

	}
	// moving horizontally
	if (oldX != newX) {

		// moving right
		if (newX > oldX) {

			// lower right collision
			collision = isBlocking(newX + 1, newY + 1-space);
			if (collision) {
				newX -= collision[0];
			}

			// upper right collision
			collision = isBlocking(newX + 1, newY);
			if (collision) {
				newX -= collision[0];
			}

		// moving left
		} else {

			// lower left collision
			collision = isBlocking(newX, newY + 1-space);
			if (collision) {
				newX += (1 - collision[0]);
			}

			// upper left collision
			collision = isBlocking(newX, newY);
			if (collision) {
				newX += (1 - collision[0]);
			}
		}
	}

	return [newX,newY,xAdjust];
}


// check if a tile is blocking
function isBlocking(x, y) {
	var tx = x>>0;
	var ty = y>>0;

	if (collisionMap[ty] && collisionMap[ty][tx]) {
		return [x - tx, y - ty];
	}
	if (collisionMap[ty] && typeof collisionMap[ty][tx] == "undefined")
		return [x - tx, y - ty];
}


$(document).keydown(function(e) {
	var now = new Date().getTime();
	switch (e.which) {
		case 39: // right
			lastActionTime = now;
			marioDir = 1;
			break;
		case 37: // left
			lastActionTime = now;
			marioDir = -1;
			break;
		case 38: // up
			lastActionTime = now;
			if (onGround) 
				vel[1] = velMin[1];
			break;
	}
	//console.log(e.which)
});

$(document).keyup(function(e) {
	var now = new Date().getTime();
	switch (e.which) {
		case 39: // right
			lastActionTime = now;
			if (marioDir == 1)
				marioDir = 0;
			break;
		case 37: // left
			lastActionTime = now;
			if (marioDir == -1)
				marioDir = 0;
			break;

	}
	//console.log(e.which)
});

$(window).bind("resize", function() {
	$background.scrollLeft(scrollPos);
});

$(window).bind("unload", function() {
	$.cookie("mario-data", scrollPos + "," + pos[0] + "," + pos[1]);
});



initMario();

});



