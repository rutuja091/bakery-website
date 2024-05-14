function change(path) {
    imgElement = document.getElementById('product-main-image');

    if (path == 1) {
        imgElement.src = "./images/index/review-one.jpg";
    }
    else if (path == 2) {
        imgElement.src = "./images/index/review-two.png";
    }
    else if (path == 3) {
        imgElement.src = "./images/index/review-three.jpg";
    }
    else if (path == 4) {
        imgElement.src = "./images/index/review-four.jpg";
    }
    else if (path == 5) {
        imgElement.src = "./images/index/review-five.jpg";
    }
    else if (path == 6) {
        imgElement.src = "./images/index/review-six.jpg";
    }
}