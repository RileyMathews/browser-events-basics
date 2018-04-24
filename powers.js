/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
document.querySelector("#activate-flight").addEventListener("click", () => {
    const power = document.querySelector("#flight")
    power.classList.remove("disabled")
    power.classList.add("enabled")
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
document.querySelector("#activate-mindreading").addEventListener("click",() => {
    const power = document.querySelector("#mindreading")
    power.classList.remove("disabled")
    power.classList.add("enabled")
})

document.querySelector("#activate-xray").addEventListener("click",() => {
    const power = document.querySelector("#xray")
    power.classList.remove("disabled")
    power.classList.add("enabled")
})

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click",() => {
    const powers = document.querySelectorAll(".power")
    powers.forEach(power => {
        power.classList.remove("disabled")
        power.classList.add("enabled")
    })
})

document.querySelector("#deactivate-all").addEventListener("click",() => {
    const powers = document.querySelectorAll(".power")
    powers.forEach(power => {
        power.classList.remove("enabled")
        power.classList.add("disabled")
    })
})