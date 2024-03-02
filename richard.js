

  document.querySelector('h1').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  document.querySelector('#calculate-button').addEventListener('click', function() {
    let batteryTemp = document.querySelector('#batteryTemp').value;
    let chargeTime = document.querySelector('#chargeTime').value;
    let batteryCost = document.querySelector('#batteryCost').value;
  
    calculate(batteryTemp, chargeTime, batteryCost); // Pass the input values to the calculate function
  
    document.querySelector('.results').style.display = 'block';
    document.querySelector('.input-container').style.display = 'none';
  });



  document.querySelector('#calculate-button').addEventListener('click', function() {
    document.querySelector('.inputBox').style.display = 'none';
  });

  document.querySelector('#calculate-button').addEventListener('click', function() {
    calculate(); // Call the calculate function from calculation.js
    document.querySelector('.results').style.display = 'block';
  });