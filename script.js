function ApiFullScreenAtk() {
    const fakeImg = document.getElementById("fake-img");
    const container = document.getElementById("container")
    container.classList.add("display-none")
    fakeImg.classList.remove("display-none");
    fakeImg.classList.add("fullscreen")
    document.documentElement.requestFullscreen();
}

function attack() {
    const container = document.getElementById("attack-container")
    container.classList.remove("display-none")
    document.documentElement.requestFullscreen();
}
