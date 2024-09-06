let chickenContainer = document.querySelector(".chicken-container");
let rocket = document.getElementById("rocket");
let bullet = document.getElementById("bullet");

for (var i = 0; i < 84; i++) {
    chickenContainer.insertAdjacentHTML(
        "beforeend",
        `<img id="chicken" src="images/Chicken.png " />`
    );
}

window.addEventListener("keydown", (event) => {
    key = event.key;
    console.log(key);
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
    }
});
function movement(direction) {
    let rocketStyle = window.getComputedStyle(rocket);
    let bulletStyle = window.getComputedStyle(bullet);

    if (direction == "up" && rocketStyle.bottom.split() > -10) {
        rocket.style.bottom = 10 + parseInt(rocketStyle.bottom) + "px";
        bullet.style.bottom = 10 + parseInt(bulletStyle.bottom) + "px";
    }
    if (direction == "down" && rocketStyle.bottom < '-320px') {
        rocket.style.bottom = -10 + parseInt(rocketStyle.bottom) + "px";
        bullet.style.bottom = -10 + parseInt(bulletStyle.bottom) + "px";
    }
    if (direction == "left" && rocketStyle.left < "-7%") {
        console.log(screen.width);
        rocket.style.left =Math.round(-1 + parseInt(rocketStyle.left) / window.innerWidth * 100 ) + 'px';
        console.log(Math.round(-10 + parseInt(rocketStyle.left) / window.innerWidth * 100 ))
        bullet.style.left = -10 + parseInt(bulletStyle.left) + "px";
    }
    if (direction == "right") {
        rocket.style.left = +10 + parseInt(rocketStyle.left) + "px";
        bullet.style.left = +10 + parseInt(bulletStyle.left) + "px";
    }
    console.log(rocketStyle.bottom)
    console.log(rocketStyle.left)
}
