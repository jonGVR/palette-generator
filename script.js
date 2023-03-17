const refreshBtn = document.querySelector(".refresh-btn");
      container = document.querySelector(".container");

const maxColors = 21;

const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxColors; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const colors = document.createElement("li");

        colors.classList.add("color");

        colors.innerHTML = 
        `<div class="color-box" style="background: ${randomHex}"></div>
        <span class="color-hexvalue">${randomHex}</span>`;

        colors.addEventListener("click", () => copyColor(colors, randomHex));

        container.appendChild(colors);
    }
}
generatePalette();

const copyColor = (el, hexValue) => {
    const colorElement = el.querySelector(".color-hexvalue");
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerHTML = "Copied";
        setTimeout(() => colorElement.innerHTML = hexValue, 1000);
    });
}

refreshBtn.addEventListener("click", generatePalette);