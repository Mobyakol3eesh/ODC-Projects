let chickenContainer = document.querySelector(".chicken-container");
let rocket = document.getElementById("rocket");
// let bullet = document.getElementById("bullet");
let rocketContainer = document.querySelector(".rocket-container");
// let bulletStyle = window.getComputedStyle(bullet);
// let bullet = document.createElement('img')
// bullet.src = 'images/Bullet.png';
// bullet.id = 'bullet';
// rocketContainer.appendChild(bullet)
// let bulletStyle = window.getComputedStyle(bullet);
let rocketStyle = window.getComputedStyle(rocket);

for (var i = 0; i < 84; i++) {
    chickenContainer.insertAdjacentHTML(
        "beforeend",
        `<img id="chicken" src="images/Chicken.png " />`
    );
}

window.addEventListener("keydown", (event) => {
    key = event.key;
    switch (key) {
        case "ArrowUp":
            movement("up");
            break;
        case "ArrowDown":
            movement("down");
            break;
        case "ArrowLeft":
            movement("left");
            break;
        case "ArrowRight":
            movement("right");
            break;
        case " ":
            fire();
    }
});
function movement(direction) {
    let bottomValue = parseInt(rocketStyle.bottom);
    let leftValue = parseInt(rocketStyle.left);
    let leftValueInP = Math.round((leftValue / window.innerWidth) * 100);
    if (direction == "up" && bottomValue < 0) {
        rocket.style.bottom = 10 + parseInt(rocketStyle.bottom) + "px";
    }
    if (direction == "down" && bottomValue > -320) {
        rocket.style.bottom = -10 + parseInt(rocketStyle.bottom) + "px";
    }
    if (direction == "left" && leftValueInP > 10) {
    
        rocket.style.left = -10 + parseInt(rocketStyle.left) + "px";
    }
    if (direction == "right" && leftValueInP < 90) {
        rocket.style.left = 10 + parseInt(rocketStyle.left) + "px";
    }
}
function adjustBulletPosition(bullet,bulletLeft,bulletBottom){
    bullet.style.left = bulletLeft;
    bullet.style.bottom = parseInt(bulletBottom) + 350 + 'px';
}
function getBulletLeft(){
    return rocketStyle.left;
}
function getBulletBottom(){
    return rocketStyle.bottom;
}
function fire() {
    let bullet = document.createElement('img')
    bullet.src = 'images/Bullet.png';
    bullet.id = 'bullet';
    rocketContainer.appendChild(bullet)
    let bulletStyle = window.getComputedStyle(bullet);
    adjustBulletPosition(bullet,getBulletLeft(),getBulletBottom())   
    let interval = setInterval(() => { 
        let bulletBottom = parseInt(bulletStyle.bottom);
        if (bulletBottom > 800) {
            clearInterval(interval);
            bullet.remove();
        } else {
            bullet.style.bottom = bulletBottom + 10 + "px";
        }
    }, 10);
}
