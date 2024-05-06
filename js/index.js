document.getElementById('image1').addEventListener('click', function() {
    showInfo('Image 1', 'This is the information for Image 1.');
  });
  
  document.getElementById('image2').addEventListener('click', function() {
    showInfo('Image 2', 'This is the information for Image 2.');
  });
  
  document.getElementById('image3').addEventListener('click', function() {
    showInfo('Image 3', 'This is the information for Image 3.');
  });
  document.getElementById('image4').addEventListener('click', function() {
    showInfo('Image 4', 'This is the information for Image 1.');
  });
  
  document.getElementById('image5').addEventListener('click', function() {
    showInfo('Image 5', 'This is the information for Image 2.');
  });
  
  document.getElementById('image6').addEventListener('click', function() {
    showInfo('Image 6', 'This is the information for Image 3.');
  });
  document.getElementById('image7').addEventListener('click', function() {
    showInfo('Image 7', 'This is the information for Image 1.');
  });
  
  document.getElementById('image8').addEventListener('click', function() {
    showInfo('Image 8', 'This is the information for Image 2.');
  });
  
  document.getElementById('image9').addEventListener('click', function() {
    showInfo('Image 9', 'This is the information for Image 3.');
  });
  
  
  function showInfo(title, text) {
    document.getElementById('infoTitle').innerText = title;
    document.getElementById('infoText').innerText = text;
    document.getElementById('infoContainer').style.display = 'block';
  }
  