

  document.querySelector('h1').addEventListener('click', function() {
    window.location.href = 'index.html';
  });



  document.querySelector('#calculate-button').addEventListener('click', function() {
    document.querySelector('.results').style.display = 'block';
  });
  document.querySelector('#calculate-button').addEventListener('click', function() {
    calculate(); // Call the calculate function from calculation.js
    document.querySelector('.results').style.display = 'block';
  });