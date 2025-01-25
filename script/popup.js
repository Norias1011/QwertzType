function showPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

function hidePopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}

function initAddEventListenerPopup() {
    let shareButton = document.querySelector(".shareButton button")
    let popupBackground = document.querySelector(".popupBackground")
    shareButton.addEventListener("click", () => {
        showPopup()
    })

    popupBackground.addEventListener("click", (event) => {
        if (event.target === popupBackground) {
            hidePopup()
        }
    })
}