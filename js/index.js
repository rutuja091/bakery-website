function showImageInfo(infoId) {
    var imageInfo = document.getElementById(infoId);
    if (imageInfo.style.display === "none" || !imageInfo.style.display) {
        imageInfo.style.display = "block";
    } else {
        imageInfo.style.display = "none";
    }
}
