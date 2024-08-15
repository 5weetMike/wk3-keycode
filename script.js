//script to show the current location and movement of the mouse while in motion.
document.addEventListener('mousemove', (event) => {
    const coords = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById('mouse-coords').textContent = coords;
});
//script to show the key that has been pressed.
document.addEventListener('keydown', (event) => {
    const key = `Key: ${event.key}`;
    document.getElementById('key-press').textContent = key;
});
//script to show the location the user has clicked their mouse.
document.addEventListener('click', (event) => {
    const click = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById('mouse-click').textContent = click;
});
