const textDisplayer = document.getElementById("textDisplayer");
const textInput = document.getElementById("textInput");

const textFontInput = document.getElementById("textFont");
const textColorInput = document.getElementById("textColor");
const textFontSizeInput = document.getElementById("textFontSize");
const textFontWeightInput = document.getElementById("textFontWeight");
const hasShadowCheckBox = document.getElementById("ShadowCheck");
const shadowColorInput = document.getElementById("ShadowColor");

const downloadButton = document.getElementById("downloadButton");

function loadText() {
    const text = textInput.value;

    const textFont = textFontInput.value;
    const textColor = textColorInput.value;
    const textFontSize = textFontSizeInput.value;
    const textFontWeight = textFontWeightInput.value;
    const hasShadow = hasShadowCheckBox.checked;
    const shadowColor = shadowColorInput.value;

    textDisplayer.classList.remove("text-placeholder");
    textDisplayer.textContent = `${text}`;

    textDisplayer.style.fontFamily = textFont;
    textDisplayer.style.color = textColor;
    textDisplayer.style.fontWeight = textFontWeight;
    textDisplayer.style.fontSize = `${textFontSize}px`;

    hasShadow ? textDisplayer.style.textShadow = `0 0 7px ${shadowColor}` : null;
}

textInput.addEventListener("input", loadText);
textFontInput.addEventListener("input", loadText);
textColorInput.addEventListener("input", loadText);
textFontSizeInput.addEventListener("input", loadText);
textFontWeightInput.addEventListener("input", loadText);
hasShadowCheckBox.addEventListener("input", loadText);
shadowColorInput.addEventListener("input", loadText);

downloadButton.addEventListener("click", () => {
    html2canvas(textDisplayer, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
        logging: false,
        backgroundColor: null
    }).then(canvas => {
        let a = document.createElement("a");
        a.download = "new_text";
        a.href = canvas.toDataURL();
        a.click();
    })
})