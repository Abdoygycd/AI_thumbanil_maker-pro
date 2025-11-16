const imageUpload = document.getElementById("imageUpload");
const textInput = document.getElementById("textInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let uploadedImage = null;

imageUpload.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.onload = function () {
        uploadedImage = new Image();
        uploadedImage.src = reader.result;
        uploadedImage.onload = function () {
            canvas.width = uploadedImage.width;
            canvas.height = uploadedImage.height;
            ctx.drawImage(uploadedImage, 0, 0);
        };
    };
    reader.readAsDataURL(e.target.files[0]);
});

textInput.addEventListener("input", function () {
    if (!uploadedImage) return;

    ctx.drawImage(uploadedImage, 0, 0);

    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;

    const text = textInput.value;
    ctx.strokeText(text, 20, canvas.height - 40);
    ctx.fillText(text, 20, canvas.height - 40);
});

function downloadImage() {
    const link = document.createElement("a");
    link.download = "thumbnail.png";
    link.href = canvas.toDataURL();
    link.click();
}
